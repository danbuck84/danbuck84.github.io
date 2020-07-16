downCasesWeeklyGraph();

async function downCasesWeeklyGraph() {
    const data = await getData();
    const ctx = document.getElementById('down-weekly-new').getContext('2d');
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
                label: 'Casos semanais',
                data: data.ydownWeekly,
                backgroundColor: 'rgba(255, 188, 0, 0.5)',
                borderColor: 'rgba(255, 188, 0, 1)',
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
    const ydownWeekly = [];
    
    const response = await fetch('data-week.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const weeks = columns[0];
        const downWeekly = columns[2];

        xs.push(weeks);
        ydownWeekly.push(downWeekly);
    });
    
    return { xs, ydownWeekly };
}

downCasesWeeklyTotal();

async function downCasesWeeklyTotal() {
    const data = await getDatas();
    const ctx = document.getElementById('down-weekly-total').getContext('2d');
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
                label: 'Casos semanais',
                data: data.ydownWeekly,
                backgroundColor: 'rgba(255, 188, 0, 0.5)',
                borderColor: 'rgba(255, 188, 0, 1)',
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
    const ydownWeekly = [];
    
    const response = await fetch('data-week.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const weeks = columns[0];
        const downWeekly = columns[4];

        xs.push(weeks);
        ydownWeekly.push(downWeekly);
    });
    
    return { xs, ydownWeekly };
}
