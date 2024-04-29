
function mensaje(){
    alert("Hola Mundo");
}

function calcularImpuesto(valor){
    var iva = valor * 15 / 100;
    var total = valor + iva;
    alert(total);
}
calcularImpuesto(100);