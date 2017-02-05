let dateFormat = require('dateformat');

function getPrettyDateAndTime() {
   return dateFormat();
};

module.exports = {
   getPrettyDateAndTime: getPrettyDateAndTime
};
