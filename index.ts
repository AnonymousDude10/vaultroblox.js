const axios = require('axios');
import { AxiosInstance, AxiosError } from 'axios';

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

class Vault {
  private apiKey: string;
  private baseURL: string;
  private axiosInstance: AxiosInstance;

  constructor(apiKey: string, baseURL: string = 'https://api.vaultroblox.com/api') {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.axiosInstance = axios.create({
      baseURL,
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json'
      }
    });
  }

  async addLicense(params: LicenseRequest): Promise<any> {
    try {
      const response = await this.axiosInstance.post('/developers/license/add', params);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async deleteLicense(params: LicenseRequest): Promise<any> {
    try {
      const response = await this.axiosInstance.delete('/developers/license/delete', {
        data: params
      });
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  async checkLicense(params: LicenseRequest): Promise<any> {
    try {
      const response = await this.axiosInstance.post('/developers/license/check', params);
      return response.data;
    } catch (error) {
      throw this.handleError(error);
    }
  }

  private handleError(error: unknown): any {
    if (axios.isAxiosError(error)) {
      const axiosError = error as AxiosError;
      if (axiosError.response) {
        return {
          status: axiosError.response.status,
          data: axiosError.response.data
        };
      } else if (axiosError.request) {
        return {
          error: 'No response received',
          request: axiosError.request
        };
      }
    }
    return {
      error: error instanceof Error ? error.message : 'Unknown error'
    };
  }
}

module.exports = Vault;
module.exports.Vault = Vault;