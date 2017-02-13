# v-log

[![NPM](https://nodei.co/npm/v-log.png?compact=true)](https://nodei.co/npm/v-log/)

A simple javascript logging utility.

##Installation
  
  npm install v-log

##General Usage

```javascript
  let vlog = require('v-log');

  vlog.error("Invalid request");          // [Sun Feb 05 2017 15:24:38][ERROR]   Invalid request
  vlog.warning("Session timed out");      // [Sun Feb 06 2017 13:24:28][WARNING] Session timed out
  vlog.info("Starting up the app");       // prints nothing as default log level is warning
  vlog.verbose("Successfully logged in"); // prints nothing as default log level is warning
  vlog.debug("Navigating to checkout");   // prints nothing as default log level is warning
```

##Log Level

There are 5 different log levels namely error, warning, info, verbose, debug where error
being least logging level and debug being highest level.

Default log level is warning which means any log message above warning i.e info, verbose or debug
will be ignored.

You can change the log level as below:

```javascript
  vlog.setLevel("debug");

  vlog.error("Invalid request");          // [Sun Feb 05 2017 15:24:38][ERROR]   Invalid request
  vlog.warning("Session timed out");      // [Sun Feb 06 2017 13:24:28][WARNING] Session timed out
  vlog.info("Starting up the app");       // [Sun Feb 07 2017 11:24:28][INFO]    Starting up the app
  vlog.verbose("Successfully logged in"); // [Sun Feb 07 2017 11:24:28][VERBOSE] Successfully logged in
  vlog.debug("Navigating to checkout");   // [Sun Feb 07 2017 11:24:28][DEBUG]   Navigating to checkout
```
