'use strict';

var requireLib = function(lib) {
    var libDir = process.env.JAVASCRIPT_COV ? './lib-cov' : './lib';
    return require(libDir + '/' + lib);
};

module.exports = {
    LinkedList: requireLib('linkedList')
};