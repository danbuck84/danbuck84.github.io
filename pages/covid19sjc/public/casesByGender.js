casesByGender();

function casesByGender() {
    const ctx = document.getElementById('cases-by-gender').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Casos positivos - por sexo',
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
            intersect: false,
        },
        legend: {
            display: true,
            position: 'bottom',
        },
    };
    const graph = {
        labels: [
            'Feminino',
            'Masculino',
        ],
        datasets: [
            {
                data: [
                    682,
                    715,
                ],
                backgroundColor: [
                    'rgba(155, 89, 182,0.5)',
                    'rgba(52, 152, 219,0.5)',
                ],
                borderColor: [
                    'rgba(155, 89, 182,1)',
                    'rgba(52, 152, 219,1)',
                ],
            }
        ],
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'doughnut',
        data: graph,
    });
}