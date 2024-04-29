function mensaje(){
    alert("Hola inge");
}
/*CamelCase-Pascal-kamba*/
function calcularImpuesto(valor){
    var iva = valor * 15 / 100;
    var total = valor + iva;
    return total;
}

//calcularImpuesto(100);

var txtValor = document.getElementById("txtValor");
var btnAceptar = document.getElementById("btnAceptar");
var divResultado = document.getElementById("divResultado");

btnAceptar.onclick = function(){
    var valor = txtValor.value;
    if(valor === ""){
        valor = 0;
    }else{
        valor = valor * 1;
    }   
    
    var resultado = calcularImpuesto(valor); 
    divResultado.innerHTML = resultado;
       

}
