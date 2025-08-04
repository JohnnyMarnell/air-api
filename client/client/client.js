"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createClient = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("./utils");
const createClient = (config = {}) => {
    let _config = (0, utils_1.mergeConfigs)((0, utils_1.createConfig)(), config);
    let instance;
    if (_config.axios && !('Axios' in _config.axios)) {
        instance = _config.axios;
    }
    else {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const { auth, ...configWithoutAuth } = _config;
        instance = axios_1.default.create(configWithoutAuth);
    }
    const getConfig = () => ({ ..._config });
    const setConfig = (config) => {
        _config = (0, utils_1.mergeConfigs)(_config, config);
        instance.defaults = {
            ...instance.defaults,
            ..._config,
            // @ts-expect-error
            headers: (0, utils_1.mergeHeaders)(instance.defaults.headers, _config.headers),
        };
        return getConfig();
    };
    // @ts-expect-error
    const request = async (options) => {
        const opts = {
            ..._config,
            ...options,
            axios: options.axios ?? _config.axios ?? instance,
            headers: (0, utils_1.mergeHeaders)(_config.headers, options.headers),
        };
        if (opts.security) {
            await (0, utils_1.setAuthParams)({
                ...opts,
                security: opts.security,
            });
        }
        if (opts.requestValidator) {
            await opts.requestValidator(opts);
        }
        if (opts.body && opts.bodySerializer) {
            opts.body = opts.bodySerializer(opts.body);
        }
        const url = (0, utils_1.buildUrl)(opts);
        try {
            // assign Axios here for consistency with fetch
            const _axios = opts.axios;
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { auth, ...optsWithoutAuth } = opts;
            const response = await _axios({
                ...optsWithoutAuth,
                baseURL: opts.baseURL,
                data: opts.body,
                headers: opts.headers,
                // let `paramsSerializer()` handle query params if it exists
                params: opts.paramsSerializer ? opts.query : undefined,
                url,
            });
            let { data } = response;
            if (opts.responseType === 'json') {
                if (opts.responseValidator) {
                    await opts.responseValidator(data);
                }
                if (opts.responseTransformer) {
                    data = await opts.responseTransformer(data);
                }
            }
            return {
                ...response,
                data: data ?? {},
            };
        }
        catch (error) {
            const e = error;
            if (opts.throwOnError) {
                throw e;
            }
            // @ts-expect-error
            e.error = e.response?.data ?? {};
            return e;
        }
    };
    return {
        buildUrl: utils_1.buildUrl,
        delete: (options) => request({ ...options, method: 'DELETE' }),
        get: (options) => request({ ...options, method: 'GET' }),
        getConfig,
        head: (options) => request({ ...options, method: 'HEAD' }),
        instance,
        options: (options) => request({ ...options, method: 'OPTIONS' }),
        patch: (options) => request({ ...options, method: 'PATCH' }),
        post: (options) => request({ ...options, method: 'POST' }),
        put: (options) => request({ ...options, method: 'PUT' }),
        request,
        setConfig,
    };
};
exports.createClient = createClient;
