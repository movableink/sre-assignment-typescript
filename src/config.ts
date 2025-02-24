export const config = {
    port: parseInt(process.env.PORT || '3000', 10),
    apiUrl: process.env.API_URL || 'http://localhost:8000',
    apiToken: process.env.API_TOKEN || ''
};
