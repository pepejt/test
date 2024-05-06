
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


//Definicion tipo json
/*var estudiantes = [
{cedula:"1804497343",nombre:"Alan",apellido:"Lozada"},
{cedula:"1803728152",nombre:"Kevin",apellido:"Castillo"},
{cedula:"1804497335",nombre:"Juan",apellido:"Perez"}
];*/

//console.log(estudiantes[2].apellido);
/*for(i=0; i<estudiantes.length;i++){
    console.log(estudiantes[i].nombre, estudiantes[i].apellido);
}*/

var tblEstudiante = document.getElementById("tblEstudiante");

fetch("estudiantes_al.json").then(
    (estudiantes)=>{
        if (estudiantes.status == 200){
            return estudiantes.json();

        } 
    }
).then(
    (estudiantes)=>{
        
        for(i=0; i<estudiantes.length; i++){
            var row = tblEstudiante.insertRow(i+1);
            var colCedula = row.insertCell(0);
            colCedula.innerHTML = estudiantes[i].cedula;
            var colNombre = row.insertCell(1);
            colNombre.innerHTML = estudiantes[i].nombre + " " + estudiantes[i].apellido;
        }    
    }
)



var estudiante = {
    cedula: "1804497343",
    nombre: "Alan",
    apellido:"Lozada",
    edad: 22,
    suldo: 180
}

console.log(estudiante.cedula);