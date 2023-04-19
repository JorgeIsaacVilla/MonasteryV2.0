window.onload = funciones
const iconoMenu = document.querySelector('#icon-menu'),
      menu = document.querySelector('#menu');
iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    const rutaActual = e.target.getAttribute('src');
    if(rutaActual == 'img/Cerrar.png'){
        e.target.setAttribute('src','img/Grupo 14622@3x.png'); //falta poner la cruz no esta en el XD
    }else{
        e.target.setAttribute('src','img/Cerrar.png');
    }
});
function funciones(){
    document.getElementById("vent_flotante").onclick = aparecer;
    document.getElementById("cerrar").onclick = desaparecer;
}
function aparecer(){
     var x=document.getElementById("ventana_flotante").style;
          x.display = "block";
          menu.classList.toggle('active');
document.body.classList.toggle('opacity');
}
function desaparecer(){
     var x=document.getElementById("ventana_flotante").style;
          x.display = "none";
} 