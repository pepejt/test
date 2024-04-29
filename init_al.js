
function mensaje(){
    alert("Hola Mundo");
}

function calcularImpuesto(valor){
    var iva = valor * 15 / 100;
    var total = valor + iva;
    return total;
}
//calcularImpuesto(100);

var txtVaalor = document.getElementById("txtValor");
var btnAceptar = document.getElementById("btnAceptar");
var divResultado = document.getElementById("divResultado");
var imgLOGO = document.getElementById("imgLOGO");

btnAceptar.onclick = function(){
    var valor = txtValor.value;
    if (valor === ""){
        valor = 0;
    }else{
        valor = valor * 1;
    }
    var resultado = calcularImpuesto(valor);
    if(resultado > 100){
        divResultado.className = "exito";
        imgLOGO.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/LEGO_logo.svg/768px-LEGO_logo.svg.png"
    }else{
        divResultado.className = "error";
    }
    divResultado.innerHTML = resultado;
}
