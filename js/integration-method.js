/**
 * @abstract
 */
class IntegrationMethod {
    constructor() {
        this.name = null;
    }

    /**
     * 
     * @param {Function} func – функция интегрирования
     * @param {number} a - нижняя граница
     * @param {number} b - верхняя граница
     * @param {number} n - количество отрезков для интегрирования
     * @return {number} – результат интегрирования
     */
    integrate(func, a, b, n) {};
}

export {IntegrationMethod};