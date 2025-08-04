# @johnnymarnell/air-api

Generated TypeScript client for Air API.

## Installation

```bash
npm install github:JohnnyMarnell/air-api
```

## Usage

```typescript
import { getAssetVersion, client } from '@johnnymarnell/air-api';

// Configure the client
client.setConfig({
  baseUrl: 'https://api.air.inc',
  headers: {
    'x-api-key': 'your-api-key',
    'x-air-workspace-id': 'your-workspace-id'
  }
});

// Use the API
const response = await getAssetVersion({
  path: {
    assetId: '123',
    versionId: '456'
  }
});

if (response.error) {
  console.error('Error:', response.error);
} else {
  console.log('Asset:', response.data);
}
```

## Types

TypeScript types are also available:

```typescript
import type { GetAssetVersionResponse } from '@johnnymarnell/air-api';
```

---

*This package is automatically generated from the Air OpenAPI specification.*