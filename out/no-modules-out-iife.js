var outiife = (function (exports) {
    'use strict';

    const bName="My name is B";

    function handler(evt)
    {
        console.log(bName);
        return Date.now();
    }

    exports.handler = handler;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
//# sourceMappingURL=no-modules-out-iife.js.map
