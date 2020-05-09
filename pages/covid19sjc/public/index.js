d3.csv('https://s3-us-west-2.amazonaws.com/s.cdpn.io/2814973/atp_wta.csv')
.then(makeChart);

function makeChart(players) {
    const playerLabels = players.map(function(d) {return d.Name});
    const weeksData = players.map(function(d) {return d.Weeks});
  
    const chart = new Chart('chart', {
      type: 'horizontalBar',
      data: {
        labels: playerLabels,
        datasets: [
          {
            data: weeksData
          }
        ]
      }
    });
}
