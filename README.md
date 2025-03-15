# vaultroblox.js

## Installation

```bash
npm install vaultroblox.js
```

## Usage

```javascript
const Vault = require('vaultroblox.js');
const client = new Vault('your-api-key');

// Add a license
async function addUserLicense() {
  try {
    const result = await client.addLicense('roblox-user-id', 'product-uuid');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Check a license
async function checkUserLicense() {
  try {
    const result = await client.checkLicense('roblox-user-id', 'product-uuid');
    console.log(result.hasLicense);
  } catch (error) {
    console.error(error);
  }
}

// Delete a license
async function deleteUserLicense() {
  try {
    const result = await client.deleteLicense('roblox-user-id', 'product-uuid');
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}
```

## API Reference

### Constructor

```typescript
const client = new Vault(apiKey: string);
```
apiKey` (required): Your API key

### Methods

#### addLicense(robloxID: string, productUUID: string): Promise<any>

Adds a license for a user.

#### deleteLicense(robloxID: string, productUUID: string): Promise<any>

Removes a user's license.

#### checkLicense(robloxID: string, productUUID: string): Promise<{ hasLicense: boolean }>

Checks if a user has a valid license. Returns an object with a `hasLicense` boolean.