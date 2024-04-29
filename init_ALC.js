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
var imgLogo = document.getElementById("imgLogo");

btnAceptar.onclick = function(){
    var valor = txtValor.value;
    if(valor === ""){
        valor = 0;
    }else{
        valor = valor * 1;
    }   
    
    var resultado = calcularImpuesto(valor); 
    if (resultado > 100){
        divResultado.className= "exito";
        imgLogo.src = "https://i.pinimg.com/564x/2b/64/b7/2b64b7e80396146f4e1a9865e234ee36.jpg"

    }else{
        divResultado.className= "error";
    }
    divResultado.innerHTML = resultado;


}
