(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["out-umd"] = {}));
})(this, (function (exports) { 'use strict';

    const bName="My name is B";

    function handler(evt) {
        console.log(bName, evt.id);
        return Date.now();
    }

    exports.handler = handler;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=no-modules-out-umd-ts.js.map
