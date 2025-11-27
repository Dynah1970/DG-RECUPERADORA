console.log("JS CARGADO ✔");
document.addEventListener("DOMContentLoaded", function () {
    // Habilitar las pestañas de navegación
    const tabs = document.querySelectorAll('nav ul li');
    const tabContent = document.querySelectorAll('.tab-content');

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            tabContent.forEach(content => content.classList.remove('active'));
            tabContent[index].classList.add('active');
        });
    });
     //heae4r estatico//
     document.addEventListener("scroll", () => {
        const header = document.querySelector("header");
        const main = document.querySelector("main");
    
        if (window.scrollY > 0) {
            // Fija el header
            header.style.position = "fixed";
            header.style.top = "0";
            header.style.left = "0";
            header.style.width = "100%";
            header.style.zIndex = "999";
            header.style.backgroundColor = "rgba(0, 0, 0, 0.8)"; // Fondo semitransparente
            header.style.boxShadow = "0 2px 5px rgba(0, 0, 0, 0.2)"; // Sombra
    
            // Ajusta el contenido del main para evitar que quede cubierto
            main.style.marginTop = `${header.offsetHeight}px`;
        } else {
            // Restaura el header a su posición original
            header.style.position = "relative";
            header.style.backgroundColor = "transparent"; // Fondo transparente
            header.style.boxShadow = "none";
    
            // Restaura el main
            main.style.marginTop = "0";
        }
    });
    

    // Agregar acción al botón de contacto
    const contactoButton = document.querySelector('.contacto');
    contactoButton.addEventListener('click', () => {
        alert("Botón de contacto clickeado!");
    });

    // Agregar acción al botón de más información
    const masInfoButton = document.querySelector('.masInformacion');
    masInfoButton.addEventListener('click', () => {
        alert("Botón de más información clickeado!");
    });

    // Agregar acción al botón de WhatsApp
    const whatsappButton = document.querySelector('.whatsapp');
    whatsappButton.addEventListener('click', () => {
        window.location.href = "https://wa.me/1234567890"; // Reemplazar con tu número
    });
});document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menu-icon");
    const mobileMenu = document.getElementById("mobile-menu");
    const closeIcon = document.getElementById("close-icon");

    // Abrir el menú hamburguesa
    menuIcon.addEventListener("click", () => {
        mobileMenu.classList.add("active");
    });

    // Cerrar el menú hamburguesa
    closeIcon.addEventListener("click", () => {
        mobileMenu.classList.remove("active");
    });
});





document.addEventListener("DOMContentLoaded", () => {
    const videoElement = document.getElementById("header-video");
    const videoContainer = document.getElementById("header-video-container");

    // Si el video no puede reproducirse o no se carga
    videoElement.addEventListener("error", () => {
        reemplazarConSVG();
    });

    // Si el video tarda demasiado en cargar
    videoElement.addEventListener("stalled", () => {
        reemplazarConSVG();
    });

    // Si el video no inicia automáticamente en algunos dispositivos
    videoElement.addEventListener("canplaythrough", () => {
        if (videoElement.readyState < 3) {
            reemplazarConSVG();
        }
    });

    function reemplazarConSVG() {
        // Asegúrate de que el contenedor exista
        if (!videoContainer) return;

        // Reemplazar el video con un SVG
        videoContainer.innerHTML = `
            <img src="build/img/headersvg.svg" alt="Header Background" class="svg-fondo">
        `;

        // Animación para el SVG
        const svg = document.querySelector(".svg-fondo");
        let direction = 1; // Dirección del movimiento
        let position = 0;

        function animarSVG() {
            position += 0.5 * direction; // Velocidad de movimiento
            if (position > 10 || position < -10) {
                direction *= -1; // Cambiar dirección
            }
            svg.style.transform = `translateY(${position}px)`;
            requestAnimationFrame(animarSVG);
        }

        animarSVG(); // Iniciar animación
    }

    // Forzar comprobación en caso de que el video no cargue rápido
    setTimeout(() => {
        if (!videoElement.readyState || videoElement.networkState === 3) {
            reemplazarConSVG();
        }
    }, 5000); // Tiempo límite para cargar video
});
// Espera a que todo el HTML se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {

    // Selecciona todas las galerías que tengan la clase "galeria-amado-nervo"
    document.querySelectorAll('.galeria-amado-nervo').forEach(galeria => {

        // Dentro de cada galería, selecciona todos los elementos <picture>
        const fotos = galeria.querySelectorAll('picture');

        // Comprueba si la cantidad de imágenes es impar
        if (fotos.length % 2 !== 0) {
            
            // Si es impar, agrega la clase 'ultimo' a la última imagen
            // Esto permite que la última imagen ocupe toda la fila en el grid
            fotos[fotos.length - 1].classList.add('ultimo');
        }
    });
});

//aqui da  una duplicacion de texto en las marquesinas de index
document.addEventListener("DOMContentLoaded", function() {

    // PREGUNTAS
    const pq = document.querySelector(".marquesina-texto");
    if (pq) {
        pq.setAttribute("data-text", pq.textContent.trim());
    }

    // REMATE
    const rm = document.querySelector(".marquesina-remate span");
    if (rm) {
        rm.setAttribute("data-text", rm.textContent.trim());
    }

});
//FLIPPING INMOBILIARIO ESTA ES LA SECCION
// JS para animar al hacer scroll (IntersectionObserver)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".flip-hero");
  const cards = document.querySelectorAll(".esquema-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (hero) observer.observe(hero);
  cards.forEach(card => observer.observe(card));
});
// JS para animar al hacer scroll (IntersectionObserver)
document.addEventListener("DOMContentLoaded", () => {
  const hero = document.querySelector(".flip-hero");
  const cards = document.querySelectorAll(".esquema-card");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  if (hero) observer.observe(hero);
  cards.forEach(card => observer.observe(card));
});
 //MAIN DE FLIPPING INMBO
 /* ------------------------------ */
/* 2️⃣ INTERCAMBIO AUTOMÁTICO     */
/* ------------------------------ */

setTimeout(() => {
  document.querySelector(".bienestar-texto").style.order = "2";
  document.querySelector(".bienestar-img").style.order = "1";
}, 1800);


/* ------------------------------ */
/* 3️⃣ PASOS 1 → 5 secuenciales   */
/* ------------------------------ */
/* ---------------------------------------------- */
/* ---------------------------------------------- */
/* PASOS MANUALES CON ← → SIN CAMBIO AUTOMÁTICO   */
//* ---------------------------------------------- */
/* PASOS 1 → 5                                    */
/* ---------------------------------------------- */

/* ============================================
   DEFINIR PASOS SEGÚN EL DATA-PORTAFOLIO
============================================ */
let pasos = [];

switch (document.body.dataset.portafolio) {

  case "flipping":
    pasos = [
     { 
    num: "1", 
    titulo: "Seleccionamos la propiedad ideal", 
    txt: "Analizamos las mejores opciones de nuestro portafolio según dictamen previo y potencial de rendimiento."
  },
  { 
    num: "2", 
    titulo: "Realizamos el dictamen técnico", 
    txt: "Estudiamos el valor real, proceso legal y margen de recuperación para determinar la estrategia óptima."
  },
  { 
    num: "3", 
    titulo: "Te presentamos tu opción de inversión", 
    txt: "Eliges la propiedad donde deseas invertir; tú aportas el capital y nosotros gestionamos todo el proceso."
  },
  { 
    num: "4", 
    titulo: "Gestionamos y liberamos la propiedad", 
    txt: "Nos encargamos del proceso legal, liberación, remodelación y preparación para la venta final."
  },
  { 
    num: "5", 
    titulo: "Obtienes tu rendimiento", 
    txt: "Recuperas tu capital más la utilidad generada después de la venta de la propiedad."
  }
    ];
  break;

  case "inversiones":
   pasos = [

  { 
    num: "1", 
    titulo: "Seleccionamos la propiedad adecuada", 
    txt: "Buscamos oportunidades provenientes de remates bancarios, realizamos el dictamen técnico-legal y entregamos un análisis financiero claro de costos, beneficios y su potencial de rendimiento."
  },
  { 
    num: "2", 
    titulo: "Estructuramos la inversión colectiva", 
    txt: "Definimos los montos de participación y formalizamos la inversión para proteger a todos los inversionistas."
  },
  { 
    num: "3", 
    titulo: "Adquirimos la propiedad", 
    txt: "Realizamos todo el proceso de compra, formalización y regularización."
  },
  { 
    num: "4", 
    titulo: "Administramos y ejecutamos el proyecto", 
    txt: "Coordinamos mejoras, remodelaciones, trámites y estrategias para maximizar la plusvalía y el retorno esperado."
  },
  { 
    num: "5", 
    titulo: "Distribuimos las utilidades", 
    txt: "Una vez concluida la operación, entregamos a cada inversionista su rendimiento correspondiente según su participación."
  }
];

  break;

  case "hipotecaria":
   pasos = [
  { 
    num: "1", 
    titulo: "Crédito para Comprar Casa", 
    txt: "Te ayudamos a elegir el mejor crédito para adquirir tu casa nueva o usada y te acompañamos hasta la entrega de llaves." 
  },
  { 
    num: "2", 
    titulo: "Crédito para Construir Casa", 
    txt: "Obtén financiamiento para construir tu vivienda; tu terreno queda como garantía hipotecaria." 
  },
  { 
    num: "3", 
    titulo: "Cambio de Hipoteca", 
    txt: "Cambia tu hipoteca a otro banco con mejores condiciones y obtén ahorro en tu mensualidad." 
  },
  { 
    num: "4", 
    titulo: "Crédito para Comprar Terreno", 
    txt: "Financia la compra de un terreno en zona urbanizada y construye con libertad según tus necesidades." 
  },
  { 
    num: "5", 
    titulo: "Crédito de Terreno y Construcción", 
    txt: "Compra tu terreno y construye tu casa a medida; puedes obtener hasta el 100% del presupuesto de obra." 
  },
  { 
    num: "6", 
    titulo: "Crédito de Casa en Preventa", 
    txt: "Adquiere una casa o departamento en preventa y obtén un mejor precio con crédito hipotecario." 
  },
  { 
    num: "7", 
    titulo: "Crédito de Liquidez", 
    txt: "Recibe liquidez para invertir, cubrir emergencias o pagar deudas usando tu inmueble como garantía." 
  },
  { 
    num: "8", 
    titulo: "Crédito de Hipoteca y Liquidez", 
    txt: "Cambia tu hipoteca a otro banco y recibe dinero adicional para usarlo en lo que necesites." 
  },
  { 
    num: "9", 
    titulo: "Crédito para Remodelar Casa", 
    txt: "Mejora tu casa con un crédito de renovación o ampliación; obtén hasta el 70% del financiamiento." 
  }
];
  break;

  case "seguros":
    pasos = [
       { 
      num: "1", 
      titulo: "Analizamos tu perfil", 
      txt: "Conocemos tus necesidades, situación actual y prioridades para identificar el tipo de seguro ideal para ti." 
    },
    { 
      num: "2", 
      titulo: "Seleccionamos la mejor póliza", 
      txt: "Comparamos opciones y elegimos la cobertura que mejor protege a tu familia, bienes o salud." 
    },
    { 
      num: "3", 
      titulo: "Personalizamos tu cobertura", 
      txt: "Ajustamos deducibles, sumas aseguradas y beneficios para que el seguro se adapte a tu presupuesto y estilo de vida." 
    },
    { 
      num: "4", 
      titulo: "Realizamos tu contratación", 
      txt: "Gestionamos todo el proceso para activar tu póliza de forma rápida, segura y sin complicaciones." 
    },
    { 
      num: "5", 
      titulo: "Acompañamiento continuo", 
      txt: "Te apoyamos en renovaciones, cambios y cualquier trámite o siniestro que puedas presentar durante tu cobertura." 
    }
    ];
  break;
}

let index = 0;
let autoInterval;

/* Renderizar cada paso */
function mostrarPaso() {
  const cont = document.getElementById("paso");

  cont.innerHTML = `
    <div class="paso-contenido">

       <div class="paso-numero" data-n="${pasos[index].num}">${pasos[index].num}</div>


        <div class="paso-textos">
            <div class="paso-titulo">${pasos[index].titulo}</div>
            <div class="paso-descripcion">${pasos[index].txt}</div>
        </div>

    </div>
  `;
}

/* Auto avance */
function iniciarAuto() {
  autoInterval = setInterval(() => {
    index = (index + 1) % pasos.length;
    mostrarPaso();
  }, 3000);
}

/* Reiniciar el autoavance cuando el usuario toca flechas */
function reiniciarAuto() {
  clearInterval(autoInterval);
  iniciarAuto();
}

/* Flecha derecha */
document.getElementById("next").addEventListener("click", () => {
  index = (index + 1) % pasos.length;
  mostrarPaso();
  reiniciarAuto();
});

/* Flecha izquierda */
document.getElementById("prev").addEventListener("click", () => {
  index = (index - 1 + pasos.length) % pasos.length;
  mostrarPaso();
  reiniciarAuto();
});

/* Mostrar el primer paso y arrancar autoavance */
mostrarPaso();
iniciarAuto();

/*es lo que hace girar la rueda de index.html*/
/* ============================
   🔵 REMATES – CARRUSEL ROTATIVO
   (misma estructura que "cómo funciona")
=============================== */
/* ============================
   🔵 REMATES – CARRUSEL ROTATIVO
=============================== */
