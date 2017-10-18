abstract class View<T> {
    private _elemento: Element;
    
        constructor(selector: string){
            this._elemento = document.querySelector(selector);
    
        }
        abstract template(model: T): string;    

        update(model: T): void {
            this._elemento.innerHTML = this.template(model);
        }
}