import {IntegrationMethod} from "./integration-method.js";

class RectangleRightMethod extends IntegrationMethod {
    constructor() {
        super();
        this.name = 'Метод правых треугольников';
    }

    integrate(func, a, b, n) {
        const h = (b - a) / n;
            const x = Array.from({length: n}, (_, i) => a + h * i);
        let integrationValue = 0;
        for (let i = 1; i < n; i++) {
            integrationValue += h * func(x[i]);
        }
        return integrationValue;
    }
}

export {RectangleRightMethod};