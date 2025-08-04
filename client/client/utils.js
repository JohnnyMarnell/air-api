"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createConfig = exports.mergeHeaders = exports.axiosHeadersKeywords = exports.mergeConfigs = exports.getUrl = exports.buildUrl = exports.setAuthParams = exports.createQuerySerializer = void 0;
const auth_1 = require("../core/auth");
const pathSerializer_1 = require("../core/pathSerializer");
const PATH_PARAM_RE = /\{[^{}]+\}/g;
const defaultPathSerializer = ({ path, url: _url }) => {
    let url = _url;
    const matches = _url.match(PATH_PARAM_RE);
    if (matches) {
        for (const match of matches) {
            let explode = false;
            let name = match.substring(1, match.length - 1);
            let style = 'simple';
            if (name.endsWith('*')) {
                explode = true;
                name = name.substring(0, name.length - 1);
            }
            if (name.startsWith('.')) {
                name = name.substring(1);
                style = 'label';
            }
            else if (name.startsWith(';')) {
                name = name.substring(1);
                style = 'matrix';
            }
            const value = path[name];
            if (value === undefined || value === null) {
                continue;
            }
            if (Array.isArray(value)) {
                url = url.replace(match, (0, pathSerializer_1.serializeArrayParam)({ explode, name, style, value }));
                continue;
            }
            if (typeof value === 'object') {
                url = url.replace(match, (0, pathSerializer_1.serializeObjectParam)({
                    explode,
                    name,
                    style,
                    value: value,
                    valueOnly: true,
                }));
                continue;
            }
            if (style === 'matrix') {
                url = url.replace(match, `;${(0, pathSerializer_1.serializePrimitiveParam)({
                    name,
                    value: value,
                })}`);
                continue;
            }
            const replaceValue = encodeURIComponent(style === 'label' ? `.${value}` : value);
            url = url.replace(match, replaceValue);
        }
    }
    return url;
};
const createQuerySerializer = ({ allowReserved, array, object, } = {}) => {
    const querySerializer = (queryParams) => {
        const search = [];
        if (queryParams && typeof queryParams === 'object') {
            for (const name in queryParams) {
                const value = queryParams[name];
                if (value === undefined || value === null) {
                    continue;
                }
                if (Array.isArray(value)) {
                    const serializedArray = (0, pathSerializer_1.serializeArrayParam)({
                        allowReserved,
                        explode: true,
                        name,
                        style: 'form',
                        value,
                        ...array,
                    });
                    if (serializedArray)
                        search.push(serializedArray);
                }
                else if (typeof value === 'object') {
                    const serializedObject = (0, pathSerializer_1.serializeObjectParam)({
                        allowReserved,
                        explode: true,
                        name,
                        style: 'deepObject',
                        value: value,
                        ...object,
                    });
                    if (serializedObject)
                        search.push(serializedObject);
                }
                else {
                    const serializedPrimitive = (0, pathSerializer_1.serializePrimitiveParam)({
                        allowReserved,
                        name,
                        value: value,
                    });
                    if (serializedPrimitive)
                        search.push(serializedPrimitive);
                }
            }
        }
        return search.join('&');
    };
    return querySerializer;
};
exports.createQuerySerializer = createQuerySerializer;
const setAuthParams = async ({ security, ...options }) => {
    for (const auth of security) {
        const token = await (0, auth_1.getAuthToken)(auth, options.auth);
        if (!token) {
            continue;
        }
        const name = auth.name ?? 'Authorization';
        switch (auth.in) {
            case 'query':
                if (!options.query) {
                    options.query = {};
                }
                options.query[name] = token;
                break;
            case 'cookie': {
                const value = `${name}=${token}`;
                if ('Cookie' in options.headers && options.headers['Cookie']) {
                    options.headers['Cookie'] = `${options.headers['Cookie']}; ${value}`;
                }
                else {
                    options.headers['Cookie'] = value;
                }
                break;
            }
            case 'header':
            default:
                options.headers[name] = token;
                break;
        }
        return;
    }
};
exports.setAuthParams = setAuthParams;
const buildUrl = (options) => {
    const url = (0, exports.getUrl)({
        path: options.path,
        // let `paramsSerializer()` handle query params if it exists
        query: !options.paramsSerializer ? options.query : undefined,
        querySerializer: typeof options.querySerializer === 'function'
            ? options.querySerializer
            : (0, exports.createQuerySerializer)(options.querySerializer),
        url: options.url,
    });
    return url;
};
exports.buildUrl = buildUrl;
const getUrl = ({ path, query, querySerializer, url: _url, }) => {
    const pathUrl = _url.startsWith('/') ? _url : `/${_url}`;
    let url = pathUrl;
    if (path) {
        url = defaultPathSerializer({ path, url });
    }
    let search = query ? querySerializer(query) : '';
    if (search.startsWith('?')) {
        search = search.substring(1);
    }
    if (search) {
        url += `?${search}`;
    }
    return url;
};
exports.getUrl = getUrl;
const mergeConfigs = (a, b) => {
    const config = { ...a, ...b };
    config.headers = (0, exports.mergeHeaders)(a.headers, b.headers);
    return config;
};
exports.mergeConfigs = mergeConfigs;
/**
 * Special Axios headers keywords allowing to set headers by request method.
 */
exports.axiosHeadersKeywords = [
    'common',
    'delete',
    'get',
    'head',
    'patch',
    'post',
    'put',
];
const mergeHeaders = (...headers) => {
    const mergedHeaders = {};
    for (const header of headers) {
        if (!header || typeof header !== 'object') {
            continue;
        }
        const iterator = Object.entries(header);
        for (const [key, value] of iterator) {
            if (exports.axiosHeadersKeywords.includes(key) &&
                typeof value === 'object') {
                mergedHeaders[key] = {
                    ...mergedHeaders[key],
                    ...value,
                };
            }
            else if (value === null) {
                delete mergedHeaders[key];
            }
            else if (Array.isArray(value)) {
                for (const v of value) {
                    // @ts-expect-error
                    mergedHeaders[key] = [...(mergedHeaders[key] ?? []), v];
                }
            }
            else if (value !== undefined) {
                // assume object headers are meant to be JSON stringified, i.e. their
                // content value in OpenAPI specification is 'application/json'
                mergedHeaders[key] =
                    typeof value === 'object' ? JSON.stringify(value) : value;
            }
        }
    }
    return mergedHeaders;
};
exports.mergeHeaders = mergeHeaders;
const createConfig = (override = {}) => ({
    ...override,
});
exports.createConfig = createConfig;
