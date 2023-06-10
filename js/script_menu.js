document.addEventListener("DOMContentLoaded", () => {
    const iconoMenu = document.querySelector("#icon-menu");
    const menu = document.querySelector("#menu");
    const menuLinks = document.querySelectorAll("#menu a");
  
    iconoMenu.addEventListener("click", (e) => {
      menu.classList.toggle("active");
      document.body.classList.toggle("opacity");
      const rutaActual = e.target.getAttribute("src");
      if (rutaActual == "https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Cerrar.png") {
        e.target.setAttribute("src", "https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Opciones.png");
      } else {
        e.target.setAttribute("src", "https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Cerrar.png");
      }
    });
  
    menuLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        menu.classList.toggle("active");
        document.body.classList.toggle("opacity");
        const iconoMenu = document.querySelector("#icon-menu");
        const rutaActual1 = iconoMenu.getAttribute("src");
        if (rutaActual1 == "https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Cerrar.png") {
          iconoMenu.setAttribute("src", "https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Opciones.png");
        } else {
          iconoMenu.setAttribute("src", "https://monastery-nft.s3.amazonaws.com/resources/MonasteryV2.0-Recursos/Cerrar.png");
        }
      });
    });
  });
  