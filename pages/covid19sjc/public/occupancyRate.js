occupancyRate();
                
async function occupancyRate() {
    const ctx = document.getElementById('occupancy-rate').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: false,
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
                    68.8, // icu covid
                    35.5, // icu general
                    70.8, // icu hm
                    56.6,  // ward covid
                    9.9, // ward general
                    58.8, // ward hm
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
