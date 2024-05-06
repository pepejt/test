
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

// Definicion de tipo json
/*var estudiantes = [
    {cedula: '1850392406', nombre: 'Jairo', apellido:'Teran'}, // 0
    {cedula: '0000000000', nombre: 'Kevin', apellido:'Castillo'}, // 1
    {cedula: '1111111111', nombre: 'Anthony', apellido:'Gutierrez'} // 2
];

// console.log(estudiantes[].apellido);
for(i=0; i<estudiantes.length; i++){
    console.log(estudiantes[i].nombre, estudiantes[i].apellido);
}*/

var tblEstudiante = document.getElementById('tblEstudiante');

fetch("estudiantes_tj.json").then(
    (estudiantes) => {
        if (estudiantes.status == 200){
            return estudiantes.json();
        }
    }
).then(
    (estudiantes) => {
        for(i=0; i<estudiantes.length; i++){
            var row = tblEstudiante.insertRow(i+1);
            var colCedula = row.insertCell(0);
            colCedula.innerHTML = estudiantes[i].cedula;
            var colNombre = row.insertCell(1);
            colNombre.innerHTML = estudiantes[i].nombre + ' ' + estudiantes[i].apellido;
            }
    }
)


var estudiante = {
    cedula: '1850392406',
    nombre: 'Jairo',
    apellido: 'Teran',
    edad: 19,
    sueldo: 1540.65
}

console.log(estudiante.cedula);