import type { Options as ClientOptions, TDataShape, Client } from './client';
import type { ListAssetsData, ListAssetsResponses, ListAssetsErrors, DeleteAssetData, DeleteAssetResponses, GetAssetData, GetAssetResponses, SetAssetCustomFieldData, SetAssetCustomFieldResponses, ListAssetVersionsData, ListAssetVersionsResponses, GetAssetVersionData, GetAssetVersionResponses, UpdateAssetVersionData, UpdateAssetVersionResponses, GetAssetVersionDownloadUrlData, GetAssetVersionDownloadUrlResponses, AddAssetVersionTagData, AddAssetVersionTagResponses, DeleteAssetVersionTagData, DeleteAssetVersionTagResponses, ListAssetBoardsData, ListAssetBoardsResponses, ListBoardsData, ListBoardsResponses, CreateBoardData, CreateBoardResponses, DeleteBoardData, DeleteBoardResponses, GetBoardData, GetBoardResponses, UpdateBoardData, UpdateBoardResponses, SetBoardCustomFieldData, SetBoardCustomFieldResponses, AddAssetsToBoardData, AddAssetsToBoardResponses, RemoveAssetFromBoardData, RemoveAssetFromBoardResponses, ListBoardGuestsData, ListBoardGuestsResponses, AddBoardGuestData, AddBoardGuestResponses, RemoveBoardGuestData, RemoveBoardGuestResponses, UpdateBoardGuestData, UpdateBoardGuestResponses, ListCustomFieldsData, ListCustomFieldsResponses, CreateCustomFieldData, CreateCustomFieldResponses, CreateCustomFieldErrors, DeleteCustomFieldData, DeleteCustomFieldResponses, GetCustomFieldData, GetCustomFieldResponses, UpdateCustomFieldData, UpdateCustomFieldResponses, AddCustomFieldValueData, AddCustomFieldValueResponses, DeleteCustomFieldValueData, DeleteCustomFieldValueResponses, UpdateCustomFieldValueData, UpdateCustomFieldValueResponses, ListTagsData, ListTagsResponses, CreateTagData, CreateTagResponses, DeleteTagData, DeleteTagResponses, UpdateTagData, UpdateTagResponses, CreateUploadData, CreateUploadResponses, CreateUploadPartData, CreateUploadPartResponses, CompleteMultipartUploadData, CompleteMultipartUploadResponses, CreateImportData, CreateImportResponses, GetImportStatusData, GetImportStatusResponses, ListRolesData, ListRolesResponses } from './types.gen';
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
 * Get a list of assets.
 */
export declare const listAssets: <ThrowOnError extends boolean = false>(options?: Options<ListAssetsData, ThrowOnError>) => import("./client").RequestResult<ListAssetsResponses, ListAssetsErrors, ThrowOnError>;
/**
 * Delete an asset
 */
export declare const deleteAsset: <ThrowOnError extends boolean = false>(options: Options<DeleteAssetData, ThrowOnError>) => import("./client").RequestResult<DeleteAssetResponses, unknown, ThrowOnError>;
/**
 * Get an asset
 */
export declare const getAsset: <ThrowOnError extends boolean = false>(options: Options<GetAssetData, ThrowOnError>) => import("./client").RequestResult<GetAssetResponses, unknown, ThrowOnError>;
/**
 * Set custom field value(s) on an asset
 *
 * Body:
 * - values - an array of objects containing the id of the custom field value to set (used for single-select and multi-select)
 * - value - a string containing the value to set (used for plain-text and date)
 *
 * To unset a custom field on an asset, set the relevant property above to null
 *
 */
export declare const setAssetCustomField: <ThrowOnError extends boolean = false>(options: Options<SetAssetCustomFieldData, ThrowOnError>) => import("./client").RequestResult<SetAssetCustomFieldResponses, unknown, ThrowOnError>;
/**
 * Get a list of asset versions associated with an asset.
 */
export declare const listAssetVersions: <ThrowOnError extends boolean = false>(options: Options<ListAssetVersionsData, ThrowOnError>) => import("./client").RequestResult<ListAssetVersionsResponses, unknown, ThrowOnError>;
/**
 * Get an asset version associated with an asset, including metadata fields like `IPTC` and `EXIF`.
 */
export declare const getAssetVersion: <ThrowOnError extends boolean = false>(options: Options<GetAssetVersionData, ThrowOnError>) => import("./client").RequestResult<GetAssetVersionResponses, unknown, ThrowOnError>;
/**
 * Update an asset version
 *
 * Body:
 * - title - the title of the version
 * - description - the description of the version
 *
 */
export declare const updateAssetVersion: <ThrowOnError extends boolean = false>(options: Options<UpdateAssetVersionData, ThrowOnError>) => import("./client").RequestResult<UpdateAssetVersionResponses, unknown, ThrowOnError>;
/**
 * Get the download URL of an asset version
 */
export declare const getAssetVersionDownloadUrl: <ThrowOnError extends boolean = false>(options: Options<GetAssetVersionDownloadUrlData, ThrowOnError>) => import("./client").RequestResult<GetAssetVersionDownloadUrlResponses, unknown, ThrowOnError>;
/**
 * Add one or more tags to an asset version
 *
 * Body:
 * - id - the id of the tag to add to the version
 *
 */
export declare const addAssetVersionTag: <ThrowOnError extends boolean = false>(options: Options<AddAssetVersionTagData, ThrowOnError>) => import("./client").RequestResult<AddAssetVersionTagResponses, unknown, ThrowOnError>;
/**
 * Delete a tag from an asset version
 */
export declare const deleteAssetVersionTag: <ThrowOnError extends boolean = false>(options: Options<DeleteAssetVersionTagData, ThrowOnError>) => import("./client").RequestResult<DeleteAssetVersionTagResponses, unknown, ThrowOnError>;
/**
 * Get the list of parent boards of an asset
 */
export declare const listAssetBoards: <ThrowOnError extends boolean = false>(options: Options<ListAssetBoardsData, ThrowOnError>) => import("./client").RequestResult<ListAssetBoardsResponses, unknown, ThrowOnError>;
/**
 * Get the list of boards defined in an Air workspace.
 */
export declare const listBoards: <ThrowOnError extends boolean = false>(options?: Options<ListBoardsData, ThrowOnError>) => import("./client").RequestResult<ListBoardsResponses, unknown, ThrowOnError>;
/**
 * Create a board at the top-level of the workspace or as a child of another board
 *
 * Body:
 * - title - the title of the board
 * - description - the description of the board
 * - parentBoardId (optional) - the id of the parent board that this board will be a child of
 *
 */
export declare const createBoard: <ThrowOnError extends boolean = false>(options?: Options<CreateBoardData, ThrowOnError>) => import("./client").RequestResult<CreateBoardResponses, unknown, ThrowOnError>;
/**
 * Delete a board and any assets that are only contained in this board or its direct descendant boards.
 */
export declare const deleteBoard: <ThrowOnError extends boolean = false>(options: Options<DeleteBoardData, ThrowOnError>) => import("./client").RequestResult<DeleteBoardResponses, unknown, ThrowOnError>;
/**
 * Get a board
 */
export declare const getBoard: <ThrowOnError extends boolean = false>(options: Options<GetBoardData, ThrowOnError>) => import("./client").RequestResult<GetBoardResponses, unknown, ThrowOnError>;
/**
 * Update one or more properties on a board
 *
 * Body:
 * - title - the title of the board
 * - description - the description of the board
 * - parentBoardId - the parent board this board is a child of. null will move the board to the root.
 *
 */
export declare const updateBoard: <ThrowOnError extends boolean = false>(options: Options<UpdateBoardData, ThrowOnError>) => import("./client").RequestResult<UpdateBoardResponses, unknown, ThrowOnError>;
/**
 * Assign value(s) for a custom field on a board
 *
 * Body:
 * - values - a list of objects with the id of the value to be set on the board for the custom field (used with single-select and multi-select custom fields)
 * - value - the string value to be set for the custom field on the board (used with plain-text and date custom fields)
 *
 */
export declare const setBoardCustomField: <ThrowOnError extends boolean = false>(options: Options<SetBoardCustomFieldData, ThrowOnError>) => import("./client").RequestResult<SetBoardCustomFieldResponses, unknown, ThrowOnError>;
/**
 * Associates one or more assets to a board
 *
 * Body:
 * - assetIds - an array of assetIds to associate with the board
 *
 */
export declare const addAssetsToBoard: <ThrowOnError extends boolean = false>(options: Options<AddAssetsToBoardData, ThrowOnError>) => import("./client").RequestResult<AddAssetsToBoardResponses, unknown, ThrowOnError>;
/**
 * Removes an asset from a board
 */
export declare const removeAssetFromBoard: <ThrowOnError extends boolean = false>(options: Options<RemoveAssetFromBoardData, ThrowOnError>) => import("./client").RequestResult<RemoveAssetFromBoardResponses, unknown, ThrowOnError>;
/**
 * Get the list of guests of the board.
 */
export declare const listBoardGuests: <ThrowOnError extends boolean = false>(options: Options<ListBoardGuestsData, ThrowOnError>) => import("./client").RequestResult<ListBoardGuestsResponses, unknown, ThrowOnError>;
/**
 * Add a guest to the board.
 *
 * Body:
 * - email - email address of the user to be added as guest
 * - roleId - id of the role to be associated with the guest
 *
 */
export declare const addBoardGuest: <ThrowOnError extends boolean = false>(options: Options<AddBoardGuestData, ThrowOnError>) => import("./client").RequestResult<AddBoardGuestResponses, unknown, ThrowOnError>;
/**
 * Remove a guest from the board.
 */
export declare const removeBoardGuest: <ThrowOnError extends boolean = false>(options: Options<RemoveBoardGuestData, ThrowOnError>) => import("./client").RequestResult<RemoveBoardGuestResponses, unknown, ThrowOnError>;
/**
 * Change the role of a guest.
 *
 * Body:
 * - roleId - id of the role to be associated with the guest
 *
 */
export declare const updateBoardGuest: <ThrowOnError extends boolean = false>(options: Options<UpdateBoardGuestData, ThrowOnError>) => import("./client").RequestResult<UpdateBoardGuestResponses, unknown, ThrowOnError>;
/**
 * List custom fields
 */
export declare const listCustomFields: <ThrowOnError extends boolean = false>(options?: Options<ListCustomFieldsData, ThrowOnError>) => import("./client").RequestResult<ListCustomFieldsResponses, unknown, ThrowOnError>;
/**
 * Create a custom field (maximum total allowed per workspace: 100)
 *
 * Body:
 * - name - the name of the custom field
 * - description - the description of the custom field
 * - type - the type of the custom field
 * - values - the values of a single-select or multi-select custom field
 *
 */
export declare const createCustomField: <ThrowOnError extends boolean = false>(options?: Options<CreateCustomFieldData, ThrowOnError>) => import("./client").RequestResult<CreateCustomFieldResponses, CreateCustomFieldErrors, ThrowOnError>;
/**
 * Delete a custom field
 */
export declare const deleteCustomField: <ThrowOnError extends boolean = false>(options: Options<DeleteCustomFieldData, ThrowOnError>) => import("./client").RequestResult<DeleteCustomFieldResponses, unknown, ThrowOnError>;
/**
 * Get a custom field
 */
export declare const getCustomField: <ThrowOnError extends boolean = false>(options: Options<GetCustomFieldData, ThrowOnError>) => import("./client").RequestResult<GetCustomFieldResponses, unknown, ThrowOnError>;
/**
 * Update one or more properties on a custom field
 *
 * Body:
 * - name - the name of the custom field
 * - description - the description of the custom field
 *
 * *type is immutable due to workflows being built on top of custom fields
 *
 */
export declare const updateCustomField: <ThrowOnError extends boolean = false>(options: Options<UpdateCustomFieldData, ThrowOnError>) => import("./client").RequestResult<UpdateCustomFieldResponses, unknown, ThrowOnError>;
/**
 * Add a new value to a single-select or multi-select custom field.
 *
 * Body:
 * - name - the name of the custom field value
 *
 */
export declare const addCustomFieldValue: <ThrowOnError extends boolean = false>(options: Options<AddCustomFieldValueData, ThrowOnError>) => import("./client").RequestResult<AddCustomFieldValueResponses, unknown, ThrowOnError>;
/**
 * Delete a value off of a custom field
 */
export declare const deleteCustomFieldValue: <ThrowOnError extends boolean = false>(options: Options<DeleteCustomFieldValueData, ThrowOnError>) => import("./client").RequestResult<DeleteCustomFieldValueResponses, unknown, ThrowOnError>;
/**
 * Update one or more properties on a value
 */
export declare const updateCustomFieldValue: <ThrowOnError extends boolean = false>(options: Options<UpdateCustomFieldValueData, ThrowOnError>) => import("./client").RequestResult<UpdateCustomFieldValueResponses, unknown, ThrowOnError>;
/**
 * List tags in the workspace
 */
export declare const listTags: <ThrowOnError extends boolean = false>(options?: Options<ListTagsData, ThrowOnError>) => import("./client").RequestResult<ListTagsResponses, unknown, ThrowOnError>;
/**
 * Create a new tag
 *
 * Body:
 * - name - the name of the tag
 *
 */
export declare const createTag: <ThrowOnError extends boolean = false>(options?: Options<CreateTagData, ThrowOnError>) => import("./client").RequestResult<CreateTagResponses, unknown, ThrowOnError>;
/**
 * Delete a tag
 */
export declare const deleteTag: <ThrowOnError extends boolean = false>(options: Options<DeleteTagData, ThrowOnError>) => import("./client").RequestResult<DeleteTagResponses, unknown, ThrowOnError>;
/**
 * Update one or more properties on a tag
 */
export declare const updateTag: <ThrowOnError extends boolean = false>(options: Options<UpdateTagData, ThrowOnError>) => import("./client").RequestResult<UpdateTagResponses, unknown, ThrowOnError>;
/**
 * Upload an asset to a workspace
 *
 * Body:
 * - fileName - the name of the file
 * - ext - the extension of the file
 * - size - the size of the file
 * - mime - the mime of the file
 * - recordedAt - when the file was created
 * - parentBoardId (optional) - the parent board to create the asset under
 * - assetId (optional) - the parent asset to create a new version for this file under
 * - customFields (optional) - the list of custom fields and values to assign to the asset
 * - tags (optional) - the list of tags to assign to the asset version
 *
 */
export declare const createUpload: <ThrowOnError extends boolean = false>(options?: Options<CreateUploadData, ThrowOnError>) => import("./client").RequestResult<CreateUploadResponses, unknown, ThrowOnError>;
/**
 * Create a part upload url
 *
 * Body:
 * - multiPartUploadId - upload id returned from POST /uploads
 * - key - key returned from POST /uploads
 * - partNumber - the number associated with the chunk being uploaded
 *
 */
export declare const createUploadPart: <ThrowOnError extends boolean = false>(options?: Options<CreateUploadPartData, ThrowOnError>) => import("./client").RequestResult<CreateUploadPartResponses, unknown, ThrowOnError>;
/**
 * Complete a large file upload
 *
 * Body:
 * - multiPartUploadId - the upload id returned from POST /uploads
 * - key - the key returned from POST /uploads
 * - parts - an array of objects containing the etag (returned from file upload) and partNumber for each chunk
 *
 */
export declare const completeMultipartUpload: <ThrowOnError extends boolean = false>(options?: Options<CompleteMultipartUploadData, ThrowOnError>) => import("./client").RequestResult<CompleteMultipartUploadResponses, unknown, ThrowOnError>;
/**
 * Create an import of an asset or asset version from a public URL.
 *
 * Request Body:
 * - sourceUrl - the URL to get the file content. The URL needs to be publicly accessible.
 * - fileName (optional) - the name of the file. If not provided then it will be determined from the URL.
 * - ext (optional) - the extension of the file. If not provided then the ext will be pulled from the URL or defaulted to .file
 * - recordedAt (optional) - when the file was created. If not provided the servers current time will be used.
 * - assetId (optional) - the parent asset to create a new version for this file under.
 * - parentBoardId (optional) - the parent board to create the asset under.
 * - customFields (optional) - the list of custom fields and values to assign to the asset.
 * - tags (optional) - the list of tags to assign to the asset version.
 * - title (optional) - the title to assign to the asset version.
 * - description (optional) - the description to assign to the asset version.
 *
 */
export declare const createImport: <ThrowOnError extends boolean = false>(options?: Options<CreateImportData, ThrowOnError>) => import("./client").RequestResult<CreateImportResponses, unknown, ThrowOnError>;
/**
 * Retrieve the status of a specific import by providing the import ID in the URL.
 *
 * Response:
 * The body of the response will contain a JSON object with "status" and also "error" if the import is failed.
 * - status:
 * - pending - the import is waiting to be scheduled.
 * - inProgress - the import is in progress.
 * - failed - the import has failed.
 * - succeeded - the import completed.
 * - error: An object containing the error type and message if the import failed.
 * - SOURCE_FILE_NOT_FOUND - the file is not found from source Url when executing task.
 * - SOURCE_URL_BLOCKED - the source URL is to be blocked by the block rules.
 * - SOURCE_URL_INVALID - the file URL returns 4xx, 5xx errors.
 * - PROCESS_TIMED_OUT - exceeded the maximum amount of time allowed
 *
 */
export declare const getImportStatus: <ThrowOnError extends boolean = false>(options: Options<GetImportStatusData, ThrowOnError>) => import("./client").RequestResult<GetImportStatusResponses, unknown, ThrowOnError>;
/**
 * Get the list of guest roles available in a workspace.
 */
export declare const listRoles: <ThrowOnError extends boolean = false>(options?: Options<ListRolesData, ThrowOnError>) => import("./client").RequestResult<ListRolesResponses, unknown, ThrowOnError>;
