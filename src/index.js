import { requestUser, user, po } from "./services/posts";

const $HTML_CONTAINER = document.querySelector("#contenedor");

let postConcatenado="";

//======= pintarPost en el html==========

function peticion() {
    requestUser().then(html=>{
        postConcatenado+=html;
        //console.log(postConcatenado);
        $HTML_CONTAINER.innerHTML=postConcatenado;
        //console.log("hola mundo");
        
    });
}
peticion();//inicia peticion


//=======creamos el observador=============

let observador=new IntersectionObserver((entradas,observador)=>{
    //console.log(entradas);
    entradas.forEach(entrada=>{
        console.log(entrada);
        if (entrada.isIntersecting) {
            user++;
            peticion();
        }
        
    })
},{
    rootMargin: '0px 0px 0px 0px',
    threshold: 1.0
});

const indicator=document.querySelector(`.wrap-container .indicator`);
observador.observe(indicator);

/*========== eventos del buscador ====*/

let inputSearch=document.getElementById("input-search");
let boxSearch=document.getElementById("box-search");
let container=document.getElementById("contenedor");

function mostrarBuscador(){
    boxSearch.style.display="block";
}
function ocultarBuscador(){
    boxSearch.style.display="none";
    inputSearch.value="";

}

inputSearch.addEventListener("keypress",mostrarBuscador);
container.addEventListener("click",ocultarBuscador);   

/*===== buscador interno ====*/
function buscador_Interno(){
    let filter=inputSearch.value;
    let contendorPublicaciones=container.getElementsByTagName("div");

    console.log(contendorPublicaciones);



}



