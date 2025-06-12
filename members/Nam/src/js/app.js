const links = document.querySelectorAll(".nav-link");
const h1 = document.querySelector(".hello-text");
const title = ['Hello','Everyone','!'];
VanillaTilt.init(document.querySelectorAll(".card"));
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    links.forEach((link) => link.classList.remove("active"));
    e.target.classList.add("active");
  });
});
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const progressBars = entry.target.querySelectorAll(".progress-bar");
        progressBars.forEach((bar) => {
          const target = +bar.getAttribute("data-target");
          let count = 0;
          const interval = setInterval(() => {
            if (count >= target) {
              clearInterval(interval);
            } else {
              count++;
              bar.style.width = count + "%";
              bar.textContent = count + "%";
            }
          }, 15); 
        });
        observer.unobserve(entry.target); 
      }
    });
  },
  { threshold: 0.3 }
);

const skillSection = document.getElementById("skills");
observer.observe(skillSection);

const texts = ["Hello everyone !", "Hi !", "Hey Bro !", "Hi Friends !"];
const typingSpeed = 100; 
const erasingSpeed = 50; 
const delayBetweenTexts = 1500; 
let textIndex = 0;
let charIndex = 0;

const typedText = document.getElementById("typed-text");

function type() {
  if (charIndex < texts[textIndex].length) {
    typedText.textContent += texts[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingSpeed);
  } else {
    setTimeout(erase, delayBetweenTexts);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = texts[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingSpeed);
  } else {
    textIndex++;
    if (textIndex >= texts.length) textIndex = 0;
    setTimeout(type, typingSpeed);
  }
}
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(type, 1000); 
});
const hearts = document.querySelectorAll(".fa-heart");
const likes = document.querySelectorAll(".fa-thumbs-up");
hearts.forEach((heart) => {
  heart.addEventListener("click", (e) => {
    e.target.classList.toggle("fa-regular");
    e.target.classList.toggle("fa-solid");
    e.target.classList.toggle("text-danger");
  });
});
likes.forEach((like) => {
  like.addEventListener('click' ,(e) =>{
    e.currentTarget.classList.toggle("text-primary")
  })
})