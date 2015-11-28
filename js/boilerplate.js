(function () {
    // The top-level namespace. All public classes and modules will
    // be attached to this. Exported for both CommonJS/RequireJS and the browser.
    var self = window.Self = {};

    var privateField = '';
    function privateFunction() { }

    self.publicField = '';
    self.publicFunction = function () { };

    // some AMD build optimizers, like r.js, check for specific condition patterns like the following
    if (typeof define === 'function' && typeof define.amd === 'object' && define.amd) {
        define(function () {
            return self;
        });
    }

    // NodeJS
    if (typeof module === 'object' && typeof module.exports === 'object') {
        module.exports = self;
    }

} ());