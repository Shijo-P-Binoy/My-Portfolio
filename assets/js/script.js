// preloader function starts

var preloader = document.getElementById("preloader");

window.addEventListener("load", function(){
  preloader.style.display = "none";
})

// preloader function ends



function showNavbar() {
  const header = document.querySelector('.header');
  const btn = document.getElementById('menu-btnx');
  header.style.display = 'inline-flex';
  btn.style.display = 'inline-flex';
  
  // Disable scrolling on the body
  document.body.style.overflow = 'hidden';
}

function hideNavbar() {
  const header = document.querySelector('.header');
  const btn = document.getElementById('menu-btnx');
  header.style.display = 'none';
  btn.style.display = 'none';
  
  // Enable scrolling on the body
  document.body.style.overflow = 'auto';
}


//nav link active
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;
    
    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Adjust this value to fine-tune when the active state should change
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });
}


//skill-bar animaton start when scroll
document.addEventListener('DOMContentLoaded', function () {
    const skillPerElements = document.querySelectorAll('.skill-per');

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.animation = 'fillbar 2s ease-in-out';
          entry.target.style.width = '100%';
        }
      });
    }, { threshold: 0.5 }); 

    skillPerElements.forEach(element => {
      observer.observe(element);
    });
  });
