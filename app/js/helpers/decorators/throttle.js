System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function throttle() {
        return function (target, key, descriptor) {
            const metodoOriginal = descriptor.value;
            let time = 0;
            descriptor.value = function (...args) {
                if (event)
                    event.preventDefault();
                clearTimeout(time);
                time = setTimeout(() => {
                    metodoOriginal.apply(this, args);
                }, 500);
            };
            return descriptor;
        };
    }
    exports_1("throttle", throttle);
    return {
        setters: [],
        execute: function () {
        }
    };
});
