function mensaje(){
    alert("Hola Mundo");
}
function calcularImpuesto(valor){
    var iva = valor * 15 / 100;
    var total = valor + iva;
    return total;
}
/*Comentarios*/
//calcularImpuesto(100);
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
    var resultado = calcularImpuesto(valor);
    if (resultado > 100){
        divResultado.className = 'exito';
        imgLogo.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeBCSMFRJAsa-GTcsTnr6G2aiojWSi0YsgOSpaiR1G3A&s"
    }else{
        divResultado.className = 'error';
    }
    divResultado.innerHTML = resultado;
}

//definicion de tipo json
/*var estudiantes = [
    {cedula:'1804765236',nombre:'Christian',apellido:'Zurita'},//0
    {cedula:'180475124',nombre:'Kevin',apellido:'Castillo'},//1
    {cedula:'18045453',nombre:'Juan',apellido:'Perez'}//2
]*/
//console.log(estudiantes[2].apellido);
/*for(i=0 ; i<estudiantes.length; i++ ){
    console.log(estudiantes[i].nombre , estudiantes[i].apellido)
}*/

var tblEstudiante =document.getElementById('tblEstudiante'); 

fetch("estudiantes_cz.json").then(
    (estudiantes)=>{
        if(estudiantes.status == 200 ){
            return estudiantes.json();
        }
    }
).then(
    (estudiantes)=>{
        for(i=0 ; i<estudiantes.length; i++){
            var row = tblEstudiante.insertRow(i+1);
            var colCedula = row.insertCell(0);
            colCedula.innerHTML = estudiantes[i].cedula;
            var colNombre = row.insertCell(1);
            colNombre.innerHTML = estudiantes[i].nombre+' '+estudiantes[i].apellido;
        }
    }

)

var estudiante = {
    cedula:'1804765236',
    nombre:'Chirstian',
    apellido:'Zurita',
    edad: 24,
    sueldo: 110.10
}
console.log(estudiante.cedula);




