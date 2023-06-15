//Funcion de inicio
function login(){
var user,password

user = document.getElementById("usuario").value;
password = document.getElementById("contrasena").value;

if (user > "1.length" && password >"1.length")
{window.location="proyecto2.html";} 
else{alert("Datos incorrectos,mas caracteres de  USUARIO Y CONTRASEÑA")}
}

//Funcion de Ingreso
function ingreso(event) {
event.preventDefault(); 

var password = document.getElementById("contrasenaRegistro").value;
if (password.length > 0) {
    window.location = "proyecto3.html";
} else {alert("Datos incorrectos, ingrese una Contraseña");}
return false; 
}


//Funcion de las tareas aumentar y disminuir 
var inputTarea = document.getElementById("tarea");
var btn = document.getElementById("agregar");
var listado = document.getElementById("listado");
var cantidad = document.getElementById("cantidad");

//variable que lleva la cantidad de tareas
var total = 0;

btn.onclick = function() {
//controlamos si el campo esta vacio
if (inputTarea.value == "") {return;}

//tomamos el valor del campo
var elemento = inputTarea.value;

//creo un elemento li
var li = document.createElement("li");

//le agrego el texto al elemento
li.textContent = elemento;

//egrego el li al listado
listado.appendChild(li);

//incremento la cantidad de tareas
total++;
cantidad.innerHTML = total;

//Agregamos el boton eliminar a cada elemento del listado
var btnEliminar = document.createElement("span");
btnEliminar.textContent = "\u00d7";
li.appendChild(btnEliminar);

//Agregamos la funcionalidad que elimina del listado el elemento
btnEliminar.onclick = function() {
li.remove();
total--;
cantidad.innerHTML = total;
}

//limpiamos el campo
inputTarea.value = "";
}

//funcion para llamar al nombre
const formulario = document.querySelector("#formulario");

//crear el evento
formulario.addEventListener( "submit", validarFormulario )

//validar formulario
function validarFormulario(e){
e.preventDefault();
const nombre = document.querySelector("#nombre").value;
const respuesta = document.getElementById("respuesta");
respuesta.textContent = `Hola ${nombre}`
}
