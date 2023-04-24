window.onload = funciones
function funciones(){
const iconoMenu = document.querySelector('#icon-menu');
const menu = document.querySelector('#menu');
const menuLinks = document.querySelectorAll('#menu a');

iconoMenu.addEventListener('click', (e) => {
    menu.classList.toggle('active');
    document.body.classList.toggle('opacity');
    const rutaActual = e.target.getAttribute('src');
    if(rutaActual == 'img/Cerrar.png'){
        e.target.setAttribute('src','./img/Opciones.png');
    }else{
        e.target.setAttribute('src','img/Cerrar.png');
    }
});

menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        menu.classList.toggle('active');
        document.body.classList.toggle('opacity');
        const iconoMenu = document.querySelector('#icon-menu');
        const rutaActual1 = iconoMenu.getAttribute('src');
        if(rutaActual1 == 'img/Cerrar.png'){
            iconoMenu.setAttribute('src','./img/Opciones.png');
        }else{
            iconoMenu.setAttribute('src','img/Cerrar.png');
        }
    });
});
}
