function mensaje(){
    alert("Hola Mundo");
}
/*Camelcase
Pascal
Kamba
*/
function calcularImpuesto(valor){
    var iva =valor * 15 / 100;
    var total = valor + iva;
    return total;
}
/*comentaio*/
//calcularImpuesto(100);

var txtValor = document.getElementById('txtValor');
var btnAceptar = document.getElementById('btnAceptar');
var divResultado = document.getElementById('divResultado');
var imgLogo = document.getElementById('imgLogo');

btnAceptar.onclick = function() {
    var valor = txtValor.value;    
    if (valor===''){
        valor = 0;
    }else{     
        valor = valor *1;
    }                
    var resultado =calcularImpuesto(valor);
    if (resultado> 100) {
    divResultado.className = "exito";
    imgLogo.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQI12NO52E1XHnIIHs1OTxiqwIPx0PpZNFQMA&s"
    }else{ 
        divResultado.className = "error";     
}
divResultado.innerHTML =  resultado;
}

//Definicion de tipo json
/*var estudiantes = [
    {cedula:'050314354',nombre:'Kevin',apellido:'Castillo'},//0
    {cedula:'0401196969',nombre:'Juan',apellido:'Perez'},//1
    {cedula:'0502486004',nombre:'David',apellido:'Chicaiza'},//2    
];*/
/*console.log(estudiantes[2].apellido);
for(i=0; i<estudiantes.length;i++){
    console.log(estudiantes[i].nombre, estudiantes[i].apellido); 
}*/
var tblEstudiante = document.getElementById('tblEstudiante');

fetch("estudiantes_jt.json").then(
    (estudiantes)=>{
        if(estudiantes.status == 200){
            return estudiantes.json();
        }     
    }
).then(
    (estudiantes)=>{
        for(i=0; i<estudiantes.length;i++){
            var row = tblEstudiante.insertRow(i+1);
            var colCedula = row.insertCell(0); 
            colCedula.innerHTML = estudiantes[i].cedula; 
            var colNombre = row.insertCell(1);
            colNombre.innerHTML = estudiantes[i].nombre+' '+estudiantes[i].apellido;
         }
    }   
)



var estudiante = {
    cedula:'0503143554',
    nombre: 'Juan',
    apellido: 'Perez', 
    edad: 25,
    sueldo: 666.6,
}
console.log(estudiante.cedula);
