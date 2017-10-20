System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Mensagem;
    return {
        setters: [],
        execute: function () {
            Mensagem = class Mensagem {
                constructor() {
                    this._texto = '';
                }
                get texto() {
                    return this._texto;
                }
                set texto(texto) {
                    this._texto = texto;
                }
            };
            exports_1("Mensagem", Mensagem);
        }
    };
});
