let Logger = require('./src/Logger.js');
let defaultLogger = new Logger();

// also provide a means to create new Logger instance
// TODO: ADD this later
// defaultLogger.Logger = Logger;

module.exports = defaultLogger;
