const hbegContainer = document.querySelector(".header_nav");

const hbeg = document.querySelector(".parent_lines");

const h1div= document.querySelector(".h1")
const pdiv= document.querySelector(".p")

const links = document.querySelectorAll(".topnav_links li");

console.log(hbegContainer.classList);

hbeg.addEventListener("click", () => {
  hbegContainer.classList.toggle("clicked");
  console.log(hbegContainer.classList);

  links.forEach((i) => {
    i.classList.toggle("fade");
  });
});

const a = () => {
setTimeout(() => {
  ;
    pdiv.classList.toggle("appear");
  }, 1000);
};

a();
