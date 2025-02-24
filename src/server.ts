import express from 'express';
import { config } from './config';
import { lookupIP } from './geoip';
import { APIError } from './types';

const app = express();

app.get('/lookup/:ip', async (req, res) => {
    try {
        const result = await lookupIP(req.params.ip);
        res.json(result);
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
        res.status(500).json({ error: errorMessage });
    }
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}`);
});
