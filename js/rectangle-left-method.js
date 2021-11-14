import {IntegrationMethod} from "./integration-method.js";

class RectangleLeftMethod extends IntegrationMethod {
    constructor() {
        super();
        this.name = 'Метод левых треугольников';
    }

    integrate(func, a, b, n) {
        const h = (b - a) / n;
        const x = Array.from({length: n}, (_, i) => a + h * i);
        let integrationValue = 0;
        for (let i = 0; i < n - 1; i++) {
            integrationValue += h * func(x[i]);
        }
        return integrationValue;
    }
}

export {RectangleLeftMethod};