positiveCasesDailyGraph();

async function positiveCasesDailyGraph() {
    const data = await getData();
    const ctx = document.getElementById('positive-daily-new').getContext('2d');
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
                    color: "rgba(255, 255, 255, 0.05)"
                },
                stacked: false
            }],
            xAxes: [{
                label: 'Casos',
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)']
                },
            }]
        }
    };
    const graph = {
        labels: data.xs,
        datasets: [
            {
                label: 'Casos diários',
                data: data.yPositiveDaily,
                backgroundColor: ['rgba(0, 65, 139, 0.5)'],
                borderColor: ['rgba(0, 65, 139, 1)'],
                borderWidth: 2,
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
    const yPositiveDaily = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const days = columns[0];
        const positiveDaily = columns[8];

        xs.push(days);
        yPositiveDaily.push(positiveDaily);
    });
    
    return { xs, yPositiveDaily };
}

positiveCasesDailyTotal();

async function positiveCasesDailyTotal() {
    const data = await getDatas();
    const ctx = document.getElementById('positive-daily-total').getContext('2d');
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
                    color: "rgba(255, 255, 255, 0.05)"
                },
                stacked: false
            }],
            xAxes: [{
                label: 'Casos',
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)']
                },
            }]
        }
    };
    const graph = {
        labels: data.xs,
        datasets: [
            {
                label: 'Casos diários',
                data: data.yPositiveDaily,
                backgroundColor: ['rgba(0, 65, 139, 0.5)'],
                borderColor: ['rgba(0, 65, 139, 1)'],
                borderWidth: 2,
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
    const yPositiveDaily = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const days = columns[0];
        const positiveDaily = columns[5];

        xs.push(days);
        yPositiveDaily.push(positiveDaily);
    });
    
    return { xs, yPositiveDaily };
}
