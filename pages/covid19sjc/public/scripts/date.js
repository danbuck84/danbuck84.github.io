function date() { 
    var today = new Date();
    
    var vhour = today.getHours();
    var vminute = today.getMinutes();
    var vsecond = today.getSeconds();
    
    var vday = today.getDate();
    var vmonth = today.getMonth() + 1;
    var vyear = today.getFullYear();
    
    if (vday < 10){ vday = '0' + vday;}
    if (vmonth < 10){ vmonth = '0' + vmonth;}
    if (vhour < 10){ vhour = '0' + vhour;}
    if (vminute < 10){ vminute = '0' + vminute;}
    if (vsecond < 10){ vsecond = '0' + vsecond;}
    
    dateFormat = vday + '/' + vmonth + '/' + vyear;
    // hourFormat = vhour + ':' + vminute + ':' + vsecond;
    
    document.getElementById('date').innerHTML = dateFormat;
    // document.getElementById('hour').innerHTML = hourFormat;
    
    setTimeout('date()',1000);
 }
