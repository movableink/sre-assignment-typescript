export interface GeoIPResponse {
    ip: string;
    location: string;
    postal_code: string;
    latitude: number;
    longitude: number;
    network_name: string;
    domain: string;
}

export class APIError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'APIError';
    }
}
