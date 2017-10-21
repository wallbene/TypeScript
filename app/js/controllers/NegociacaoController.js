System.register(["../models/index", "../views/index"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, NegociacaoController, diaDaSemana;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this._negociacoes = new index_1.Negociacoes();
                    this._negociacoesView = new index_2.NegociacoesView('#negociacoesView');
                    this._mensagemView = new index_2.MensagemView('#mensagemView');
                    this._inputData = $('#data');
                    this._inputQuantidade = $('#quantidade');
                    this._inputValor = $('#valor');
                    this._negociacoesView.update(this._negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this._inputData.val().replace(/-/g, ','));
                    if (this._ehDiaUtil(data)) {
                        this._mensagemView.update("Somente é permitido dias úteis para data");
                        return;
                    }
                    const negociacao = new index_1.Negociacao(data, parseInt(this._inputQuantidade.val()), parseFloat(this._inputValor.val()));
                    this._negociacoes.adiciona(negociacao);
                    this._negociacoesView.update(this._negociacoes);
                    this._mensagemView.update('Negociação adicionada com sucesso!');
                }
                _ehDiaUtil(data) {
                    return data.getDay() == diaDaSemana.sabado || data.getDay() == diaDaSemana.domingo;
                }
            };
            exports_1("NegociacaoController", NegociacaoController);
            (function (diaDaSemana) {
                diaDaSemana[diaDaSemana["domingo"] = 0] = "domingo";
                diaDaSemana[diaDaSemana["segunda"] = 1] = "segunda";
                diaDaSemana[diaDaSemana["terca"] = 2] = "terca";
                diaDaSemana[diaDaSemana["quarta"] = 3] = "quarta";
                diaDaSemana[diaDaSemana["quinta"] = 4] = "quinta";
                diaDaSemana[diaDaSemana["sexta"] = 5] = "sexta";
                diaDaSemana[diaDaSemana["sabado"] = 6] = "sabado";
            })(diaDaSemana || (diaDaSemana = {}));
        }
    };
});
