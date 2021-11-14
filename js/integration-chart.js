class IntegrationChart {
    constructor(canvas) {
        this._canvas = canvas;
    }

    draw(labels, datasets, type = 'line') {
        return new Chart(this._canvas.getContext('2d'), {
            type,
            data: {
                labels,
                datasets
            },
            plugin: {
                beforeDraw: (chart) => {
                    const ctx = chart.canvas.getContext('2d');
                    ctx.save();
                    ctx.globalCompositeOperation = 'destination-over';
                    ctx.fillStyle = 'lightGreen';
                    ctx.fillRect(0, 0, chart.width, chart.height);
                    ctx.restore();
                }
            }
        });
    }
}

export {IntegrationChart};