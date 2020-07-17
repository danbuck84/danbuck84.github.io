positiveCasesWeeklyGraph();

async function positiveCasesWeeklyGraph() {
    const data = await getData();
    const ctx = document.getElementById('positive-weekly-new').getContext('2d');
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
                data: data.yPositiveWeekly,
                backgroundColor: 'rgba(0, 65, 139, 0.5)',
                borderColor: 'rgba(0, 65, 139, 1)',
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
    const yPositiveWeekly = [];
    
    const response = await fetch('data-week.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const weeks = columns[0];
        const positiveWeekly = columns[1];

        xs.push(weeks);
        yPositiveWeekly.push(positiveWeekly);
    });
    
    return { xs, yPositiveWeekly };
}

positiveCasesWeeklyTotal();

async function positiveCasesWeeklyTotal() {
    const data = await getDatas();
    const ctx = document.getElementById('positive-weekly-total').getContext('2d');
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
                data: data.yPositiveWeekly,
                backgroundColor: 'rgba(0, 65, 139, 0.5)',
                borderColor: 'rgba(0, 65, 139, 1)',
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
    const yPositiveWeekly = [];
    
    const response = await fetch('data-week.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const weeks = columns[0];
        const positiveWeekly = columns[3];

        xs.push(weeks);
        yPositiveWeekly.push(positiveWeekly);
    });
    
    return { xs, yPositiveWeekly };
}
