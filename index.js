var file = 'my-app-config.js';

//determine current environment - else default to development
var e = process.env.NODE_ENV || "development";

var config;

try
{
    config = require('../../config/' + file)[e];
}
catch(err)
{
    console.log("WARNING: my-app-config: config file not found");
}

module.exports = config;
