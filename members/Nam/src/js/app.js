const links = document.querySelectorAll(".nav-link");
const h1 = document.querySelector(".hello-text");
const title = ['Hello','Everyone','!'];
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

