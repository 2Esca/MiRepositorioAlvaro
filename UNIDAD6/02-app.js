//vamos a cambiar el estilo del elemento con clase nvbar-brand
const brand = document.getElementsByClassName("navbar-brand");
console.log(brand);

//lo siguiente daria error ya que lo que devuelve getElementsByClassName es una coleccion
//brand.style.color = "red";
//habria que acceder al primer elemento como veremos en el siguiente ejemplo
brand[0].style.color = "red";

//seleccionamos el elemento a dentro de div.jumbotron
const btnJumbo = document.querySelector(".jumbotron a.btn-primary");
//le quitamos y le ponemos una clase
btnJumbo.classList.remove("btn-primary");
btnJumbo.classList.add("btn-danger");

//Seleccionamos todos los elementos a con clase btn-secondary dentro de elementos de la clase .col-md-6
const btnCols = document.querySelectorAll(".col-md-6 a.btn-secondary");

//si queremos hacer algo con todos los elementos de la coleccion habria que recorrerlos.
btnCols.forEach(element => {
    element.classList.remove("btn-secondary");
    element.classList.add("btn-danger");
});

const cols = document.querySelectorAll(".col-md-6");

//accedo al tercer elemento y le cambio el estilo a mano
cols[4].style.backgroundColor = "#FE9";
cols[5].style.backgroundColor = "#FE9";

//recorremos todos los elementos
cols.forEach(element => {
    //le asignamos un evento click a cada uno de ellos
    element.addEventListener("click", function (e){
        element.classList.toggle("marcar");
    });
});