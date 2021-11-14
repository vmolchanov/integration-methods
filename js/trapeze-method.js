import {IntegrationMethod} from "./integration-method.js";

class TrapezeMethod extends IntegrationMethod {
    constructor() {
        super();
        this.name = 'Метод трапеций';
    }

    integrate(func, a, b, n) {
        const h = (b - a) / n;
        const x = Array.from({length: n}, (_, i) => a + h * i);
        let integrationValue = h / 2 * (func(x[0]) + func(x[n - 1]));
        for (let i = 1; i < n - 1; i++) {
            integrationValue += h * func(x[i]);
        }
        return integrationValue;
    }
}

export {TrapezeMethod};