// Seleccionamos todos los elementos que queremos animar
const elements = document.querySelectorAll("section, .skill-card, .project-card");

// Configuración del IntersectionObserver
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target); // Para que solo se anime una vez
    }
  });
}, {
  threshold: 0.2 // Se activa cuando el 20% del elemento es visible
});

// Smooth scroll en clicks del menú
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});


// Aplicamos el observer a cada elemento
elements.forEach(el => observer.observe(el));

// Toggle menú hamburguesa
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});


const heroIcons = document.querySelector('.hero-icons');
const techIcons = [
  'devicon-html5-plain',
  'devicon-css3-plain',
  'devicon-javascript-plain',
  'devicon-php-plain',
  'devicon-laravel-plain',
  'devicon-react-original',
  'devicon-mysql-plain',
  'devicon-microsoftsqlserver-plain',
  'devicon-nodejs-plain',
  'devicon-github-plain',
  'devincon-git-plain',
  'devicon-visualstudiocode-plain',
];

const isMobile = window.innerWidth <= 768;
const iconCount = isMobile ? 6 : 12;

for(let i = 0; i < iconCount; i++) {
  const icon = document.createElement('i');
  icon.className = `devicon ${techIcons[Math.floor(Math.random() * techIcons.length)]} colored`;

  icon.style.left = Math.random() * 100 + 'vw';
  icon.style.top = Math.random() * 100 + 'vh';
  icon.style.animationDuration = (15 + Math.random() * 10) + 's';
  icon.style.fontSize = (20 + Math.random() * 30) + 'px';

  heroIcons.appendChild(icon);
}


