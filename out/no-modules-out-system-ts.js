System.register('out-system', [], (function (exports) {
    'use strict';
    return {
        execute: (function () {

            exports('handler', handler);

            const bName="My name is B";

            function handler(evt) {
                console.log(bName, evt.id);
                return Date.now();
            }

        })
    };
}));
//# sourceMappingURL=no-modules-out-system-ts.js.map
