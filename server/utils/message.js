 var messageGen = function (from,content) {
    return {
        from,
        content,
        createdAt : new Date().getTime()
    }
 }

 module.exports = {
    messageGen
 };