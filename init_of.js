
function mensaje(){
    alert("SapO");
}
/* 
-CamelCase
-Pascal
-Kamba
 */
function calcularImpuesto(valor){
    var iva =  valor * 15 / 100;
    var total = valor + iva;
    
    return total;
}
/*Comentario */
//calcularImpuesto(100);
var txtValor = document.getElementById("txtValor");
var btnAceptar = document.getElementById("btnAceptar");
var divResultado =  document.getElementById("divResultado");
var imgLogo =  document.getElementById("imgLogo");
btnAceptar.onclick =  function (){

    var valor = txtValor.value;
    if(valor === ""){
        valor = 0;
    }else{
        valor = valor*1;
    }
    var resultado = calcularImpuesto(valor);
    if(resultado > 100){
        divResultado.className = "exito";
        imgLogo.src = "https://upload.wikimedia.org/wikipedia/commons/b/b4/Escudo_BSC.png" ;
    }else{
        divResultado.className = "error";
    }
    divResultado.innerHTML = resultado+ " ";
}
//  Defiinicion de tipo json
/*var estudiantes =[
 {cedula:"0750919227",nombre:"Fernando",apellido: "Ochoa"},//0
 {cedula:"0750919228",nombre:"Jose",apellido: "Cobeña"},//1
 {cedula:"0750929228",nombre:"Angel",apellido: "Diaz"},//2

];*/
//console.log(estudiantes[2].apellido);
/*for(i=0; i<estudiantes.length; i++ ){
    console.log(estudiantes[i].nombre, estudiantes[i].apellido);
}*/
var tblEstudiante = document.getElementById("tblEstudiante");

fetch("estudiantes_of.json").then(
    (estudiantes)=>{
        if(estudiantes.status == 200){
            return estudiantes.json();
        }

    }
).then( 
    (estudiantes) => {
    for(i=0; i<estudiantes.length; i++ ){
        var row =  tblEstudiante.insertRow(i+1);
        var colCedula = row.insertCell(0);
        colCedula.innerHTML = estudiantes[i].cedula;
        var colNombre = row.insertCell(1);
        colNombre.innerHTML = estudiantes[i].nombre+" "+ estudiantes[i].apellido;
        }
}
)
/*for(i=0; i<estudiantes.length; i++ ){
    var row =  tblEstudiante.insertRow(i+1);
    var colCedula = row.insertCell(0);
    colCedula.innerHTML = estudiantes[i].cedula;
    var colNombre = row.insertCell(1);
    colNombre.innerHTML = estudiantes[i].nombre+" "+ estudiantes[i].apellido;
}*/
var estudiante = {
    cedula: "0750919227",
    nombre: "Fernando",
    apellido: "Ochoa",
    edad: 38,
    sueldo: 666.6
}
console.log(estudiante.cedula);
