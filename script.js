fetch('data.json') 
    .then(response => response.json())
    .then(data => {
        const container = document.getElementById('data-container');
        const table = document.createElement('table');
        const headerRow = table.insertRow();
        const headers = ['Name', 'Cell Number', 'Gender', 'Income']; 

        headers.forEach(header => {
            const th = document.createElement('th');
            th.textContent = header;
            headerRow.appendChild(th);
        });

        data.forEach(item => {
            const row = table.insertRow();
            Object.values(item).forEach(value => {
                const cell = row.insertCell();
                cell.textContent = value;
            });
        });

        container.appendChild(table);
    });
