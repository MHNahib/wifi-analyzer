# Getting Started with Server

## Available Scripts

In the project directory, you can run:

## Installation

Install server with npm

```bash
  npm install

```

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:5000](http://localhost:5000) to view it in your browser.

## API Reference

#### Get all wifi details

```http
  GET /wifi
```

#### Example response

```javascript
{
"status": "200",
"message": "success",
"networks": [
{
"mac": "mac:mac:mac:mac:mac:mac",
"bssid": "bssid:bssid:bssid:bssid:bssid:bssid",
"ssid": "<SSID>",
"channel": 2,
"frequency": 2417,
"signal_level": -100,
"quality": 0,
"security": "WPA2-Personal",
"security_flags": "CCMP ",
"mode": "Unknown"
}
]
}
```
