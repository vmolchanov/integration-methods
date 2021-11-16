import {RectangleCenterMethod} from './rectangle-center-method.js';
import {RectangleLeftMethod} from "./rectangle-left-method.js";
import {RectangleRightMethod} from "./rectangle-right-method.js";
import {TrapezeMethod} from "./trapeze-method.js";
import {SimpsonMethod} from "./simpson-method.js";
import {GaussianMethod} from "./gaussian-method.js";
import {MonteCarloMethod} from './monte-carlo-method.js';
import {GeometricalMonteСarloMethod} from './geometrical-monte-carlo-method.js';
import {IntegrationChart} from './integration-chart.js';
import {ResultTable} from './result-table.js';

const form = document.querySelector('.integral-form');
const chart = new IntegrationChart(document.querySelector('#chart'));
const resultTable = new ResultTable(document.querySelector('#result'));

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    processForm({
        func: (x) => x * Math.exp(-x),
        a: Number(formData.get('bottom')),
        b: Number(formData.get('top')),
        n: Number(formData.get('segments-count'))
    });
});

const processForm = ({func, a, b, n}) => {
    const methods = [
        new RectangleCenterMethod(),
        new RectangleLeftMethod(),
        new RectangleRightMethod(),
        new TrapezeMethod(),
        new SimpsonMethod(),
        new GaussianMethod(),
        new MonteCarloMethod(),
        new GeometricalMonteСarloMethod()
    ];

    resultTable.render(
        ['Метод', 'Значение'],
        methods.map((method) => [method.name, method.integrate(func, a, b, n)])
    );

    // Графики

    const data = Array.from({length: methods.length}).map((_, i) => {
        return Array.from(
            {length: 20},
            (_, j) => methods[i].integrate(func, a, b, j + 1)
        );
    });

    const colors = [
        'red',
        'green',
        'blue',
        'yellow',
        'orange',
        'black',
        'lime',
        'tomato'
    ];

    chart.draw(
        Array.from({length: 20}, (_, i) => i + 1),
        methods.map((method, i) => {
            return {
                label: method.name,
                data: data[i],
                borderColor: colors[i]
            };
        })
    );
};