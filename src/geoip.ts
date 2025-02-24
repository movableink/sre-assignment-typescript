import fetch from 'node-fetch';
import { GeoIPResponse } from './types';
import { config } from './config';

export async function lookupIP(ip: string): Promise<GeoIPResponse> {
    const response = await fetch(`${config.apiUrl}/geoip/${ip}`, {
        headers: {
            'Authorization': `Bearer ${config.apiToken}`
        }
    });

    if (!response.ok) {
        throw new Error(`API request failed: ${response.status} - ${response.statusText}`);
    }

    return response.json() as Promise<GeoIPResponse>;
}
