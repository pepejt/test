
function mensaje(){
    alert("Hola sapo");
}

function calcularImpuesto(valor){
    var iva = valor * 15 / 100;
    var total = valor + iva;
    return total;
}
    /*
    calcularImpuesto(100);
    */

var txtValor = document.getElementById('txtValor');
var btnAceptar = document.getElementById('btnAceptar');
var divResultado = document.getElementById('divResultado');
var imgLogo = document.getElementById('imgLogo');

btnAceptar.onclick = function(){
    var valor = txtValor.value;
    if (valor === ''){
        valor = 0;
    }else{
        valor = valor * 1;
    }
    var resultado = calcularImpuesto(valor)
    if (resultado > 100){
        divResultado.className = "excito";
        imgLogo.src = "https://i.ytimg.com/vi/dtV0Z0ypW4I/maxresdefault.jpg"
    }else{
        divResultado.className = "error";
    }
    divResultado.innerHTML = resultado;
}