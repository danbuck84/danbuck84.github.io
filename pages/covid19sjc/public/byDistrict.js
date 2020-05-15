byDistrict();
                
function byDistrict() {
    const ctx = document.getElementById('by-district').getContext('2d');
    const options = {
        scales: {
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)'],
                },
                ticks: {
                    beginAtZero: true,
                },
            }],
            yAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)",
                }
            }],
        },
        legend: {
            display: false,
            position: 'bottom',
            align: 'end',
            fullWidth: false,
        },
        responsive: true,
        maintainAspectRatio: false,
        tooltips: {
            mode: 'index',
            intersect: false,
        },
        hover: {
            mode: 'average',
            intersect: false
        },
    };
    const graph = {
        labels: [
            // 'Demais Bairros',
            'Jd Aquarius',
            'Urbanova',
            'Bq Eucaliptos',
            'Pq Industrial',
            'Centro',
            'Jd Satelite',
            'Vl Adyana',
            'Jd Morumbi',
            'Monte Castelo',
        ],
        datasets: [
            {
                data: [
                    // '249'
                    '32',
                    '26',
                    '18',
                    '15',
                    '14',
                    '12',
                    '12',
                    '10',
                    '10',
                ],
                backgroundColor: [
                    // 'rgba(26, 188, 156,0.5)',
                    'rgba(46, 204, 113,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(52, 73, 94,0.5)',
                    'rgba(22, 160, 133,0.5)',
                    'rgba(39, 174, 96,0.5)',
                    'rrgba(41, 128, 185,0.5)',
                    'rgba(142, 68, 173,0.5)',
                    'rgba(44, 62, 80,0.5)',
                ],
                borderColor: [
                    // 'rgba(26, 188, 156,1.0)',
                    'rgba(46, 204, 113,1.0)',
                    'rgba(52, 152, 219,1.0)',
                    'rgba(155, 89, 182,1.0)',
                    'rgba(52, 73, 94,1.0)',
                    'rgba(22, 160, 133,1.0)',
                    'rgba(39, 174, 96,1.0)',
                    'rrgba(41, 128, 185,1.0)',
                    'rgba(142, 68, 173,1.0)',
                    'rgba(44, 62, 80,1.0)',
                ],
            }]
        };
        const myChart = new Chart(ctx, {
        options: options,
        type: 'horizontalBar',
        data: graph,
    });
}
