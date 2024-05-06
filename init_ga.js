function mensaje(){
    alert("Hola mundo");
}

function calcularImpuesto(valor){ 
    var iva = valor * 15 / 100; 
    var total = valor + iva; 
    alert (total);
    return total;
}
/*comentario
calcularImpuesto(100);*/

var txtvalor = document.getElementById('txtvalor');
var btnAceptar = document.getElementById('btnAceptar');
var divresultado  = document.getElementById('divresultado');
var imglogo  = document.getElementById('imglogo');
btnAceptar.onclick=function(){
    var valor = txtvalor.value;
    if(valor === ""){
        valor = 0;
    }else{
        valor = valor*1;
    }
    var resultado=calcularImpuesto(valor);

    if(resultado>100){
        divresultado.className= "exito";
         
    }else{
        divresultado.className= "error";
    }
    divresultado.innerHTML =resultado;
}
//Definicion de tipo json
/*var estudiantes =   [
    {cedula:'1804905998', Nombre:'Anthony', Apellido:'Gutierrez'},
    {cedula:'1820156487', Nombre:'Kevin', Apellido:'Castillo'},
    {cedula:'1814257889', Nombre:'oChoa', Apellido:'fernandez'},
];
   
//console.log(estudiantes[0].Apellido);

for (i=0; i<estudiantes.length; i++){
    console.log(estudiantes[i].Nombre, estudiantes[i].Apellido)
    
    
}*/
var tbestudiante = document.getElementById('tbestudiante');
fetch("estudiantes_ga.json").then(
    (estudiantes)=> {
        if(estudiantes.status == 200){
            return estudiantes.json();
        }
    }
).then(
    (estudiantes) => {
        for (i=0; i<estudiantes.length; i++){
            var row = tbestudiante.insertRow(i+1);
            var colcedula = row.insertCell(0);
            colcedula.innerHTML = estudiantes[i].cedula;
            var colnombre = row.insertCell(1);
            colnombre.innerHTML = estudiantes[i].Nombre+ ' ' +estudiantes[i].Apellido;
            }
    }
)


var estudiante = {
    cedula:'1804905998',
    Nombre:'Anthony',
    Apellido:'Gutierrez',
    edad: 19,
    sueldo: 15.0,
}
console.log(estudiante.cedula);
console.log(estudiante.Nombre);
console.log(estudiante.Apellido);