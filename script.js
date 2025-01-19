
// target smooth projet vers image :

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// js pour overlay test reussi 

document.addEventListener("DOMContentLoaded", function() {
const images = document.querySelectorAll('.section-right .colonnes img[data-overlay]');
images.forEach(image => {
        image.addEventListener('click', function() {
            const overlayId = this.getAttribute('data-overlay'); 
            const overlay = document.getElementById('overlay-' + overlayId); 
            
            if (overlay) {
                overlay.style.display = 'flex';  
            }
        });
    });
const closeButtons = document.querySelectorAll('.close');
    closeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const overlay = this.closest('.overlay'); 
            overlay.style.display = 'none';
        });
    });
window.addEventListener('click', function(event) {
    const overlays = document.querySelectorAll('.overlay');
    overlays.forEach(overlay => {
        if (event.target === overlay) {
        overlay.style.display = 'none'; 
            }
        });
    });
});

document.querySelectorAll('.colonne2 img').forEach(image => {
    image.addEventListener('click', function(event) {
        event.stopPropagation(); 
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.section-right .colonnes_smartphone img[data-overlay]');
    images.forEach(image => {
            image.addEventListener('click', function() {
                const overlayId = this.getAttribute('data-overlay'); 
                const overlay = document.getElementById('overlay-' + overlayId); 
                
                if (overlay) {
                    overlay.style.display = 'flex';  
                }
            });
        });
    const closeButtons = document.querySelectorAll('.close');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const overlay = this.closest('.overlay'); 
                overlay.style.display = 'none';
            });
        });
    window.addEventListener('click', function(event) {
        const overlays = document.querySelectorAll('.overlay');
        overlays.forEach(overlay => {
            if (event.target === overlay) {
            overlay.style.display = 'none'; 
                }
            });
        });
    });


// close3
document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.section-right .colonnes img[data-overlay]');
    images.forEach(image => {
            image.addEventListener('click', function() {
                const overlayId = this.getAttribute('data-overlay'); 
                const overlay = document.getElementById('overlay-' + overlayId); 
                
                if (overlay) {
                    overlay.style.display = 'flex';  
                }
            });
        });
    const closeButtons = document.querySelectorAll('.close3');
        closeButtons.forEach(button => {
            button.addEventListener('click', function() {
                const overlay = this.closest('.overlay'); 
                overlay.style.display = 'none';
            });
        });
    window.addEventListener('click', function(event) {
        const overlays = document.querySelectorAll('.overlay');
        overlays.forEach(overlay => {
            if (event.target === overlay) {
            overlay.style.display = 'none'; 
                }
            });
        });
    });
    
    document.querySelectorAll('.colonne2 img').forEach(image => {
        image.addEventListener('click', function(event) {
            event.stopPropagation(); 
        });
    });
    
    document.addEventListener("DOMContentLoaded", function() {
        const images = document.querySelectorAll('.section-right .colonnes_smartphone img[data-overlay]');
        images.forEach(image => {
                image.addEventListener('click', function() {
                    const overlayId = this.getAttribute('data-overlay'); 
                    const overlay = document.getElementById('overlay-' + overlayId); 
                    
                    if (overlay) {
                        overlay.style.display = 'flex';  
                    }
                });
            });
        const closeButtons = document.querySelectorAll('.close3');
            closeButtons.forEach(button => {
                button.addEventListener('click', function() {
                    const overlay = this.closest('.overlay'); 
                    overlay.style.display = 'none';
                });
            });
        window.addEventListener('click', function(event) {
            const overlays = document.querySelectorAll('.overlay');
            overlays.forEach(overlay => {
                if (event.target === overlay) {
                overlay.style.display = 'none'; 
                    }
                });
            });
        });


// xlose4



// slick js pour defilement auto image
$(document).ready(function(){
    $('.your-class').slick({
      infinite: true,
      adaptiveHeight: true,
    //   autoplay: true,
      autoplaySpeed: 5000,
     
    });
  });

// overlay menu smartphone
document.getElementById('menu-contact').addEventListener('click', function() {
    openOverlay('overlay-contact');
});

document.getElementById('menu-info').addEventListener('click', function() {
    openOverlay('overlay-info');
});

document.getElementById('menu-tatouage').addEventListener('click', function() {
    openOverlay('overlay-tatouage');
});

function openOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'block';
    document.getElementById(overlayId).addEventListener('click', function(event) {
        if (event.target === this) {
            closeOverlay(overlayId);
        }
    });
}
function closeOverlay(overlayId) {
    document.getElementById(overlayId).style.display = 'none';
}







console.log("Introduction:", intro);
console.log("Main Content:", mainContent);
console.log("Page complètement chargée, lancement de l'intro");


