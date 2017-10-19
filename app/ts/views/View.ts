abstract class View<T> {
    private _elemento: JQuery;
    
        constructor(selector: string){
            this._elemento = $(selector);
    
        }
        abstract template(model: T): string;    

        update(model: T): void {
            this._elemento.html(this.template(model));
        }
}