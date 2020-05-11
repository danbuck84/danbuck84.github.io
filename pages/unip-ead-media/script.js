$(".txtb input").on("focus", function() {
    $(this).addClass("focus");
});

$(".txtb input").on("blur", function() {
    if($(this).val() == "")
    $(this).removeClass("focus");
});

function CALC() {
    var prova = document.getElementById("prova").value;
    var pim = document.getElementById("pim").value;
    var ava = document.getElementById("ava").value;

    var nota = (7 * prova + 2 * pim + 1 * ava ) / 10.;
    var arred = parseFloat(nota.toFixed(2));
    
    event.preventDefault();
    
    document.getElementById("result").innerHTML = "Sua média final foi " + arred;
};
