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
                    73.3, // icu covid
                    36.7, // icu general
                    59.7, // icu hm
                    69.8,  // ward covid
                    10.2, // ward general
                    86.4, // ward hm
                ],
                backgroundColor: [
                    'rgba(192, 57, 43,0.5)',  // icu covid
                    'rgba(243, 156, 18,0.5)', // icu general
                    'rgba(39, 174, 96,0.5)',  // icu hm
                    'rgba(231, 76, 60,0.5)',  // ward covid
                    'rgba(241, 196, 15,0.5)', // ward general
                    'rgba(46, 204, 113,0.5)', // ward hm
                ],
                borderColor: [
                    'rgba(192, 57, 43,1.0)',  // icu covid
                    'rgba(243, 156, 18,1.0)', // icu general
                    'rgba(39, 174, 96,1.0)',  // icu hm
                    'rgba(231, 76, 60,1.0)',  // ward covid
                    'rgba(241, 196, 15,1.0)', // ward general
                    'rgba(46, 204, 113,1.0)', // ward hm
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
