# GeoIP Service

A TypeScript-based service that provides geographical information for IP addresses using the Movable Ink GeoIP API.

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/movableink/sre-assignment-typescript.git
cd sre-assignment-typescript
```

2. Install dependencies:
```bash
npm install
```

## Configuration

The service requires the following environment variables:

- `API_URL`: The base URL for the Movable Ink GeoIP API (default: http://localhost:8000).  A production URL will be provided to you by Movable Ink.
- `API_TOKEN`: Your API token for authentication (optional) with the Movable Ink GeoIP API.  A production token will be provided to you by Movable Ink.
- `PORT`: The port number for the service (default: 3000)

## Running the Service

Start the service (don't forget to set your environment variables before starting):
```bash
npm start
```

The service will be available at `http://localhost:3000`.

## API Endpoints

### GET /lookup/:ip

Returns geographical information for the specified IP address.

Example request:
```bash
curl http://localhost:3000/lookup/8.8.8.8
```

Example response:
```json
{
  "ip": "8.8.8.8",
  "location": "United States",
  "postal_code": "",
  "network_name": "AS15169 GOOGLE",
  "domain": "Google",
  "latitude": 37.751,
  "longitude": -97.822
}
```

## Testing

### IP Address Testing Script

The repository includes a bash script (`test-ips.sh`) that tests the service with a list of IP addresses from `test_ips.txt`.  If test_ips.txt is not available you can create your own file and enter an ip address per line for testing.  For the assignment the test_ips.txt file will be provided by Movable Ink.

To run the tests:

1. Make sure the service is running in one terminal:
```bash
npm start
```

2. In another terminal, run the test script:
```bash
./test-ips.sh
```

The script will:
- Process each IP address in `test_ips.txt`
- Show progress every 100 requests
- Display a summary including:
  - Total number of requests
  - Total time taken
  - Average requests per second
  - Distribution of HTTP status codes

## Building for Production

To compile the TypeScript code:
```bash
npm run build
```

This will create a `dist` directory with the compiled JavaScript files.

## Development

The project uses TypeScript for type safety and better developer experience. Key files:

- `src/server.ts`: Express server setup and route definitions
- `src/geoip.ts`: GeoIP service implementation
- `src/config.ts`: Configuration management
- `src/types.ts`: TypeScript type definitions

## License

This project is proprietary and confidential to Movable Ink.
