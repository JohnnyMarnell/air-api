export type AssetVersionMetadata = {
    /**
     * The metadata category (e.g., Camera, Creator)
     */
    category: string;
    /**
     * The technical field name
     */
    fieldName: string;
    /**
     * Human-readable label for the field
     */
    label: string;
    /**
     * Data type of the metadata value
     */
    type: string;
    /**
     * The actual metadata value
     */
    data: string | Array<string>;
};
export type Tag = {
    /**
     * Unique identifier for the tag
     */
    id: string;
    /**
     * Tag name
     */
    name: string;
};
export type AssetUrls = {
    /**
     * URL for the thumbnail image
     */
    thumbnail: string;
    /**
     * URL for the preview image
     */
    preview: string;
};
export type GetAssetVersionResponse = {
    /**
     * Unique identifier for the asset version
     */
    id: string;
    /**
     * Original file name
     */
    fileName: string;
    /**
     * Asset description
     */
    description?: string;
    /**
     * File extension
     */
    ext?: string;
    /**
     * Asset title
     */
    title?: string;
    /**
     * Asset type (e.g., photo, video, document)
     */
    type: string;
    /**
     * When the asset was created
     */
    createdAt: string;
    /**
     * When the asset was uploaded
     */
    uploadedAt: string;
    /**
     * Width in pixels (for images/videos)
     */
    width?: number;
    /**
     * Height in pixels (for images/videos)
     */
    height?: number;
    /**
     * File size in bytes
     */
    size: number;
    /**
     * Asset metadata fields
     */
    metadata?: Array<AssetVersionMetadata>;
    /**
     * Tags associated with the asset
     */
    tags?: Array<Tag>;
    urls: AssetUrls;
};
export type GetV1AssetsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * The maximum number of assets to return in the response
         */
        limit?: number;
        /**
         * Cursor to the next page of assets
         */
        cursor?: string;
        /**
         * The parent board ID of the assets to return
         */
        parentBoardId?: string;
        /**
         * Filter assets by attached tags. If multiple `tag=value` pairs are provided, only assets with all specified tags will be included.
         */
        tag?: string;
    };
    url: '/v1/assets';
};
export type GetV1AssetsErrors = {
    /**
     * Default
     */
    default: {
        data?: Array<{
            id?: string;
            customFields?: Array<{
                id?: string;
                name?: string;
                type?: string;
                values?: Array<{
                    id?: string;
                    name?: string;
                }>;
            }>;
            coverVersion?: {
                id?: string;
                fileName?: string;
                description?: string;
                ext?: string;
                title?: string;
                type?: string;
                createdAt?: string;
                uploadedAt?: string;
                fileCreatedAt?: string;
                width?: number;
                height?: number;
                size?: number;
                tags?: Array<{
                    id?: string;
                    label?: string;
                }>;
                urls?: {
                    thumbnail?: string;
                    preview?: string;
                };
            };
        }>;
        pagination?: {
            hasMore?: boolean;
            cursor?: unknown;
        };
        total?: number;
    };
};
export type GetV1AssetsError = GetV1AssetsErrors[keyof GetV1AssetsErrors];
export type GetV1AssetsResponses = {
    /**
     * Filter by tag
     */
    200: {
        data?: Array<{
            id?: string;
            customFields?: Array<{
                id?: string;
                name?: string;
                type?: string;
                values?: Array<{
                    id?: string;
                    name?: string;
                }>;
            }>;
            coverVersion?: {
                id?: string;
                fileName?: string;
                description?: string;
                ext?: string;
                title?: string;
                type?: string;
                createdAt?: string;
                uploadedAt?: string;
                fileCreatedAt?: string;
                width?: number;
                height?: number;
                size?: number;
                tags?: Array<{
                    id?: string;
                    label?: string;
                }>;
                urls?: {
                    thumbnail?: string;
                    preview?: string;
                };
            };
        }>;
        pagination?: {
            hasMore?: boolean;
            cursor?: unknown;
        };
        total?: number;
    };
};
export type GetV1AssetsResponse = GetV1AssetsResponses[keyof GetV1AssetsResponses];
export type DeleteV1AssetsByAssetIdData = {
    body?: never;
    path: {
        assetId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}';
};
export type DeleteV1AssetsByAssetIdResponses = {
    /**
     * Default
     */
    204: void;
};
export type DeleteV1AssetsByAssetIdResponse = DeleteV1AssetsByAssetIdResponses[keyof DeleteV1AssetsByAssetIdResponses];
export type GetV1AssetsByAssetIdData = {
    body?: never;
    path: {
        assetId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}';
};
export type GetV1AssetsByAssetIdResponses = {
    /**
     * Default
     */
    default: {
        id?: string;
        customFields?: Array<{
            id?: string;
            name?: string;
            type?: string;
            values?: Array<{
                id?: string;
                name?: string;
            }>;
        }>;
        coverVersion?: {
            id?: string;
            fileName?: string;
            description?: string;
            ext?: string;
            title?: string;
            type?: string;
            createdAt?: string;
            uploadedAt?: string;
            fileCreatedAt?: string;
            width?: number;
            height?: number;
            size?: number;
            tags?: Array<{
                id?: string;
                label?: string;
            }>;
            urls?: {
                thumbnail?: string;
                preview?: string;
            };
        };
    };
};
export type GetV1AssetsByAssetIdResponse = GetV1AssetsByAssetIdResponses[keyof GetV1AssetsByAssetIdResponses];
export type PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdData = {
    body?: never;
    path: {
        /**
         * the id of the asset
         */
        assetId: string;
        /**
         * the id of the custom field
         */
        customFieldId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}/customfields/{customFieldId}';
};
export type PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdResponses = {
    /**
     * single-select
     */
    200: {
        [key: string]: unknown;
    };
};
export type PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdResponse = PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdResponses[keyof PutV1AssetsByAssetIdCustomfieldsByCustomFieldIdResponses];
export type GetV1AssetsByAssetIdVersionsData = {
    body?: never;
    path: {
        /**
         * The id of the asset
         */
        assetId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}/versions';
};
export type GetV1AssetsByAssetIdVersionsResponses = {
    /**
     * Default
     */
    default: {
        data?: Array<{
            id?: string;
            fileName?: string;
            description?: string;
            ext?: string;
            title?: string;
            type?: string;
            createdAt?: string;
            uploadedAt?: string;
            width?: number;
            height?: number;
            size?: number;
            urls?: {
                thumbnail?: string;
                preview?: string;
            };
        }>;
        total?: number;
    };
};
export type GetV1AssetsByAssetIdVersionsResponse = GetV1AssetsByAssetIdVersionsResponses[keyof GetV1AssetsByAssetIdVersionsResponses];
export type GetAssetVersionData = {
    body?: never;
    path: {
        /**
         * the id of the asset
         */
        assetId: string;
        /**
         * the id of the version
         */
        versionId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}/versions/{versionId}';
};
export type GetAssetVersionResponses = {
    /**
     * Default
     */
    default: GetAssetVersionResponse;
};
export type GetAssetVersionResponse2 = GetAssetVersionResponses[keyof GetAssetVersionResponses];
export type PatchV1AssetsByAssetIdVersionsByVersionIdData = {
    body?: {
        title?: string;
        description?: string;
    };
    path: {
        /**
         * the id of the asset
         */
        assetId: string;
        /**
         * the id of the version
         */
        versionId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}/versions/{versionId}';
};
export type PatchV1AssetsByAssetIdVersionsByVersionIdResponses = {
    /**
     * Default
     */
    204: {
        [key: string]: unknown;
    };
};
export type PatchV1AssetsByAssetIdVersionsByVersionIdResponse = PatchV1AssetsByAssetIdVersionsByVersionIdResponses[keyof PatchV1AssetsByAssetIdVersionsByVersionIdResponses];
export type GetV1AssetsByAssetIdVersionsByVersionIdDownloadData = {
    body?: never;
    path: {
        /**
         * the id of the asset
         */
        assetId: string;
        /**
         * the id of the version
         */
        versionId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}/versions/{versionId}/download';
};
export type GetV1AssetsByAssetIdVersionsByVersionIdDownloadResponses = {
    /**
     * Default
     */
    200: {
        url?: string;
        expiresAt?: string;
    };
};
export type GetV1AssetsByAssetIdVersionsByVersionIdDownloadResponse = GetV1AssetsByAssetIdVersionsByVersionIdDownloadResponses[keyof GetV1AssetsByAssetIdVersionsByVersionIdDownloadResponses];
export type PostV1AssetsByAssetIdVersionsByVersionIdTagsData = {
    body?: never;
    path: {
        /**
         * the id of the asset
         */
        assetId: string;
        /**
         * the id of the version
         */
        versionId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}/versions/{versionId}/tags';
};
export type PostV1AssetsByAssetIdVersionsByVersionIdTagsResponses = {
    /**
     * Default
     */
    204: void;
};
export type PostV1AssetsByAssetIdVersionsByVersionIdTagsResponse = PostV1AssetsByAssetIdVersionsByVersionIdTagsResponses[keyof PostV1AssetsByAssetIdVersionsByVersionIdTagsResponses];
export type DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdData = {
    body?: never;
    path: {
        /**
         * the id of the asset
         */
        assetId: string;
        /**
         * the id of the version
         */
        versionId: string;
        /**
         * the id of the tag
         */
        tagId: string;
    };
    query?: never;
    url: '/v1/assets/{assetId}/versions/{versionId}/tags/{tagId}';
};
export type DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdResponses = {
    /**
     * Default
     */
    204: void;
};
export type DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdResponse = DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdResponses[keyof DeleteV1AssetsByAssetIdVersionsByVersionIdTagsByTagIdResponses];
export type GetV1AssetsByAssetIdBoardsData = {
    body?: never;
    path: {
        /**
         * the id of the asset
         */
        assetId: string;
    };
    query?: {
        /**
         * The max number of parent boards to return in the response
         */
        limit?: string;
        /**
         * Cursor to the next page of parent boards
         */
        cursor?: string;
        /**
         * A boolean flag to include custom fields with the results (default: `false`)
         */
        includeCustomFields?: string;
    };
    url: '/v1/assets/{assetId}/boards';
};
export type GetV1AssetsByAssetIdBoardsResponses = {
    /**
     * Default
     */
    200: {
        data?: Array<{
            id?: string;
            parentBoardId?: string;
            title?: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
        }>;
        pagination?: {
            hasMore?: boolean;
            cursor?: unknown;
        };
        total?: number;
    };
};
export type GetV1AssetsByAssetIdBoardsResponse = GetV1AssetsByAssetIdBoardsResponses[keyof GetV1AssetsByAssetIdBoardsResponses];
export type GetV1BoardsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Free text board name search filter
         */
        name?: string;
        /**
         * Limits the number of boards items to return in the response
         */
        limit?: string;
        /**
         * Cursor returned in the previous page of responses used to get the next page of results
         */
        cursor?: string;
        /**
         * Used when navigating immediate child sub boards in a board hierarchy
         */
        parentBoardId?: string;
    };
    url: '/v1/boards';
};
export type GetV1BoardsResponses = {
    /**
     * Default
     */
    default: {
        data?: Array<{
            id?: string;
            title?: string;
            description?: string;
            parentBoardId?: string;
            createdAt?: string;
            updatedAt?: string;
            customFields?: Array<{
                id?: string;
                name?: string;
                type?: string;
                values?: Array<{
                    id?: string;
                    name?: string;
                }>;
            }>;
        }>;
        pagination?: {
            hasMore?: boolean;
            cursor?: unknown;
        };
        total?: number;
    };
};
export type GetV1BoardsResponse = GetV1BoardsResponses[keyof GetV1BoardsResponses];
export type PostV1BoardsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/v1/boards';
};
export type PostV1BoardsResponses = {
    /**
     * Default
     */
    200: {
        id?: string;
        title?: string;
        description?: string;
        parentBoardId?: string;
    };
};
export type PostV1BoardsResponse = PostV1BoardsResponses[keyof PostV1BoardsResponses];
export type DeleteV1BoardsByBoardIdData = {
    body?: never;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}';
};
export type DeleteV1BoardsByBoardIdResponses = {
    /**
     * Default
     */
    204: void;
};
export type DeleteV1BoardsByBoardIdResponse = DeleteV1BoardsByBoardIdResponses[keyof DeleteV1BoardsByBoardIdResponses];
export type GetV1BoardsByBoardIdData = {
    body?: never;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}';
};
export type GetV1BoardsByBoardIdResponses = {
    /**
     * Default
     */
    200: {
        id?: string;
        title?: string;
        description?: string;
        parentBoardId?: string;
        createdAt?: string;
        updatedAt?: string;
        customFields?: Array<{
            id?: string;
            name?: string;
            type?: string;
            values?: Array<{
                id?: string;
                name?: string;
            }>;
        }>;
    };
};
export type GetV1BoardsByBoardIdResponse = GetV1BoardsByBoardIdResponses[keyof GetV1BoardsByBoardIdResponses];
export type PatchV1BoardsByBoardIdData = {
    body?: never;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}';
};
export type PatchV1BoardsByBoardIdResponses = {
    /**
     * Default
     */
    204: void;
};
export type PatchV1BoardsByBoardIdResponse = PatchV1BoardsByBoardIdResponses[keyof PatchV1BoardsByBoardIdResponses];
export type PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdData = {
    body?: never;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
        /**
         * the id of the custom field
         */
        customFieldId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}/customfields/{customFieldId}';
};
export type PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdResponses = {
    /**
     * single-select
     */
    200: {
        [key: string]: unknown;
    };
};
export type PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdResponse = PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdResponses[keyof PutV1BoardsByBoardIdCustomfieldsByCustomFieldIdResponses];
export type PostV1BoardsByBoardIdAssetsData = {
    body?: never;
    path: {
        boardId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}/assets';
};
export type PostV1BoardsByBoardIdAssetsResponses = {
    /**
     * Default
     */
    204: {
        [key: string]: unknown;
    };
};
export type PostV1BoardsByBoardIdAssetsResponse = PostV1BoardsByBoardIdAssetsResponses[keyof PostV1BoardsByBoardIdAssetsResponses];
export type DeleteV1BoardsByBoardIdAssetsByAssetIdData = {
    body?: unknown;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
        /**
         * the id of the asset
         */
        assetId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}/assets/{assetId}';
};
export type DeleteV1BoardsByBoardIdAssetsByAssetIdResponses = {
    /**
     * Default
     */
    204: unknown;
};
export type GetV1BoardsByBoardIdGuestsData = {
    body?: never;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
    };
    query?: {
        /**
         * (optional) to filter with email
         */
        email?: string;
    };
    url: '/v1/boards/{boardId}/guests';
};
export type GetV1BoardsByBoardIdGuestsResponses = {
    /**
     * Default
     */
    200: {
        data?: Array<{
            id?: string;
            email?: string;
            roleId?: string;
            boardId?: string;
        }>;
    };
};
export type GetV1BoardsByBoardIdGuestsResponse = GetV1BoardsByBoardIdGuestsResponses[keyof GetV1BoardsByBoardIdGuestsResponses];
export type PostV1BoardsByBoardIdGuestsData = {
    body?: never;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}/guests';
};
export type PostV1BoardsByBoardIdGuestsResponses = {
    /**
     * Default
     */
    200: {
        id?: string;
        email?: string;
        roleId?: string;
        boardId?: string;
    };
};
export type PostV1BoardsByBoardIdGuestsResponse = PostV1BoardsByBoardIdGuestsResponses[keyof PostV1BoardsByBoardIdGuestsResponses];
export type DeleteV1BoardsByBoardIdGuestsByGuestIdData = {
    body?: never;
    path: {
        /**
         * the id of the board
         */
        boardId: string;
        /**
         * the id of the guest
         */
        guestId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}/guests/{guestId}';
};
export type DeleteV1BoardsByBoardIdGuestsByGuestIdResponses = {
    /**
     * Default
     */
    204: {
        [key: string]: unknown;
    };
};
export type DeleteV1BoardsByBoardIdGuestsByGuestIdResponse = DeleteV1BoardsByBoardIdGuestsByGuestIdResponses[keyof DeleteV1BoardsByBoardIdGuestsByGuestIdResponses];
export type PatchV1BoardsByBoardIdGuestsByGuestIdData = {
    body?: {
        [key: string]: unknown;
    };
    path: {
        /**
         * the id of the board
         */
        boardId: string;
        /**
         * the id of the guest
         */
        guestId: string;
    };
    query?: never;
    url: '/v1/boards/{boardId}/guests/{guestId}';
};
export type PatchV1BoardsByBoardIdGuestsByGuestIdResponses = {
    /**
     * Default
     */
    204: {
        [key: string]: unknown;
    };
};
export type PatchV1BoardsByBoardIdGuestsByGuestIdResponse = PatchV1BoardsByBoardIdGuestsByGuestIdResponses[keyof PatchV1BoardsByBoardIdGuestsByGuestIdResponses];
export type GetV1CustomfieldsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Free text search for custom field names matching criteria
         */
        name?: string;
        /**
         * The number of records returned
         */
        limit?: string;
        /**
         * The cursor returned to from previous page of results
         */
        cursor?: string;
    };
    url: '/v1/customfields';
};
export type GetV1CustomfieldsResponses = {
    /**
     * Default
     */
    default: {
        data?: Array<{
            id?: string;
            name?: string;
            description?: string;
            createdAt?: string;
            updatedAt?: string;
            type?: string;
        }>;
        pagination?: {
            hasMore?: boolean;
            cursor?: unknown;
        };
        total?: number;
    };
};
export type GetV1CustomfieldsResponse = GetV1CustomfieldsResponses[keyof GetV1CustomfieldsResponses];
export type PostV1CustomfieldsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/v1/customfields';
};
export type PostV1CustomfieldsErrors = {
    /**
     * single-select
     */
    default: {
        id?: string;
        name?: string;
        description?: string;
        type?: string;
        values?: Array<{
            id?: string;
            name?: string;
        }>;
    };
};
export type PostV1CustomfieldsError = PostV1CustomfieldsErrors[keyof PostV1CustomfieldsErrors];
export type PostV1CustomfieldsResponses = {
    /**
     * multi-select
     */
    200: {
        id?: string;
        name?: string;
        description?: string;
        type?: string;
        values?: Array<{
            id?: string;
            name?: string;
        }>;
    };
};
export type PostV1CustomfieldsResponse = PostV1CustomfieldsResponses[keyof PostV1CustomfieldsResponses];
export type DeleteV1CustomfieldsByCustomFieldIdData = {
    body?: never;
    path: {
        /**
         * The id of the custom field to update
         */
        customFieldId: string;
    };
    query?: never;
    url: '/v1/customfields/{customFieldId}';
};
export type DeleteV1CustomfieldsByCustomFieldIdResponses = {
    /**
     * Default
     */
    204: void;
};
export type DeleteV1CustomfieldsByCustomFieldIdResponse = DeleteV1CustomfieldsByCustomFieldIdResponses[keyof DeleteV1CustomfieldsByCustomFieldIdResponses];
export type GetV1CustomfieldsByCustomFieldIdData = {
    body?: never;
    path: {
        /**
         * The id of the custom field to update
         */
        customFieldId: string;
    };
    query?: never;
    url: '/v1/customfields/{customFieldId}';
};
export type GetV1CustomfieldsByCustomFieldIdResponses = {
    /**
     * Default
     */
    default: {
        id?: string;
        name?: string;
        description?: string;
        createdAt?: string;
        updatedAt?: string;
        type?: string;
        values?: Array<{
            id?: string;
            name?: string;
        }>;
    };
};
export type GetV1CustomfieldsByCustomFieldIdResponse = GetV1CustomfieldsByCustomFieldIdResponses[keyof GetV1CustomfieldsByCustomFieldIdResponses];
export type PatchV1CustomfieldsByCustomFieldIdData = {
    body?: never;
    path: {
        /**
         * The id of the custom field to update
         */
        customFieldId: string;
    };
    query?: never;
    url: '/v1/customfields/{customFieldId}';
};
export type PatchV1CustomfieldsByCustomFieldIdResponses = {
    /**
     * Default
     */
    200: unknown;
};
export type PostV1CustomfieldsByCustomFieldIdValuesData = {
    body?: never;
    path: {
        /**
         * the id of the custom field
         */
        customFieldId: string;
    };
    query?: never;
    url: '/v1/customfields/{customFieldId}/values';
};
export type PostV1CustomfieldsByCustomFieldIdValuesResponses = {
    /**
     * Default
     */
    default: {
        id?: string;
        name?: string;
    };
};
export type PostV1CustomfieldsByCustomFieldIdValuesResponse = PostV1CustomfieldsByCustomFieldIdValuesResponses[keyof PostV1CustomfieldsByCustomFieldIdValuesResponses];
export type DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdData = {
    body?: never;
    path: {
        /**
         * the id of the custom field
         */
        customFieldId: string;
        /**
         * the id of the custom field value to delete
         */
        valueId: string;
    };
    query?: never;
    url: '/v1/customfields/{customFieldId}/values/{valueId}';
};
export type DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdResponses = {
    /**
     * Default
     */
    204: {
        [key: string]: unknown;
    };
};
export type DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdResponse = DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdResponses[keyof DeleteV1CustomfieldsByCustomFieldIdValuesByValueIdResponses];
export type PatchV1CustomfieldsByCustomFieldIdValuesByValueIdData = {
    body?: never;
    path: {
        /**
         * the id of the custom field
         */
        customFieldId: string;
        /**
         * the id of the custom field value to delete
         */
        valueId: string;
    };
    query?: never;
    url: '/v1/customfields/{customFieldId}/values/{valueId}';
};
export type PatchV1CustomfieldsByCustomFieldIdValuesByValueIdResponses = {
    /**
     * Default
     */
    default: {
        id?: string;
        name?: string;
    };
};
export type PatchV1CustomfieldsByCustomFieldIdValuesByValueIdResponse = PatchV1CustomfieldsByCustomFieldIdValuesByValueIdResponses[keyof PatchV1CustomfieldsByCustomFieldIdValuesByValueIdResponses];
export type GetV1TagsData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * Free text search for tag names matching criteria
         */
        name?: string;
        /**
         * The number of records returned
         */
        limit?: string;
        /**
         * The cursor returned to from previous page of results
         */
        cursor?: string;
    };
    url: '/v1/tags';
};
export type GetV1TagsResponses = {
    /**
     * Default
     */
    default: {
        data?: Array<{
            id?: string;
            name?: string;
        }>;
        pagination?: {
            hasMore?: boolean;
            cursor?: unknown;
        };
        total?: number;
    };
};
export type GetV1TagsResponse = GetV1TagsResponses[keyof GetV1TagsResponses];
export type PostV1TagsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/v1/tags';
};
export type PostV1TagsResponses = {
    /**
     * Default
     */
    default: {
        id?: string;
        name?: string;
    };
};
export type PostV1TagsResponse = PostV1TagsResponses[keyof PostV1TagsResponses];
export type DeleteV1TagsByTagIdData = {
    body?: never;
    path: {
        /**
         * the id of the tag
         */
        tagId: string;
    };
    query?: never;
    url: '/v1/tags/{tagId}';
};
export type DeleteV1TagsByTagIdResponses = {
    /**
     * Default
     */
    204: {
        [key: string]: unknown;
    };
};
export type DeleteV1TagsByTagIdResponse = DeleteV1TagsByTagIdResponses[keyof DeleteV1TagsByTagIdResponses];
export type PatchV1TagsByTagIdData = {
    body?: never;
    path: {
        /**
         * the id of the tag
         */
        tagId: string;
    };
    query?: never;
    url: '/v1/tags/{tagId}';
};
export type PatchV1TagsByTagIdResponses = {
    /**
     * Default
     */
    default: {
        id?: string;
        name?: string;
    };
};
export type PatchV1TagsByTagIdResponse = PatchV1TagsByTagIdResponses[keyof PatchV1TagsByTagIdResponses];
export type PostV1UploadsData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/v1/uploads';
};
export type PostV1UploadsResponses = {
    /**
     * Small File (<5G)
     */
    201: {
        assetId?: string;
        versionId?: string;
        uploadUrl?: string;
    };
};
export type PostV1UploadsResponse = PostV1UploadsResponses[keyof PostV1UploadsResponses];
export type PostV1UploadsUploadPartData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/v1/uploads/uploadPart';
};
export type PostV1UploadsUploadPartResponses = {
    /**
     * Default
     */
    201: {
        url?: string;
    };
};
export type PostV1UploadsUploadPartResponse = PostV1UploadsUploadPartResponses[keyof PostV1UploadsUploadPartResponses];
export type PostV1CompleteMultipartData = {
    body?: never;
    path?: never;
    query?: never;
    url: '/v1/completeMultipart';
};
export type PostV1CompleteMultipartResponses = {
    /**
     * Default
     */
    200: {
        [key: string]: unknown;
    };
};
export type PostV1CompleteMultipartResponse = PostV1CompleteMultipartResponses[keyof PostV1CompleteMultipartResponses];
export type PostV1ImportsData = {
    body?: {
        [key: string]: unknown;
    };
    headers?: {
        'x-air-workspace-id'?: string;
    };
    path?: never;
    query?: never;
    url: '/v1/imports';
};
export type PostV1ImportsResponses = {
    /**
     * Without metadata
     */
    default: {
        id?: string;
        assetId?: string;
        versionId?: string;
    };
};
export type PostV1ImportsResponse = PostV1ImportsResponses[keyof PostV1ImportsResponses];
export type GetV1ImportsByImportIdStatusData = {
    body?: never;
    headers?: {
        'x-air-workspace-id'?: string;
    };
    path: {
        importId: string;
    };
    query?: never;
    url: '/v1/imports/{importId}/status';
};
export type GetV1ImportsByImportIdStatusResponses = {
    /**
     * succeeded
     */
    default: {
        status?: string;
    };
};
export type GetV1ImportsByImportIdStatusResponse = GetV1ImportsByImportIdStatusResponses[keyof GetV1ImportsByImportIdStatusResponses];
export type GetV1RolesData = {
    body?: never;
    path?: never;
    query?: {
        /**
         * (required) to filter the roles by type
         */
        type?: string;
    };
    url: '/v1/roles';
};
export type GetV1RolesResponses = {
    /**
     * Default
     */
    200: {
        data?: Array<{
            id?: string;
            name?: string;
            description?: string;
            billable?: boolean;
            type?: string;
        }>;
    };
};
export type GetV1RolesResponse = GetV1RolesResponses[keyof GetV1RolesResponses];
export type ClientOptions = {
    baseURL: `${string}://api.air.inc` | (string & {});
};
