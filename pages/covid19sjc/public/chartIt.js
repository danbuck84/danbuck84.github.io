chartItLight();
                
async function chartItLight() {
    const data = await getData();
    const ctx = document.getElementById('covid-sjc').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: false
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(46, 49, 49, 0.1)"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Casos'
                },
                stacked: false
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(46, 49, 49, 1)']
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Dias'
                },
            }]
        }
    };
    const graph = {
        labels: data.xs,
            datasets: [
            {
                label: 'Positivos',
                data: data.yKnown,
                backgroundColor: ['rgba(246, 36, 89, 1)'],
                borderColor: ['rgba(246, 36, 89, 1)'],
                borderWidth: 3,
                fill: false
            },
            {
                label: 'Recuperados',
                data: data.yRecovered,
                backgroundColor: ['rgba(11, 156, 49, 1)'],
                borderColor: ['rgba(11, 156, 49, 1)'],
                borderWidth: 3,
                fill: false
            },
            {
                label: 'Óbitos',
                data: data.yDown,
                backgroundColor: ['rgba(46, 49, 49, 1)'],
                borderColor: ['rgba(46, 49, 49, 1)'],
                borderWidth: 3,
                fill: false
            }]
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'line',
        data: graph,
    });
}

async function getData() {
    const xs = [];
    const yKnown = [];
    const yRecovered = [];
    const yDown = [];
    
    const response = await fetch('data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const days = columns[0];
        const knownCases = columns[9];
        const recoveredCases = columns[17];
        const downCases = columns[16];

        xs.push(days);
        yKnown.push(knownCases);
        yRecovered.push(recoveredCases);
        yDown.push(downCases);
    });

    return { xs, yKnown, yRecovered, yDown };
}


chartItDark();

async function chartItDark() {
    const data = await getData();
    const ctx = document.getElementById('covid-sjc').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'nearest',
            intersect: false
        },
        scales: {
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)"
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Casos'
                },
                stacked: false
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)']
                },
                scaleLabel: {
                    display: true,
                    labelString: 'Dias'
                },
            }]
        }
    };
    const graph = {
        labels: data.xs,
        datasets: [
            {
                label: 'Positivos',
                data: data.yKnown,
                backgroundColor: ['rgba(246, 36, 89, 1)'],
                borderColor: ['rgba(246, 36, 89, 1)'],
                borderWidth: 3,
                fill: false
            },
            {
                label: 'Recuperados',
                data: data.yRecovered,
                backgroundColor: ['rgba(11, 156, 49, 1)'],
                borderColor: ['rgba(11, 156, 49, 1)'],
                borderWidth: 3,
                fill: false
            },
            {
                label: 'Óbitos',
                data: data.yDown,
                backgroundColor: ['rgba(255, 255, 255, 1)'],
                borderColor: ['rgba(255, 255, 255, 1)'],
                borderWidth: 3,
                fill: false
            }]
        };
        const myChart = new Chart(ctx, {
            options: options,
            type: 'line',
            data: graph,
        });
    }
    
    async function getData() {
        const xs = [];
        const yKnown = [];
        const yRecovered = [];
        const yDown = [];
        
        const response = await fetch('data.csv');
        const data = await response.text();
        
        const table = data.split('\n').slice(1);
        table.forEach(row => {
            const columns = row.split(',');
            const days = columns[0];
            const knownCases = columns[9];
            const recoveredCases = columns[17];
            const downCases = columns[16];
            
            xs.push(days);
            yKnown.push(knownCases);
            yRecovered.push(recoveredCases);
            yDown.push(downCases);
        });
        
        return { xs, yKnown, yRecovered, yDown };
    }
    
// export function chartItLight();
// export function chartItDark();
