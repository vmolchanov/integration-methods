import {IntegrationMethod} from './integration-method.js';
import {randomFloat} from './util.js';

class MonteCarloMethod extends IntegrationMethod {
    constructor() {
        super();
        this.name = 'Метод Монтекарло (статический метод прямоугольника)';
    }

    integrate(func, a, b, n) {
        const h = (b - a) / n;
        const randomPoints = Array.from({length: n}, () => func(randomFloat(a, b)));
        return randomPoints.reduce((integrationValue, point) => integrationValue + h * point, 0.0);
    }
}

export {MonteCarloMethod};