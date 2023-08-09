'use strict'

const menuOpener = document.querySelector('.menuOpener'),
    menuCloser = document.querySelectorAll('.canceler-btn'),
    menu = document.querySelector('.navbar-from-btn'),
    logOpener = document.querySelectorAll('.log-menu-opener'),
    logCloser = document.querySelector('.canceler-log')

    ScrollReveal({
        reset: false,
        distance: "60px",
        duration: 2500,
        delay: 100,
      });

  ScrollReveal().reveal("header", { delay: 10, origin: "top" });
  ScrollReveal().reveal(".animated-btn", { delay: 200, origin: "left", interval: 200 });
  ScrollReveal().reveal(".info-main", { delay: 200, origin: "left"});
  ScrollReveal().reveal(".img-info", { delay: 400, origin: "right" });
  ScrollReveal().reveal("main", { delay: 200, origin: "bottom" });
  ScrollReveal().reveal(".stats-profit", { delay: 600, origin: "bottom" });
  ScrollReveal().reveal(".information", { delay: 300, origin: "right", interval: 200 });
  ScrollReveal().reveal(".text-info-command", { delay: 400, origin: "left"});
  ScrollReveal().reveal(".support-card", { delay: 500, origin: "top", interval: 200 });
  ScrollReveal().reveal(".info", { delay: 500, origin: "right", interval: 300 });
  ScrollReveal().reveal(".same-header", { delay: 100, origin: "bottom"});
  ScrollReveal().reveal(".edge-siri", { delay: 300, origin: "left"});
  ScrollReveal().reveal(".full-info-siri", { delay: 500, origin: "bottom"});
  ScrollReveal().reveal(".benefit", { delay: 700, origin: "right", interval: 200 });
  ScrollReveal().reveal(".add-info", { delay: 500, origin: "bottom", interval: 200 });
  ScrollReveal().reveal(".plan", { delay: 50, origin: "top", interval: 200 });
  ScrollReveal().reveal(".benefit-partner", { delay: 200, origin: "bottom", interval: 200 });
  ScrollReveal().reveal(".start-manual", { delay: 300, origin: "top", interval: 300 });
  ScrollReveal().reveal(".card-info", { delay: 400, origin: "left", interval: 200 });
  ScrollReveal().reveal(".photo-of-manager", { delay: 100, origin: "left" });
  ScrollReveal().reveal(".about-woman-manager", { delay: 300, origin: "right"});
  ScrollReveal().reveal("footer", { delay: 100, origin: "bottom"});
  ScrollReveal().reveal(".animated-link", { delay: 400, origin: "left", interval: 200 });
  ScrollReveal().reveal(".bottom-footer", { delay: 100, origin: "top    "});
  

menuOpener.addEventListener('click', ()=> {
    menu.classList.add('activator-nav')
})

menuCloser.forEach(item => {
    item.addEventListener('click', ()=> {
        menu.classList.remove('activator-nav')
    })
})

logOpener.forEach(item => {
    item.addEventListener('click', ()=> {
        document.querySelector('.log-menu').classList.add('activator-log')
    })
})

logCloser.addEventListener('click',()=> {
    document.querySelector('.log-menu').classList.remove('activator-log')
} )