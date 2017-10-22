import { Negociacao, NegociacaoParcial } from "../models/index";

export class NegociacaoService {

    importaNegocicao(handler: handlerFunction): Promise<Negociacao[]>{

        return fetch("http://localhost:8080/dados")
            .then(res => handler(res))
            .then(res => res.json())
            .then((dados: NegociacaoParcial[]) =>
                dados
                    .map(dado => 
                        new Negociacao(new Date(), dado.vezes, dado.montante))
            )
    }
}

export interface handlerFunction {
    (res: Response): Response;
}