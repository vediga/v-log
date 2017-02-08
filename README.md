# v-log

[![NPM](https://nodei.co/npm/v-log.png?compact=true)](https://nodei.co/npm/v-log/)

A simple javascript logging utility.

##Installation
  
  npm install v-log

##Usage

```javascript
  let vlog = require('v-log');

  vlog.error("Invalid request");          // [Sun Feb 05 2017 15:24:38]  [ERROR] Invalid request
  vlog.warning("Session timed out");      // [Sun Feb 06 2017 13:24:28][WARNING] Session timed out
  vlog.info("Starting up the app");       // [Sun Feb 07 2017 11:24:28]   [INFO] Starting up the app
  vlog.verbose("Successfully logged in"); // [Sun Feb 07 2017 15:24:38][VERBOSE] Successfully logged in
  vlog.debug("Navigating to checkout");   // [Sun Feb 07 2017 15:24:38][  DEBUG] Navigating to checkout
```
