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

//Definicion de tipo Json
/*var estudiantes = [  
    {cedula: '1850631688',nombre: 'Andres', apellido:'Lopez'}, 
    {cedula: '1950465478', nombre: 'Kevin', apellido:'Castillo'},
    {cedula: '1850631498', nombre: 'Juan', apellido: 'Perez'}
] 

//console.log(estudiantes [0].apellido);
for(i=0; i<estudiantes.length; i++){
    console.log(estudiantes[i].nombre + ' ' +estudiantes[i].apellido);
}*/

var tblEstudiante = document.getElementById('tblEstudiante');

fetch("estudiantesALC.json").then(
    (estudiantes)=>{
        if(estudiantes.status ==200){
        return estudiantes.json();    
    }
    }
).then(
    (estudiantes)=>{
        for(i=0; i<estudiantes.length; i++){
            var row = tblEstudiante.insertRow(i+1);
            var colcedula1 = row.insertCell(0);
            var colcedula2 = row.insertCell(1);
            colcedula1.innerHTML = estudiantes[i].cedula;
            colcedula2.innerHTML = estudiantes[i].nombre+'  '+estudiantes[i].apellido;
        }
    }
)
var estudiante = {
    id: '1850631688',
    nombre: 'Andres',
    apellido: 'Lopez',
    edad: 23,
    sueldo: 210.10 
}

console.log(estudiante.cedula);