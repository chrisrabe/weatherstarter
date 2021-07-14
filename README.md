# Teachstarter Coding Challenge

## Solution

Created a widget that can be installed as a Chrome Extension

## Getting started

1. Sign up for required services

- https://positionstack.com/documentation
- https://openweathermap.org/

2. Update `src/config.json`

```json
{
  "weatherApi": "http://api.openweathermap.org/data/2.5",
  "weatherApiKey": "<WEATHER_API_KEY>",
  "positionStackApi": "http://api.positionstack.com/v1",
  "positionStackKey": "<POSITION_STACK_API_KEY>"
}
```

3. Build the package

```shell
npm install # install all dependencies
npm run build # build package
```

4. Install as a Chrome Extension

- Open up Chrome browser
- Go to `chrome://extensions`
- Enable developer mode (top-right corner toggle)
- Press "Load unpacked" button
- Navigate to teachstarter code base and select the `build` folder

## Additional Notes

- For geolocation, you may need to enable location for your browser
