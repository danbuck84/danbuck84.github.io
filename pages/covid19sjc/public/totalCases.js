totalCases();

function totalCases() {
    const ctx = document.getElementById('total-cases').getContext('2d');
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Total de casos',
            fontSize: 18,
        },
        animation: {
            animateScale: true,
            animateRotate: true,
        },
        tooltips: {
            mode: 'index',
            intersect: false
        },
        hover: {
            mode: 'average',
            intersect: false
        },
        scales: {
            yAxes: [{
                type: 'linear',
                position: 'right',
                display: true,
                gridLines: {
                    display: true,
                    color: "rgba(255, 255, 255, 0.05)"
                },
                stacked: false,
            }],
            xAxes: [{
                display: true,
                gridLines: {
                    display: true,
                    color: ['rgba(255, 255, 255, 0.5)']
                },
                stacked: false,
            }]
        }
    };
    const graph = {
        labels: [
            '17/03/2020',
            '18/03/2020',
            '19/03/2020',
            '20/03/2020',
            '21/03/2020',
            '22/03/2020',
            '23/03/2020',
            '24/03/2020',
            '25/03/2020',
            '26/03/2020',
            '27/03/2020',
            '28/03/2020',
            '29/03/2020',
            '30/03/2020',
            '31/03/2020',
            '01/04/2020',
            '02/04/2020',
            '03/04/2020',
            '04/04/2020',
            '05/04/2020',
            '06/04/2020',
            '07/04/2020',
            '08/04/2020',
            '09/04/2020',
            '10/04/2020',
            '11/04/2020',
            '12/04/2020',
            '13/04/2020',
            '14/04/2020',
            '15/04/2020',
            '16/04/2020',
            '17/04/2020',
            '18/04/2020',
            '19/04/2020',
            '20/04/2020',
            '21/04/2020',
            '22/04/2020',
            '23/04/2020',
            '24/04/2020',
            '25/04/2020',
            '26/04/2020',
            '27/04/2020',
            '28/04/2020',
            '29/04/2020',
            '30/04/2020',
            '01/05/2020',
            '02/05/2020',
            '03/05/2020',
            '04/05/2020',
            '05/05/2020',
            '06/05/2020',
            '07/05/2020',
            '08/05/2020',
            '09/05/2020',
            '10/05/2020',
            '11/05/2020',
            '12/05/2020',
            '13/05/2020',
            '14/05/2020',
            '15/05/2020',
            '16/05/2020',
            '17/05/2020',
            '18/05/2020',
            '19/05/2020',
            '20/05/2020',
            '21/05/2020',
            '22/05/2020',
            '23/05/2020',
            '24/05/2020',
            '25/05/2020',
            '26/05/2020',
            '27/05/2020',
            '28/05/2020',
            '29/05/2020',
            '30/05/2020',
            '01/06/2020',
            '02/06/2020',
            '03/06/2020',
            '04/06/2020',
            '05/06/2020',
            '06/06/2020',
            '07/06/2020',
            '08/06/2020',
            '09/06/2020',
            '10/06/2020',
            '11/06/2020',
            '12/06/2020',
            '13/06/2020',
            '14/06/2020',
            '15/06/2020',
            '16/06/2020',
            '17/06/2020',
            '18/06/2020',
            '19/06/2020',
            '20/06/2020',
            '21/06/2020',
            '22/06/2020',
            '23/06/2020',
            '24/06/2020',
            '25/06/2020',
            '26/06/2020',
            '27/06/2020',
            '28/06/2020',
            '29/06/2020',
            '30/06/2020',
            '01/07/2020',
            '02/07/2020',
        ],
        datasets: [
            {
                label: 'Óbitos',
                borderColor: ['rgba(0, 0, 0, 1)'],
                backgroundColor: ['rgba(0, 0, 0, 0.5)'],
                borderWidth: 2,
                lineTension: 0.5,
                fill: true,
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    1,
                    2,
                    2,
                    2,
                    2,
                    2,
                    2,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    3,
                    4,
                    4,
                    6,
                    6,
                    6,
                    7,
                    7,
                    10,
                    10,
                    10,
                    11,
                    11,
                    11,
                    11,
                    14,
                    14,
                    14,
                    15,
                    16,
                    16,
                    16,
                    18,
                    18,
                    18,
                    19,
                    21,
                    21,
                    26,
                    26,
                    28,
                    29,
                    30,
                    30,
                    31,
                    31,
                    31,
                    31,
                    33,
                    34,
                    36,
                    37,
                    37,
                    40,
                    42,
                    45,
                    45,
                    46,
                    46,
                    51,
                    53,
                    55,
                    55,
                    58,
                    59,
                    59,
                    61,
                    64,
                    67,
                    67,
                    72,
                    75,
                    75,
                    81,
                    82,
                    84,
                    86,
                    87,
                    87,
                    87,
                    92,
                    93,
                    95,
                    99,
                ],
            },
            {
                label: 'Recuperados',
                borderColor: ['rgba(11, 156, 49, 1)'],
                backgroundColor: ['rgba(11, 156, 49, 0.5)'],
                borderWidth: 2,
                lineTension: 0.5,
                fill: true,
                data: [
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    0,
                    12,
                    12,
                    12,
                    15,
                    15,
                    16,
                    16,
                    16,
                    18,
                    18,
                    34,
                    34,
                    34,
                    42,
                    59,
                    59,
                    59,
                    59,
                    59,
                    72,
                    85,
                    85,
                    85,
                    85,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    101,
                    147,
                    147,
                    156,
                    157,
                    171,
                    171,
                    171,
                    202,
                    207,
                    233,
                    245,
                    245,
                    245,
                    245,
                    302,
                    344,
                    387,
                    412,
                    427,
                    427,
                    427,
                    427,
                    437,
                    464,
                    493,
                    519,
                    519,
                    519,
                    564,
                    641,
                    701,
                    739,
                    739,
                    739,
                    758,
                    879,
                    961,
                    961,
                    961,
                    961,
                    961,
                    1004,
                    1139,
                    1227,
                    1271,
                    1321,
                    1321,
                    1321,
                    1360,
                    1369,
                    1455,
                    1501,
                    1578,
                    1578,
                    1578,
                    1767,
                    1912,
                    1997,
                    2089,
                ],
            },
            {
                label: 'Positivos',
                borderColor: ['rgba(246, 36, 89, 1)'],
                backgroundColor: ['rgba(246, 36, 89, 0.5)'],
                borderWidth: 2,
                lineTension: 0.5,
                fill: true,
                data: [
                    0,
                    2,
                    2,
                    2,
                    2,
                    5,
                    7,
                    7,
                    9,
                    11,
                    14,
                    18,
                    18,
                    32,
                    33,
                    36,
                    50,
                    58,
                    58,
                    58,
                    66,
                    78,
                    78,
                    78,
                    78,
                    85,
                    85,
                    100,
                    105,
                    108,
                    131,
                    136,
                    143,
                    143,
                    144,
                    144,
                    149,
                    161,
                    174,
                    176,
                    176,
                    187,
                    202,
                    215,
                    231,
                    231,
                    239,
                    239,
                    278,
                    300,
                    310,
                    331,
                    351,
                    363,
                    363,
                    367,
                    391,
                    408,
                    409,
                    421,
                    423,
                    423,
                    468,
                    509,
                    553,
                    578,
                    612,
                    616,
                    616,
                    616,
                    687,
                    727,
                    794,
                    842,
                    866,
                    890,
                    957,
                    1002,
                    1066,
                    1116,
                    1138,
                    1138,
                    1204,
                    1271,
                    1397,
                    1397,
                    1461,
                    1493,
                    1493,
                    1535,
                    1728,
                    1835,
                    1847,
                    2045,
                    2103,
                    2103,
                    2192,
                    2365,
                    2462,
                    2561,
                    2750,
                    2763,
                    2763,
                    2983,
                    3073,
                    3195,
                    3253,
                ],
            }
        ],
    };
    const myChart = new Chart(ctx, {
        options: options,
        type: 'line',
        data: graph,
    });
}
