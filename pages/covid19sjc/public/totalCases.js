totalCases();

async function totalCases() {
    const data = await getData();
    const ctx = document.getElementById('total-cases').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Total de casos',
            fontSize: 18,
        },
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
                label: 'Óbitos',
                data: data.yDown,
                backgroundColor: ['rgba(255, 255, 255, 0.5)'],
                borderColor: ['rgba(255, 255, 255, 1)'],
                borderWidth: 2,
                lineTension: 0.5,
                fill: true
            },
            {
                label: 'Recuperados',
                data: data.yRecovered,
                backgroundColor: ['rgba(11, 156, 49, 0.5)'],
                borderColor: ['rgba(11, 156, 49, 1)'],
                borderWidth: 2,
                lineTension: 0.5,
                fill: true
            },
            {
                label: 'Positivos',
                data: data.yKnown,
                backgroundColor: ['rgba(246, 36, 89, 0.5)'],
                borderColor: ['rgba(246, 36, 89, 1)'],
                borderWidth: 2,
                lineTension: 0.5,
                fill: true
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
