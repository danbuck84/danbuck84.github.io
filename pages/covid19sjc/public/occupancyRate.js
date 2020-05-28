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
            'Enfermaria Covid-19',
            'Enfermaria Geral',
        ],
        datasets: [
            {
                data: [
                    53.22,
                    20.00,
                    45.66,
                    5.58,
                ],
                backgroundColor: [
                    'rgba(46, 204, 113,0.5)',
                    'rgba(52, 152, 219,0.5)',
                    'rgba(155, 89, 182,0.5)',
                    'rgba(52, 73, 94,0.5)',
                ],
                borderColor: [
                    'rgba(46, 204, 113,1.0)',
                    'rgba(52, 152, 219,1.0)',
                    'rgba(155, 89, 182,1.0)',
                    'rgba(52, 73, 94,1.0)',
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
