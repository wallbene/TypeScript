export abstract class View<T> {
    _escapar: boolean;
    private _elemento: JQuery;
    
        constructor(selector: string, escapar: boolean = false){
            this._elemento = $(selector);
            this._escapar = escapar;
    
        }
        abstract template(model: T): string;    

        update(model: T): void {
            let template = this.template(model)
            if(this._escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
            }

            this._elemento.html(template);
        }
}