function mensaje(){
    alert ("Hola mundo");
}
/*CamelCase
Pascal
Kamba
*/

function calcularImpuesto (valor){
    var iva= valor*15/100;
    var total=valor+iva;
    return total;
}
//calcularImpuesto(100);
var txtValor = document.getElementById('txtValor');
var btnAceptar = document.getElementById('btnAceptar');
var divResultado = document.getElementById('divResultado');
var imgLogo = document.getElementById('ingLogo');

btnAceptar.onclick = function (){
    var valor= txtValor.value;
    if(valor===''){
        valor = 0;
    }else {
        valor = valor*1; 
    }
    var resultado= calcularImpuesto(valor);
    if(resultado >100){
        divResultado.className ="exito";
        imgLogo.src="https://upload.wikimedia.org/wikipedia/commons/a/a4/CR7-Logo-1.png";
    }else{
        divResultado.className = "error";
    }
    divResultado.innerHTML = resultado;
}

//Definicion de tipo json
/*var estudiantes =[
   // {cedula:'1804922225', nombre: 'Jonathan', apellido: 'Capuz'},//0
    //{cedula:'1805478965', nombre: 'Kevin', apellido: 'Castillo'},//1  
    //{cedula:'1804785245', nombre: 'Juan', apellido: 'Perez'}//2 
];*/
//console.log(estudiantes[2].apellido);
/*for(i=0; i<estudiantes.length;i++){
    console.log(estudiantes[i].nombre , estudiantes[i].apellido);
}*/

var tblEstudiante = document.getElementById('tblEstudiante');

fetch("estudiantes_JCapuz.json").then(
    (estudiantes)=>{
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
            colNombre.innerHTML = estudiantes[i].nombre+' '+estudiantes[i].apellido;
        }
    }
)

var estudiante = {    
    cedula: '1804922225', 
    nombre: 'Jonathan',
    apellido: 'Capuz',    
    edad: 38,
    sueldo: 655.5
}
console.log(estudiante.cedula);


