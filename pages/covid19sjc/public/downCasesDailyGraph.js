downCasesDailyGraph();

async function downCasesDailyGraph() {
    const data = await getData();
    const ctx = document.getElementById('down-daily-new').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'average',
            intersect: false
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)']
                },
                stacked: false
            }],
            xAxes: [{
                label: 'Casos',
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)"
                },
            }]
        }
    };
    const graph = {
        labels: data.xs,
        datasets: [
            {
                label: 'Casos diários',
                data: data.ydownDaily,
                backgroundColor: 'rgba(255, 188, 0, 0.5)',
                borderColor: 'rgba(255, 188, 0, 1)',
                borderWidth: 1,
                lineTension: 0.5,
                fill: true
            }
        ]
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'bar',
        data: graph,
    });
}
    
async function getData() {
    const xs = [];
    const ydownDaily = [];
    
    const response = await fetch('data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const days = columns[0];
        const downDaily = columns[11];

        xs.push(days);
        ydownDaily.push(downDaily);
    });
    
    return { xs, ydownDaily };
}

downCasesDailyTotal();

async function downCasesDailyTotal() {
    const data = await getDatas();
    const ctx = document.getElementById('down-daily-total').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'average',
            intersect: false
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)']
                },
                stacked: false
            }],
            xAxes: [{
                label: 'Casos',
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)"
                },
            }]
        }
    };
    const graph = {
        labels: data.xs,
        datasets: [
            {
                label: 'Casos diários',
                data: data.ydownDaily,
                backgroundColor: 'rgba(255, 188, 0, 0.5)',
                borderColor: 'rgba(255, 188, 0, 1)',
                borderWidth: 1,
                lineTension: 0.5,
                fill: true
            }
        ]
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'bar',
        data: graph,
    });
}
    
async function getDatas() {
    const xs = [];
    const ydownDaily = [];
    
    const response = await fetch('data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const days = columns[0];
        const downDaily = columns[10];

        xs.push(days);
        ydownDaily.push(downDaily);
    });
    
    return { xs, ydownDaily };
}
