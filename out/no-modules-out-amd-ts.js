define(['exports'], (function (exports) { 'use strict';

    const bName="My name is B";

    function handler(evt) {
        console.log(bName, evt.id);
        return Date.now();
    }

    exports.handler = handler;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=no-modules-out-amd-ts.js.map
