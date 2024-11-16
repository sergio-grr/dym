// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
    } else {
        navbar.style.backgroundColor = 'var(--white)';
    }
});


// Obtener elementos
const modal = document.getElementById('menu-modal');
const modalImage = document.querySelector('.modal-image');
const menuImage = document.querySelector('.menu-image');
const closeBtn = document.querySelector('.close');

// Abrir el modal al hacer clic en la imagen del menú diario
menuImage.addEventListener('click', () => {
    modal.style.display = 'flex';
});

// Cerrar el modal al hacer clic en la "X"
closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Cerrar el modal al hacer clic fuera del contenido del modal
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});
