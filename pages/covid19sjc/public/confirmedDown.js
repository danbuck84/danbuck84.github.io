confirmedDown();

function confirmedDown() {
    const ctx = document.getElementById('confirmed-down').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Óbitos confirmados - por faixa etária',
            fontSize: 18,
        },
        scales: {
            xAxes: [{
                stacked: true,
                display: false,
            }],
            yAxes: [{
                stacked: true,
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)"
                },
            }],
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
                    1,
                    3,
                    2,
                    2,
                    8,
                    4,
                    6,
                    2,
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
                ],
            },
            {
                label: 'Masculino',
                    data: [
                        0,
                        5,
                        3,
                        6,
                        18,
                        14,
                        14,
                        1,
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
                    ],
            },
        ],
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'horizontalBar',
        data: graph,
    });
}
