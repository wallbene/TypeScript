import { Negociacao, Negociacoes} from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import {domInject} from '../helpers/decorators/index';

export class NegociacaoController {

    @domInject("#data")
    private _inputData: JQuery;

    @domInject("#quantidade")
    private _inputQuantidade: JQuery;

    @domInject("#valor")
    private _inputValor: JQuery;
    
    private _negociacoes = new Negociacoes();
    private _negociacoesView = new NegociacoesView('#negociacoesView');
    private _mensagemView = new MensagemView('#mensagemView');

    constructor(){

        this._negociacoesView.update(this._negociacoes);
    }

    adiciona(event: Event) {
        event.preventDefault();
        
        let data = new Date(this._inputData.val().replace(/-/g, ','));
        if(this._ehDiaUtil(data)){
            this._mensagemView.update("Somente é permitido dias úteis para data");
            return;
        }
        const negociacao = new Negociacao(
            data,
            parseInt(this._inputQuantidade.val()),
            parseFloat(this._inputValor.val())
        );

        this._negociacoes.adiciona(negociacao);
        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

    }
    private _ehDiaUtil(data: Date): boolean{

        return data.getDay() == diaDaSemana.sabado || data.getDay() == diaDaSemana.domingo;
    }
}

enum diaDaSemana {
    domingo,
    segunda,
    terca,
    quarta,
    quinta,
    sexta,
    sabado
}