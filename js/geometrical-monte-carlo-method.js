import {IntegrationMethod} from './integration-method.js';
import {randomFloat} from './util.js';

class GeometricalMonteСarloMethod extends IntegrationMethod {
    constructor() {
        super();
        this.name = 'Геометрический метод Монте-Карло';
    }

    integrate(func, a, b, n) {
        // Ограничим функцию квадратом со стороной b - a и "накидаем" в него n случайных точек
        const randomX = Array.from({length: n}, () => randomFloat(a, b));
        const randomY = Array.from({length: n}, () => randomFloat(0, b - a));

        let countOfPointsUnderGraph = 0;
        let integrationValue = 0.0;

        for (let i = 0; i < n; i++) {
            if (randomY[i] < func(randomX[i])) {
                countOfPointsUnderGraph++;
            }
            integrationValue = Math.pow(b - a, 2) * countOfPointsUnderGraph / n;
        }

        return integrationValue;
    }
}

export {GeometricalMonteСarloMethod};