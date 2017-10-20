export class Negociacao {

    constructor(private _data: Date, private _quantidade: number, private _valor: number){

    }

    get data(){
        return new Date(this._data.getTime());
    }

    get quantidade(){
        return this._quantidade;
    }
    get valor(){
        return this._valor;
    }
    get volume(){
        return this._valor * this._quantidade;
    }
}