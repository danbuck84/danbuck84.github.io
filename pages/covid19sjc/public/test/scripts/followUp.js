followUp();

async function followUp() {
    const fup = [];
    
    const response = await fetch('../assets/data.csv');
    const data = await response.text();
    
    const table = data.split('\n').slice(1);
    table.forEach(row => {
        const columns = row.split(',');
        const fupLast = columns[4];
        
        fup.push(fupLast);
    });
    
    const fupLastRow = fup[fup.length-1];

    document.getElementById("follow-up").innerHTML = fupLastRow;
}
