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
        ],
        datasets: [
            {
                data: [
                    // '249'
                    '27',
                    '20',
                    '15',
                    '15',
                    '15',
                    '12',
                    '10',
                ],
                backgroundColor: [
                    // 'rgba(233, 151, 115, 0.5)',
                    'rgba(255, 99, 132, 0.5)',
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(110, 220, 191, 0.5)',
                    'rgba(77, 155, 86, 0.5)',
                    'rgba(153, 102, 255, 0.5)',
                    'rgba(255, 206, 86, 0.5)',
                    'rgba(133, 19, 112, 0.5)',
                ],
                borderColor: [
                    // 'rgba(233, 151, 115, 1)',
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(110, 220, 191, 1)',
                    'rgba(77, 155, 86, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(133, 19, 112, 1)',
                ],
            }]
        };
        const myChart = new Chart(ctx, {
        options: options,
        type: 'horizontalBar',
        data: graph,
    });
}
