var fs = require('fs');
var dir = '../../config/';
var file = 'my-app-config.js';

//check if config folder exists in root of project - if not then create it
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

//check if config file exists in config folder at root of project - if not then copy the default version into it
if (!fs.existsSync(dir + file)){
    fs.writeFileSync(dir + file, fs.readFileSync(__dirname + '/' + file));
}
