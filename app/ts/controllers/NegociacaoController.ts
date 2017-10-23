import { Negociacao, Negociacoes, NegociacaoParcial} from "../models/index";
import { NegociacoesView, MensagemView } from "../views/index";
import {domInject, throttle} from '../helpers/decorators/index';
import { imprime } from '../helpers/index';
import { NegociacaoService, handlerFunction } from "../services/index";

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
    private _negociacaoService = new NegociacaoService();

    constructor(){

        this._negociacoesView.update(this._negociacoes);
    }
    @throttle()
    adiciona(event: Event) {
        
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

        imprime(...this._negociacoes.paraArray(), negociacao);

        this._negociacoesView.update(this._negociacoes);
        this._mensagemView.update('Negociação adicionada com sucesso!');

    }
    
    @throttle()
    async importa(){
        try {
            
            let negociacoesParaImportar: Negociacao[] =  await this._negociacaoService.importaNegocicao(res => {
                if(!res.ok){
                    throw new Error(res.statusText);
                }
                return res;
                });
                
            const negociacoesImportadas = this._negociacoes.paraArray();

            negociacoesParaImportar
                .filter(negociacaoParaImportar => 
                    !negociacoesImportadas.some(negociacaoImportada =>
                            negociacaoParaImportar.ehIgual(negociacaoImportada)))
                .forEach(negociacao => 
                    this._negociacoes.adiciona(negociacao));

            this._negociacoesView.update(this._negociacoes);
        } catch(error){
            this._mensagemView.update(error.message);
        }
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