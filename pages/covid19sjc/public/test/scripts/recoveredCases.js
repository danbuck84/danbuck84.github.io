recoveredCases();

async function recoveredCases() {
    const recovered = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const recoveredLast = columns[3];
        
        recovered.push(recoveredLast);
    });
    
    const recoveredLastRow = recovered[recovered.length-1];

    document.getElementById("recovered").innerHTML = recoveredLastRow;
}
