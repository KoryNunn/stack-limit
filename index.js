module.exports = function(depth){
    var originalLimit = Error.stackTraceLimit;

    Error.stackTraceLimit = depth || originalLimit;

    var stack = new Error().stack;

    Error.stackTraceLimit = originalLimit;

    return stack;
};