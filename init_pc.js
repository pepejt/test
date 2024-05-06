
//definicion tipo json
/*var estudiantes= [
    {cedula:'1805152111',nombre:'Paul',apellido:'Capuz'},//0
    {cedula:'1802232111',nombre:'Kevin',apellido:'Castillo'},//1
    {cedula:'1805134541',nombre:'Jonathan',apellido:'Capuz'}//2
];*/

//console.log(estudiantes[2].apellido); 
/*for(i=0; i<estudiantes.length; i++){
console.log(estudiantes[i].nombre  , estudiantes[i].apellido);
}*/

var tblEstudiante= document.getElementById('tblEstudiante');
fetch("estudiantes_pc.json").then(
    (estudiantes)=>{
        if(estudiantes.status==200){
            return estudiantes.json();
        
        }

    }
    ).then(
        (estudiantes)=>{
            for(i=0; i<estudiantes.length;i++){
                var row=tblEstudiante.insertRow(i+1);
                var colcedula= row.insertCell(0);
                colcedula.innerHTML= estudiantes[i].cedula;
                var colnombre= row.insertCell(1);
                colnombre.innerHTML= estudiantes[i].nombre+' '   +   estudiantes[i].apellido;
            }
        }
    )



var estudiante={
    cedula:'1805152111',
    nombre:'Paul',
    apellido:'Capuz',
    edad:26
}   
console.log(estudiante.cedula);