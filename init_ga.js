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
var divresultado  = document.getElementById('divresultado');
var imglogo  = document.getElementById('imglogo');
btnAceptar.onclick=function(){
    var valor = txtvalor.value;
    if(valor === ""){
        valor = 0;
    }else{
        valor = valor*1;
    }
    var resultado=calcularImpuesto(valor);

    if(resultado>100){
        divresultado.className= "exito";
         
    }else{
        divresultado.className= "error";
    }
    divresultado.innerHTML =resultado;
}
