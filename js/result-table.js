class ResultTable {
    constructor(table) {
        this._table = table;
    }

    /**
     * @param {string[]} headers - массив с заголовками таблицы
     * @param {string[][]} body - массив с данными
     */
    render(headers, body) {
        const fragment = document.createDocumentFragment();
        
        const thead = document.createElement('thead');
        headers.forEach((header) => {
            const td = document.createElement('td');
            td.textContent = header;
            thead.appendChild(td);
        });

        const tbody = document.createElement('tbody');
        body.forEach((row) => {
            const tr = document.createElement('tr');
            row.forEach((value) => {
                const td = document.createElement('td');
                td.textContent = value;
                tr.appendChild(td);
            });
            tbody.appendChild(tr);
        });

        fragment.appendChild(thead);
        fragment.appendChild(tbody);
        this._table.innerHTML = '';
        this._table.appendChild(fragment);
    }
}

export {ResultTable};