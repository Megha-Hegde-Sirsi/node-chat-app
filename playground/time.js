var moment = require('moment');

// new Date().getTime();
var someTimeStamp = moment().valueOf();
console.log(someTimeStamp);

var craetedAt = 1234;
var date = moment(craetedAt);
console.log(date.format('h:mm a'));