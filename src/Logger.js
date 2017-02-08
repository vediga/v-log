// date methods
let dm = require('./dateMethods.js');
let logLevels = require('./logLevels.js');

// Logger constructor
function Logger() {
    this.logLevel = 'warning';
}

Logger.prototype = {
   warning: warning,
   error: error,
   info: info,
   verbose: verbose,
   debug: debug
}

// Logger methods in the order of severity

function error(msg) {
    console.error(`[${dm.getPrettyDateAndTime()}]  [ERROR] ${msg}`);
}

function warning(msg) {
    if (logLevels[this.logLevel] >= logLevels['warning']) {
        console.warn(`[${dm.getPrettyDateAndTime()}][WARNING] ${msg}`);
    }
}

function info(msg) {
    if (logLevels[this.logLevel] >= logLevels['info']) {
        console.info(`[${dm.getPrettyDateAndTime()}]   [INFO] ${msg}`);
    }
}

function verbose(msg) {
    if (logLevels[this.logLevel] >= logLevels['verbose']) {
        console.log(`[${dm.getPrettyDateAndTime()}][VERBOSE] ${msg}`);
    }
}

function debug(msg) {
    if (logLevels[this.logLevel] >= logLevels['debug']) {
        console.log(`[${dm.getPrettyDateAndTime()}]  [DEBUG] ${msg}`);
    }
}

module.exports = Logger;
