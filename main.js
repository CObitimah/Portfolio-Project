// console.log("script linked")


// Smooth scroll to sections when navbar links are clicked
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Typewriter effect for name in the home section
function typeWriter(element, text, delay) {
    let i = 0;
    function typing() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(typing, delay);
        }
    }
    typing();
}

/* Initialize typewriter for your name
 // document.addEventListener("DOMContentLoaded", function() {
    const nameElement = document.querySelector(".heading-type");
    typeWriter(nameElement, "Cephas Zoh Obitimah", 100);
});*/

// Show skills with animated progress bars
document.querySelector('.btn-box').addEventListener('click', function () {
    const skillsSection = document.querySelector('#skills-container');
    const skillsHTML = `
        <div class="skills">
            <label>HTML</label>
            <div class="progress-bar"><div class="progress" style="width: 90%;"></div></div>
        </div>
        <div class="skills">
            <label>CSS</label>
            <div class="progress-bar"><div class="progress" style="width: 80%;"></div></div>
        </div>
        <div class="skills">
            <label>JavaScript</label>
            <div class="progress-bar"><div class="progress" style="width: 75%;"></div></div>
        </div>`;
    
    if (!skillsSection) {
        const container = document.createElement('div');
        container.id = 'skills-container';
        container.innerHTML = skillsHTML;
        document.querySelector('.about-content').appendChild(container);
    }
});

// Scroll animations for elements appearing in the viewport
const scrollElements = document.querySelectorAll(".scroll-animate");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});



// console.log("is script working");
const aboutSection = document.getElementById('about');
aboutSection.scrollIntoView({behavior: 'smooth'});

document.getElementById('moreAboutMeBtn').addEventListener('click', function() {
  console.log('More About Me button clicked!');
});

