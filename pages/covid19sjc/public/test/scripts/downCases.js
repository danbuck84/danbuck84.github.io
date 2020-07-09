downCasesTotal();

async function downCasesTotal() {
    const down = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const downTotalLast = columns[10];
        
        down.push(downTotalLast);
    });
    
    const downTotalLastRow = down[down.length-1];

    document.getElementById("down-total").innerHTML = downTotalLastRow;
}

downCasesNew();

async function downCasesNew() {
    const down = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const downNewLast = columns[11];
        
        down.push(downNewLast);
    });
    
    const downNewLastRow = down[down.length-1];

    document.getElementById("down-new").innerHTML = downNewLastRow;
}

lethality();

async function lethality() {
    const lethality = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const lethalityLast = columns[12];
        
        lethality.push(lethalityLast);
    });
    
    const lethalityLastRow = lethality[lethality.length-1];

    document.getElementById("lethality").innerHTML = lethalityLastRow;
}

mortality();

async function mortality() {
    const mortality = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const mortalityLast = columns[13];
        
        mortality.push(mortalityLast);
    });
    
    const mortalityLastRow = mortality[mortality.length-1];

    document.getElementById("mortality").innerHTML = mortalityLastRow;
}



// confirmedDown();

// function confirmedDown() {
//     const ctx = document.getElementById('confirmed-down').getContext('2d');
//     const options = {
//         responsive: true,
//         maintainAspectRatio: false,
//         title: {
//             display: true,
//             text: 'Óbitos confirmados - por faixa etária',
//             fontSize: 18,
//         },
//         scales: {
//             xAxes: [{
//                 stacked: true,
//                 display: false,
//             }],
//             yAxes: [{
//                 stacked: true,
//                 display: true,
//                 gridLines: {
//                     display: true,
//                     color: "rgba(255, 255, 255, 0.05)"
//                 },
//             }],
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
//                     1,
//                     2,
//                     2,
//                     1,
//                     4,
//                     2,
//                     3,
//                     0,
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
//                 ],
//             },
//             {
//                 label: 'Masculino',
//                     data: [
//                         0,
//                         3,
//                         2,
//                         3,
//                         8,
//                         9,
//                         4,
//                         1,
//                     ],
//                     backgroundColor: [
//                         'rgba(52, 152, 219,0.5)',
//                         'rgba(52, 152, 219,0.5)',
//                         'rgba(52, 152, 219,0.5)',
//                         'rgba(52, 152, 219,0.5)',
//                         'rgba(52, 152, 219,0.5)',
//                         'rgba(52, 152, 219,0.5)',
//                         'rgba(52, 152, 219,0.5)',
//                         'rgba(52, 152, 219,0.5)',
//                     ],
//                     borderColor: [
//                         'rgba(52, 152, 219,1)',
//                         'rgba(52, 152, 219,1)',
//                         'rgba(52, 152, 219,1)',
//                         'rgba(52, 152, 219,1)',
//                         'rgba(52, 152, 219,1)',
//                         'rgba(52, 152, 219,1)',
//                         'rgba(52, 152, 219,1)',
//                         'rgba(52, 152, 219,1)',
//                     ],
//             },
//         ],
//     };
//     const myChart = new Chart(ctx, {
//         options: options,
//         type: 'horizontalBar',
//         data: graph,
//     });
// }
