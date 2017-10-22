export function throttle() {
    
    return function (target: any, key: string, descriptor: PropertyDescriptor) {

        const metodoOriginal = descriptor.value;
        let time =  0;

        descriptor.value = function (...args: any[]) {
            if(event) event.preventDefault();
            clearTimeout(time);

            time = setTimeout(() => {
                
                metodoOriginal.apply(this, args);
            }, 500);
        }
        return descriptor;

    }
    
}