occupancyRate();
                
function occupancyRate() {
    const ctx = document.getElementById('occupancy-rate').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Taxa de ocupação de leitos (%)',
            fontSize: 18,
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
            intersect: false
        },
        legend: {
            display: true,
            position: 'bottom',
        },
        scale: {
            ticks: {
                backdropColor: 'rgba(255, 255, 255, 0)',
                suggestedMax: 100,
            },
        },
    };
    const graph = {
        labels: [
            'UTI Covid-19',
            'UTI Geral',
            'UTI Hospital Municipal',
            'Enfermaria Covid-19',
            'Enfermaria Geral',
            'Enfermaria Hospital Municipal',
        ],
        datasets: [
            {
                data: [
                    72.85,
                    30.90,
                    63.68,
                    8.06,
                    71.42,
                    85.00,
                ],
                backgroundColor: [
                    'rgba(192, 57, 43,0.5)',
                    'rgba(243, 156, 18,0.5)',
                    'rgba(230, 126, 34,0.5)',
                    'rgba(39, 174, 96,0.5)',
                    'rgba(26, 188, 156,0.5)',
                    'rgba(46, 204, 113,0.5)',
                ],
                borderColor: [
                    'rgba(192, 57, 43,1.0)',
                    'rgba(243, 156, 18,1.0)',
                    'rgba(230, 126, 34,1.0)',
                    'rgba(39, 174, 96,1.0)',
                    'rgba(26, 188, 156,1.0)',
                    'rgba(46, 204, 113,1.0)',
                ],
            }
        ],
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'polarArea',
        data: graph,
    });
}
