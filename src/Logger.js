// date methods
let dm = require('./dateMethods.js');
let logLevels = require('./logLevels.js');

// Logger constructor
function Logger() {
    this.logLevel = 'warning';
}

Logger.prototype = {
    setLevel: setLevel,
    warning: warning,
    error: error,
    info: info,
    verbose: verbose,
    debug: debug
};

/**
 * @function setLevel
 * @param {String} level - new log level to set
 *  method to change the default log level
 */
function setLevel(level) {
    let levels = Object.keys(logLevels);
    this.logLevel = 'debug';

    if (levels.indexOf(level) !== -1) {
        this.logLevel = level;
        this.info(`Log level set to ${level}`);
    } else {
        throw new Error(`Invalid log level: ${level}`);
    }
}

// --- Logger methods in the order of severity --- //

/**
 * @function error
 * @param {String} msg - error message
 *  method to print error message
 */
function error(msg) {
    console.error(`[${dm.getPrettyDateAndTime()}][ERROR]   ${msg}`);
}

/**
 * @function warning
 * @param {String} msg - warning message
 *  method to print warning message
 */
function warning(msg) {
    if (logLevels[this.logLevel] >= logLevels['warning']) {
        console.warn(`[${dm.getPrettyDateAndTime()}][WARNING] ${msg}`);
    }
}

/**
 * @function info
 * @param {String} msg - info message
 *  method to print info message
 */
function info(msg) {
    if (logLevels[this.logLevel] >= logLevels['info']) {
        console.info(`[${dm.getPrettyDateAndTime()}][INFO]    ${msg}`);
    }
}

/**
 * @function verbose
 * @param {String} msg - verbose message
 *  method to print verbose message
 */
function verbose(msg) {
    if (logLevels[this.logLevel] >= logLevels['verbose']) {
        console.log(`[${dm.getPrettyDateAndTime()}][VERBOSE] ${msg}`);
    }
}

/**
 * @function debug
 * @param {String} msg - debug message
 *  method to print debug message
 */
function debug(msg) {
    if (logLevels[this.logLevel] >= logLevels['debug']) {
        console.log(`[${dm.getPrettyDateAndTime()}][DEBUG]   ${msg}`);
    }
}

module.exports = Logger;
