import type { Options as ClientOptions, TDataShape, Client } from './client';
import type { GetV1AssetsData, GetV1AssetsResponses, GetV1AssetsErrors, DeleteV1AssetsByAssetIdData, DeleteV1AssetsByAssetIdResponses, GetV1AssetsByAssetIdData, GetV1AssetsByAssetIdResponses, PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdData, PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdResponses, GetV1AssetsByAssetIdVersionsData, GetV1AssetsByAssetIdVersionsResponses, GetAssetVersionData, GetAssetVersionResponses, PatchV1AssetsByAssetIdVersionsByVersionIdData, PatchV1AssetsByAssetIdVersionsByVersionIdResponses, GetV1AssetsByAssetIdVersionsByVersionIdDownloadData, GetV1AssetsByAssetIdVersionsByVersionIdDownloadResponses, PostV1AssetsByAssetIdVersionsByVersionIdTagsData, PostV1AssetsByAssetIdVersionsByVersionIdTagsResponses, DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdData, DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdResponses, GetV1AssetsByAssetIdBoardsData, GetV1AssetsByAssetIdBoardsResponses, GetV1BoardsData, GetV1BoardsResponses, PostV1BoardsData, PostV1BoardsResponses, DeleteV1BoardsByBoardIdData, DeleteV1BoardsByBoardIdResponses, GetV1BoardsByBoardIdData, GetV1BoardsByBoardIdResponses, PatchV1BoardsByBoardIdData, PatchV1BoardsByBoardIdResponses, PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdData, PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdResponses, PostV1BoardsByBoardIdAssetsData, PostV1BoardsByBoardIdAssetsResponses, DeleteV1BoardsByBoardIdAssetsByAssetIdData, DeleteV1BoardsByBoardIdAssetsByAssetIdResponses, GetV1BoardsByBoardIdGuestsData, GetV1BoardsByBoardIdGuestsResponses, PostV1BoardsByBoardIdGuestsData, PostV1BoardsByBoardIdGuestsResponses, DeleteV1BoardsByBoardIdGuestsByGuestIdData, DeleteV1BoardsByBoardIdGuestsByGuestIdResponses, PatchV1BoardsByBoardIdGuestsByGuestIdData, PatchV1BoardsByBoardIdGuestsByGuestIdResponses, GetV1CustomfieldsData, GetV1CustomfieldsResponses, PostV1CustomfieldsData, PostV1CustomfieldsResponses, PostV1CustomfieldsErrors, DeleteV1CustomfieldsByCustomFieldIdData, DeleteV1CustomfieldsByCustomFieldIdResponses, GetV1CustomfieldsByCustomFieldIdData, GetV1CustomfieldsByCustomFieldIdResponses, PatchV1CustomfieldsByCustomFieldIdData, PatchV1CustomfieldsByCustomFieldIdResponses, PostV1CustomfieldsByCustomFieldIdValuesData, PostV1CustomfieldsByCustomFieldIdValuesResponses, DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdData, DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdResponses, PatchV1CustomfieldsByCustomFieldIdValuesByValueIdData, PatchV1CustomfieldsByCustomFieldIdValuesByValueIdResponses, GetV1TagsData, GetV1TagsResponses, PostV1TagsData, PostV1TagsResponses, DeleteV1TagsByTagIdData, DeleteV1TagsByTagIdResponses, PatchV1TagsByTagIdData, PatchV1TagsByTagIdResponses, PostV1UploadsData, PostV1UploadsResponses, PostV1UploadsUploadPartData, PostV1UploadsUploadPartResponses, PostV1CompleteMultipartData, PostV1CompleteMultipartResponses, PostV1ImportsData, PostV1ImportsResponses, GetV1ImportsByImportIdStatusData, GetV1ImportsByImportIdStatusResponses, GetV1RolesData, GetV1RolesResponses } from './types.gen';
export type Options<TData extends TDataShape = TDataShape, ThrowOnError extends boolean = boolean> = ClientOptions<TData, ThrowOnError> & {
    /**
     * You can provide a client instance returned by `createClient()` instead of
     * individual options. This might be also useful if you want to implement a
     * custom client.
     */
    client?: Client;
    /**
     * You can pass arbitrary values through the `meta` object. This can be
     * used to access values that aren't defined as part of the SDK function.
     */
    meta?: Record<string, unknown>;
};
/**
 * /assets
 */
export declare const getV1Assets: <ThrowOnError extends boolean = false>(options?: Options<GetV1AssetsData, ThrowOnError>) => import("./client").RequestResult<GetV1AssetsResponses, GetV1AssetsErrors, ThrowOnError>;
/**
 * /assets/:assetId
 */
export declare const deleteV1AssetsByAssetId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1AssetsByAssetIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1AssetsByAssetIdResponses, unknown, ThrowOnError>;
/**
 * /assets/:assetId
 */
export declare const getV1AssetsByAssetId: <ThrowOnError extends boolean = false>(options: Options<GetV1AssetsByAssetIdData, ThrowOnError>) => import("./client").RequestResult<GetV1AssetsByAssetIdResponses, unknown, ThrowOnError>;
/**
 * /assets/:assetId/customfields/:customFieldId
 */
export declare const putV1AssetsByAssetIdCustomfieldsByCustomFieldId: <ThrowOnError extends boolean = false>(options: Options<PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdData, ThrowOnError>) => import("./client").RequestResult<PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdResponses, unknown, ThrowOnError>;
export declare const getV1AssetsByAssetIdVersions: <ThrowOnError extends boolean = false>(options: Options<GetV1AssetsByAssetIdVersionsData, ThrowOnError>) => import("./client").RequestResult<GetV1AssetsByAssetIdVersionsResponses, unknown, ThrowOnError>;
/**
 * Get an asset version associated with an asset, including metadata fields like `IPTC` and `EXIF`.
 */
export declare const getAssetVersion: <ThrowOnError extends boolean = false>(options: Options<GetAssetVersionData, ThrowOnError>) => import("./client").RequestResult<GetAssetVersionResponses, unknown, ThrowOnError>;
/**
 * /assets/:assetId/versions/:versionId
 */
export declare const patchV1AssetsByAssetIdVersionsByVersionId: <ThrowOnError extends boolean = false>(options: Options<PatchV1AssetsByAssetIdVersionsByVersionIdData, ThrowOnError>) => import("./client").RequestResult<PatchV1AssetsByAssetIdVersionsByVersionIdResponses, unknown, ThrowOnError>;
/**
 * /assets/:assetId/versions/:versionId/download
 */
export declare const getV1AssetsByAssetIdVersionsByVersionIdDownload: <ThrowOnError extends boolean = false>(options: Options<GetV1AssetsByAssetIdVersionsByVersionIdDownloadData, ThrowOnError>) => import("./client").RequestResult<GetV1AssetsByAssetIdVersionsByVersionIdDownloadResponses, unknown, ThrowOnError>;
/**
 * /assets/:assetId/versions/:versionId/tags
 */
export declare const postV1AssetsByAssetIdVersionsByVersionIdTags: <ThrowOnError extends boolean = false>(options: Options<PostV1AssetsByAssetIdVersionsByVersionIdTagsData, ThrowOnError>) => import("./client").RequestResult<PostV1AssetsByAssetIdVersionsByVersionIdTagsResponses, unknown, ThrowOnError>;
/**
 * /assets/:assetId/versions/:versionId/tags/:tagId
 */
export declare const deleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdResponses, unknown, ThrowOnError>;
/**
 * /assets/:assetId/boards
 */
export declare const getV1AssetsByAssetIdBoards: <ThrowOnError extends boolean = false>(options: Options<GetV1AssetsByAssetIdBoardsData, ThrowOnError>) => import("./client").RequestResult<GetV1AssetsByAssetIdBoardsResponses, unknown, ThrowOnError>;
/**
 * /boards
 */
export declare const getV1Boards: <ThrowOnError extends boolean = false>(options?: Options<GetV1BoardsData, ThrowOnError>) => import("./client").RequestResult<GetV1BoardsResponses, unknown, ThrowOnError>;
/**
 * /boards
 */
export declare const postV1Boards: <ThrowOnError extends boolean = false>(options?: Options<PostV1BoardsData, ThrowOnError>) => import("./client").RequestResult<PostV1BoardsResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId
 */
export declare const deleteV1BoardsByBoardId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1BoardsByBoardIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1BoardsByBoardIdResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId
 */
export declare const getV1BoardsByBoardId: <ThrowOnError extends boolean = false>(options: Options<GetV1BoardsByBoardIdData, ThrowOnError>) => import("./client").RequestResult<GetV1BoardsByBoardIdResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId
 */
export declare const patchV1BoardsByBoardId: <ThrowOnError extends boolean = false>(options: Options<PatchV1BoardsByBoardIdData, ThrowOnError>) => import("./client").RequestResult<PatchV1BoardsByBoardIdResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId/customfields/:customFieldId
 */
export declare const putV1BoardsByBoardIdCustomfieldsByCustomFieldId: <ThrowOnError extends boolean = false>(options: Options<PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdData, ThrowOnError>) => import("./client").RequestResult<PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId/assets
 */
export declare const postV1BoardsByBoardIdAssets: <ThrowOnError extends boolean = false>(options: Options<PostV1BoardsByBoardIdAssetsData, ThrowOnError>) => import("./client").RequestResult<PostV1BoardsByBoardIdAssetsResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId/assets/:assetId
 */
export declare const deleteV1BoardsByBoardIdAssetsByAssetId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1BoardsByBoardIdAssetsByAssetIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1BoardsByBoardIdAssetsByAssetIdResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId/guests
 */
export declare const getV1BoardsByBoardIdGuests: <ThrowOnError extends boolean = false>(options: Options<GetV1BoardsByBoardIdGuestsData, ThrowOnError>) => import("./client").RequestResult<GetV1BoardsByBoardIdGuestsResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId/guests
 */
export declare const postV1BoardsByBoardIdGuests: <ThrowOnError extends boolean = false>(options: Options<PostV1BoardsByBoardIdGuestsData, ThrowOnError>) => import("./client").RequestResult<PostV1BoardsByBoardIdGuestsResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId/guests/:guestId
 */
export declare const deleteV1BoardsByBoardIdGuestsByGuestId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1BoardsByBoardIdGuestsByGuestIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1BoardsByBoardIdGuestsByGuestIdResponses, unknown, ThrowOnError>;
/**
 * /boards/:boardId/guests/:guestId
 */
export declare const patchV1BoardsByBoardIdGuestsByGuestId: <ThrowOnError extends boolean = false>(options: Options<PatchV1BoardsByBoardIdGuestsByGuestIdData, ThrowOnError>) => import("./client").RequestResult<PatchV1BoardsByBoardIdGuestsByGuestIdResponses, unknown, ThrowOnError>;
/**
 * /customfields
 */
export declare const getV1Customfields: <ThrowOnError extends boolean = false>(options?: Options<GetV1CustomfieldsData, ThrowOnError>) => import("./client").RequestResult<GetV1CustomfieldsResponses, unknown, ThrowOnError>;
/**
 * /customfields
 */
export declare const postV1Customfields: <ThrowOnError extends boolean = false>(options?: Options<PostV1CustomfieldsData, ThrowOnError>) => import("./client").RequestResult<PostV1CustomfieldsResponses, PostV1CustomfieldsErrors, ThrowOnError>;
/**
 * /customfields/:customFieldId:
 */
export declare const deleteV1CustomfieldsByCustomFieldId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1CustomfieldsByCustomFieldIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1CustomfieldsByCustomFieldIdResponses, unknown, ThrowOnError>;
/**
 * /customfields/:customFieldId
 */
export declare const getV1CustomfieldsByCustomFieldId: <ThrowOnError extends boolean = false>(options: Options<GetV1CustomfieldsByCustomFieldIdData, ThrowOnError>) => import("./client").RequestResult<GetV1CustomfieldsByCustomFieldIdResponses, unknown, ThrowOnError>;
/**
 * /customfields/:customFieldId:
 */
export declare const patchV1CustomfieldsByCustomFieldId: <ThrowOnError extends boolean = false>(options: Options<PatchV1CustomfieldsByCustomFieldIdData, ThrowOnError>) => import("./client").RequestResult<PatchV1CustomfieldsByCustomFieldIdResponses, unknown, ThrowOnError>;
/**
 * /customfields/:customFieldId:/values
 */
export declare const postV1CustomfieldsByCustomFieldIdValues: <ThrowOnError extends boolean = false>(options: Options<PostV1CustomfieldsByCustomFieldIdValuesData, ThrowOnError>) => import("./client").RequestResult<PostV1CustomfieldsByCustomFieldIdValuesResponses, unknown, ThrowOnError>;
/**
 * /customfields/:customFieldId:/values/:valueId
 */
export declare const deleteV1CustomfieldsByCustomFieldIdValuesByValueId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdResponses, unknown, ThrowOnError>;
/**
 * /customfields/:customFieldId:/values/:valueId
 */
export declare const patchV1CustomfieldsByCustomFieldIdValuesByValueId: <ThrowOnError extends boolean = false>(options: Options<PatchV1CustomfieldsByCustomFieldIdValuesByValueIdData, ThrowOnError>) => import("./client").RequestResult<PatchV1CustomfieldsByCustomFieldIdValuesByValueIdResponses, unknown, ThrowOnError>;
/**
 * /tags
 */
export declare const getV1Tags: <ThrowOnError extends boolean = false>(options?: Options<GetV1TagsData, ThrowOnError>) => import("./client").RequestResult<GetV1TagsResponses, unknown, ThrowOnError>;
/**
 * /tags
 */
export declare const postV1Tags: <ThrowOnError extends boolean = false>(options?: Options<PostV1TagsData, ThrowOnError>) => import("./client").RequestResult<PostV1TagsResponses, unknown, ThrowOnError>;
/**
 * /tags/:tagId
 */
export declare const deleteV1TagsByTagId: <ThrowOnError extends boolean = false>(options: Options<DeleteV1TagsByTagIdData, ThrowOnError>) => import("./client").RequestResult<DeleteV1TagsByTagIdResponses, unknown, ThrowOnError>;
/**
 * /tags/:tagId
 */
export declare const patchV1TagsByTagId: <ThrowOnError extends boolean = false>(options: Options<PatchV1TagsByTagIdData, ThrowOnError>) => import("./client").RequestResult<PatchV1TagsByTagIdResponses, unknown, ThrowOnError>;
/**
 * /uploads
 */
export declare const postV1Uploads: <ThrowOnError extends boolean = false>(options?: Options<PostV1UploadsData, ThrowOnError>) => import("./client").RequestResult<PostV1UploadsResponses, unknown, ThrowOnError>;
/**
 * uploads/uploadPart
 */
export declare const postV1UploadsUploadPart: <ThrowOnError extends boolean = false>(options?: Options<PostV1UploadsUploadPartData, ThrowOnError>) => import("./client").RequestResult<PostV1UploadsUploadPartResponses, unknown, ThrowOnError>;
/**
 * uploads/completeMultipart
 */
export declare const postV1CompleteMultipart: <ThrowOnError extends boolean = false>(options?: Options<PostV1CompleteMultipartData, ThrowOnError>) => import("./client").RequestResult<PostV1CompleteMultipartResponses, unknown, ThrowOnError>;
/**
 * /imports
 */
export declare const postV1Imports: <ThrowOnError extends boolean = false>(options?: Options<PostV1ImportsData, ThrowOnError>) => import("./client").RequestResult<PostV1ImportsResponses, unknown, ThrowOnError>;
/**
 * /imports/:importId/status
 */
export declare const getV1ImportsByImportIdStatus: <ThrowOnError extends boolean = false>(options: Options<GetV1ImportsByImportIdStatusData, ThrowOnError>) => import("./client").RequestResult<GetV1ImportsByImportIdStatusResponses, unknown, ThrowOnError>;
/**
 * /roles
 */
export declare const getV1Roles: <ThrowOnError extends boolean = false>(options?: Options<GetV1RolesData, ThrowOnError>) => import("./client").RequestResult<GetV1RolesResponses, unknown, ThrowOnError>;
