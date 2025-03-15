# vaultroblox.js

## Installation

```bash
npm install vaultroblox.js
```

## Usage

```typescript
const Vault = require('vaultroblox.js');
const client = new Vault('your-api-key');

// Add a license for Roblox user
async function addRobloxLicense() {
  try {
    const result = await client.addLicense({
      robloxID: '123456789',
      productUUID: 'product-uuid-here'
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Add a license for Discord user
async function addDiscordLicense() {
  try {
    const result = await client.addLicense({
      discordID: 'discord-user-id',
      productUUID: 'product-uuid-here'
    });
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

// Check a license
async function checkLicense() {
  try {
    const result = await client.checkLicense({
      robloxID: '123456789',
      productUUID: 'product-uuid-here'
    });
    console.log(result.hasLicense);
  } catch (error) {
    console.error(error);
  }
}

// Delete a license
async function deleteLicense() {
  try {
    const result = await client.deleteLicense({
      robloxID: '123456789',
      productUUID: 'product-uuid-here'
    });
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

- `apiKey` (required): Your API key

### Methods

#### addLicense(params: LicenseRequest): Promise<any>

Adds a license for a user. The `params` object must include either a `robloxID` or a `discordID`, along with a `productUUID`.

```typescript
interface RobloxLicenseRequest {
  robloxID: string;
  productUUID: string;
  discordID?: never;
}

interface DiscordLicenseRequest {
  discordID: string;
  productUUID: string;
  robloxID?: never;
}

type LicenseRequest = RobloxLicenseRequest | DiscordLicenseRequest;
```

#### deleteLicense(params: LicenseRequest): Promise<any>

Removes a user's license. The `params` object follows the same structure as in `addLicense`.

#### checkLicense(params: LicenseRequest): Promise<any>

Checks if a user has a valid license. The `params` object follows the same structure as in `addLicense`.