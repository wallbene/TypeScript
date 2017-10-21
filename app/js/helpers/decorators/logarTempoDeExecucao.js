System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function logarTempoDeExecucao(s = false) {
        return function (target, propertyKey, descriptor) {
            const metodoOriginal = descriptor.value;
            descriptor.value = function (...args) {
                let divisor = 1;
                let unidade = 'ms';
                if (s) {
                    divisor = 1000;
                    unidade = 's';
                }
                console.log("---------------------------------");
                console.log(`Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);
                const n1 = performance.now();
                const retorno = metodoOriginal.apply(this, args);
                const n2 = performance.now();
                console.log(`Valor retornado pelo método ${propertyKey}: ${JSON.stringify(retorno)}`);
                console.log(`tempo gasto durante a execução: ${(n2 - n1) / divisor} ${unidade}`);
                console.log("---------------------------------");
                return retorno;
            };
            return descriptor;
        };
    }
    exports_1("logarTempoDeExecucao", logarTempoDeExecucao);
    return {
        setters: [],
        execute: function () {
        }
    };
});
