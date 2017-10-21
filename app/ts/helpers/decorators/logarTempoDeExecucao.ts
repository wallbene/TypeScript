export function logarTempoDeExecucao(s :boolean = false) {
    
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;

        descriptor.value = function(...args: any[]){
            let divisor: number = 1;
            let unidade = 'ms';
            if(s){
                divisor = 1000;
                unidade = 's';
            }

            console.log("---------------------------------");

            console.log(`Parâmetros passados para o método ${propertyKey}: ${JSON.stringify(args)}`);

            const n1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const n2 = performance.now();

            console.log(`Valor retornado pelo método ${propertyKey}: ${JSON.stringify(retorno)}`)

            console.log(`tempo gasto durante a execução: ${(n2 - n1)/divisor} ${unidade}`)

            console.log("---------------------------------");


            return retorno;
        }

        return descriptor;
        
    }
    
}