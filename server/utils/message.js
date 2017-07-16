const moment = require('moment');

var messageGen = function (from,content) {
    return {
        from,
        content,
        createdAt : moment().valueOf()
    }
}

 var locationGen = function (from,longitude,latitude) {
    return {
        from,
        url:`https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt : moment().valueOf()
    }
 }


 module.exports = {
    messageGen,
    locationGen
 };