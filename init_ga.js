function mensaje(){
    alert("Hola mundo");
}

function calcularImpuesto(valor){ 
    var iva = valor * 15 / 100; 
    var total = valor + iva; 
    alert (total);
    return total;
}
/*comentario
calcularImpuesto(100);*/

var txtvalor = document.getElementById('txtvalor');
var btnAceptar = document.getElementById('btnAceptar');
var divresultado  = document.getElementById('divresultado')
btnAceptar.onclick=function(){
    var valor = txtvalor.value;
    if(valor === ""){
        valor = 0;
    }else{
        valor = valor*1;
    }
    var resultado=calcularImpuesto(valor);
    divresultado.innerHTML =resultado;
}
