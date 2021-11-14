import {IntegrationMethod} from "./integration-method.js";

class GaussianMethod extends IntegrationMethod {
    constructor() {
        super();
        this.name = 'Метод Гаусса';
        this.g10c1 = 0.9739065285 / 6.2012983932;
        this.g10c2 = 0.8650633667 / 6.2012983932;
        this.g10c3 = 0.6794095683 / 6.2012983932;
        this.g10c4 = 0.4333953941 / 6.2012983932;
        this.g10c5 = 0.1488743390 / 6.2012983932;
        this.g10x1 = 0.0666713443 / 6.2012983932;
        this.g10x2 = 0.1494513492 / 6.2012983932;
        this.g10x3 = 0.2190863625 / 6.2012983932;
        this.g10x4 = 0.2692667193 / 6.2012983932;
        this.g10x5 = 0.2955242247 / 6.2012983932;
    }

    gaussCalc = (f, a, b) => {
        const m = (b + a) / 2;
        const n = (b - a) / 2;
        const s1 = this.g10c1 * (f(m + n * this.g10x1) + f(m - n * this.g10x1));
        const s2 = this.g10c2 * (f(m + n * this.g10x2) + f(m - n * this.g10x2));
        const s3 = this.g10c3 * (f(m + n * this.g10x3) + f(m - n * this.g10x3));
        const s4 = this.g10c4 * (f(m + n * this.g10x4) + f(m - n * this.g10x4));
        const s5 = this.g10c5 * (f(m + n * this.g10x5) + f(m - n * this.g10x5));
        const s = s1 + s2 + s3 + s4 + s5;
        return s * (b - a);
    };

    getGauss(func, a, b, eps, gc) {
        const t = (a + b) / 2;
        let ga = this.gaussCalc(func, a, t);
        let gb = this.gaussCalc(func, t, b);

        if (Math.abs(ga + gb - gc) > eps) {
            ga = this.getGauss(func, a, t, eps / 2, ga);
            gb = this.getGauss(func, t, b, eps / 2, gb);
        }

        return ga + gb;
    }

    integrate(func, a, b, n) {
        const eps = 10e-4;
        return this.getGauss(func, a, b, eps);
    }
}

export {GaussianMethod};