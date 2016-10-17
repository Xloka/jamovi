
'use strict';

var Overridable = function() {

    this._override = function(functionName, callback) {
        var baseFunction = this[functionName];
        if (!baseFunction)
            baseFunction = null;

        var self = this;
        this[functionName] = function(_param1, _param2, _param3, _param4, _param5, _param6, _param7) {
            return callback.call(self, baseFunction, _param1, _param2, _param3, _param4, _param5, _param6, _param7);
        };
    };

};

Overridable.extendTo = function(target) {
    Overridable.call(target);
};

module.exports = Overridable;
