import {IntegrationMethod} from "./integration-method.js";

class RectangleCenterMethod extends IntegrationMethod {
    constructor() {
        super();
        this.name = 'Метод центральных треугольников';
    }

    integrate(func, a, b, n) {
        const h = (b - a) / n;
        const x = Array.from({length: n}, (_, i) => a + h * i);
        let integrationValue = 0;
        for (let i = 1; i < n; i++) {
            integrationValue += h * func(x[i - 1] + h / 2);
        }
        return integrationValue;
    }
}

export {RectangleCenterMethod};