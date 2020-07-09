positiveCasesTotal();

async function positiveCasesTotal() {
    const positive = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const positiveLast = columns[5];
        
        positive.push(positiveLast);
    });
    
    const positiveLastRow = positive[positive.length-1];

    document.getElementById("positive-total").innerHTML = positiveLastRow;
}

positiveCasesNew();

async function positiveCasesNew() {
    const positive = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const positiveLast = columns[8];
        
        positive.push(positiveLast);
    });
    
    const positiveLastRow = positive[positive.length-1];

    document.getElementById("positive-new").innerHTML = positiveLastRow;
}

incidency();

async function incidency() {
    const incidency = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const incidencyLast = columns[9];
        
        incidency.push(incidencyLast);
    });
    
    const incidencyLastRow = incidency[incidency.length-1];

    document.getElementById("incidency").innerHTML = incidencyLastRow;
}

// casesByGender();

// function casesByGender() {
//     const ctx = document.getElementById('cases-by-gender').getContext('2d');
//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         title: {
//             display: true,
//             text: 'Casos positivos - por sexo',
//             fontSize: 18,
//         },
//         animation: {
//             animateScale: true,
//             animateRotate: true,
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'average',
//             intersect: false,
//         },
//         legend: {
//             display: true,
//             position: 'bottom',
//         },
//     };
//     const graph = {
//         labels: [
//             'Feminino',
//             'Masculino',
//         ],
//         datasets: [
//             {
//                 data: [
//                     550,
//                     562,
//                 ],
//                 backgroundColor: [
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                 ],
//                 borderColor: [
//                     'rgba(155, 89, 182,1)',
//                     'rgba(52, 152, 219,1)',
//                 ],
//             }
//         ],
//     };
//     const myChart = new Chart(ctx, {
//         options: options,
//         type: 'doughnut',
//         data: graph,
//     });
// }







// casesByAge();

// function casesByAge() {
//     const ctx = document.getElementById('cases-by-age').getContext('2d');
//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         title: {
//             display: true,
//             text: 'Casos positivos - por faixa etária',
//             fontSize: 18,
//         },
//         scales: {
//             yAxes: [{
//                 // id: 'left-y-axis',
//                 // type: 'linear',
//                 display: true,
//                 gridLines: {
//                     display: true,
//                     color: "rgba(255, 255, 255, 0.05)"
//                 },
//                 stacked: true,
//                 // position: 'left',
//             },
//             {
//                 // id: 'right-y-axis',
//                 // type: 'linear',
//                 display: false,
//                 gridLines: {
//                     display: true,
//                     color: "rgba(255, 255, 255, 0.05)"
//                 },
//                 stacked: true,
//                 // position: 'right',
//             }],
//             xAxes: [{
//                 display: true,
//                 gridLines: {
//                     display: true,
//                     color: ['rgba(255, 255, 255, 0.5)']
//                 },
//                 stacked: true,
//                 position: 'right',
//             }]
//         },
//         animation: {
//             animateScale: true,
//             animateRotate: true,
//         },
//         tooltips: {
//             mode: 'index',
//             intersect: false,
//         },
//         hover: {
//             mode: 'average',
//             intersect: false,
//         },
//         legend: {
//             display: true,
//             position: 'bottom',
//         },
//     };
//     const graph = {
//         labels: [
//             '0 a 10',
//             '11 a 20',
//             '21 a 30',
//             '31 a 40',
//             '41 a 50',
//             '51 a 60',
//             '61 a 70',
//             '71 a 80',
//             '81 a 90',
//             '91 a 100',
//         ],
//         datasets: [
//             {
//                 label: 'Feminino',
//                 data: [
//                     -5,
//                     -17,
//                     -99,
//                     -168,
//                     -105,
//                     -67,
//                     -56,
//                     -20,
//                     -11,
//                     -2,
//                 ],
//                 backgroundColor: [
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                     'rgba(155, 89, 182,0.5)',
//                 ],
//                 borderColor: [
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                     'rgba(155, 89, 182,1)',
//                 ],
//                 // yAxisID: 'left-y-axis',
//             },
//             {
//                 label: 'Masculino',
//                 data: [
//                     14,
//                     16,
//                     64,
//                     164,
//                     132,
//                     87,
//                     49,
//                     25,
//                     10,
//                     1,
//                 ],
//                 backgroundColor: [
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                     'rgba(52, 152, 219,0.5)',
//                 ],
//                 borderColor: [
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                     'rgba(52, 152, 219,1)',
//                 ],
//                 // yAxisID: 'right-y-axis',
//             },
//         ],
//     };
//     const myChart = new Chart(ctx, {
//         options: options,
//         type: 'horizontalBar',
//         data: graph,
//     });
// }
