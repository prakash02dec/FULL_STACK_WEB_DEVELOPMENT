// jshint esversion:6
// module.exports = exports
exports.getDate = function () {
    const today = new Date();

    const option = {
        weekday: "long",
        day: "numeric",
        month: "long"
    }
    return today.toLocaleDateString("en-US", option)
} 

exports.getDay = function () {
    const today = new Date();

    const option = {
        weekday: "long",
    }
    return today.toLocaleDateString("en-US", option)
} 