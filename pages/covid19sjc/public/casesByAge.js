casesByAge();

function casesByAge() {
    const ctx = document.getElementById('cases-by-age').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
            text: 'Casos positivos - por faixa etária',
            fontSize: 18,
        },
        scales: {
            yAxes: [{
                // id: 'left-y-axis',
                // type: 'linear',
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)"
                },
                stacked: true,
                // position: 'left',
            },
            {
                // id: 'right-y-axis',
                // type: 'linear',
                display: false,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)"
                },
                stacked: true,
                // position: 'right',
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)']
                },
                stacked: true,
                position: 'right',
            }]
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'average',
            intersect: false,
        },
        legend: {
            display: true,
            position: 'bottom',
        },
    };
    const graph = {
        labels: [
            '0 a 10',
            '11 a 20',
            '21 a 30',
            '31 a 40',
            '41 a 50',
            '51 a 60',
            '61 a 70',
            '71 a 80',
            '81 a 90',
            '91 a 100',
        ],
        datasets: [
            {
                label: 'Feminino',
                data: [
                    -71,
                    -180,
                    -692,
                    -962,
                    -748,
                    -455,
                    -286,
                    -104,
                    -62,
                    -16,
                ],
                backgroundColor: [
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(155, 89, 182,0.5)',
                ],
                borderColor: [
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                    'rgba(155, 89, 182,1)',
                ],
                // yAxisID: 'left-y-axis',
            },
            {
                label: 'Masculino',
                data: [
                    81,
                    175,
                    598,
                    969,
                    773,
                    526,
                    266,
                    126,
                    46,
                    6,
                ],
                backgroundColor: [
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(52, 152, 219,0.5)',
                ],
                borderColor: [
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                    'rgba(52, 152, 219,1)',
                ],
                // yAxisID: 'right-y-axis',
            },
        ],
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'horizontalBar',
        data: graph,
    });
}
