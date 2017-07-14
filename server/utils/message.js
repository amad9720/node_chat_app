 var messageGen = function (from,content) {
    return {
        from,
        content,
        createdAt : new Date().getTime()
    }
}

 var locationGen = function (from,longitude,latitude) {
    return {
        from,
        url:`https://www.google.com/maps?q=${latitude},${longitude}`,
        createdAt : new Date().getTime()
    }
 }


 module.exports = {
    messageGen,
    locationGen
 };