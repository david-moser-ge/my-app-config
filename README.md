# My App Config

This utility allows you to retrieve configuration settings for your Node.js application.  You can store settings for multiple environments.  The utility will detect the current environment based on your NODE_ENV environment variable.


## Installing

To install the lastest release using npm, run:
```bash
npm install my-app-config
```

## Usage
Upon installation a config folder will be created in the root of your project (unless you already have one).  It will then create a file called my-app-config.js in the folder.  The file will have the following structure:

```javascript
development: {
   sampleKey1: "development value 1",
   sampleKey2: "development value 2"
},
production: {
   sampleKey1: "production value 1",
   sampleKey2: "production value 2"
}
```
Each section (development, production, etc...) correlates to a NODE_ENV setting.  Feel free to add, rename or remove sections based on the range of NODE_ENV settings used in your app.

Using the utility is as simple as this:
```javascript
var config = require('my-app-config');
console.log (config.sampleKey1);

development value 1
```
It will retrieve the settings from the section that matches your current NODE_ENV environment variable.

## License
MIT
