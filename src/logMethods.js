// date methods
let dm = require('./dateMethods.js');

function info (msg) {
    console.info(`[${dm.getPrettyDateAndTime()}][INFO] ${msg}`);
}

function success (msg) {
    console.log(`[${dm.getPrettyDateAndTime()}][SUCCESS] ${msg}`);
}

function warning (msg) {
    console.warn(`[${dm.getPrettyDateAndTime()}][WARNING] ${msg}`);
}

function error (msg) {
    console.error(`[${dm.getPrettyDateAndTime()}][ERROR] ${msg}`);
}

module.exports = {
    info: info,
    success: success,
    warning: warning,
    error: error
};
