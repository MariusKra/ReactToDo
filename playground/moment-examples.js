var moment = require('moment');
console.log(moment().format('YYYY-MM-DD HH:MM:SS'));

var now = moment();
console.log(now.unix());

var timestamp = 1473177998;
var currentMoment = moment.unix(timestamp);

console.log('current moment', currentMoment.format('YYYY-MM-DD HH:MM:SS'))
