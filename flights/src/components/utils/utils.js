export const utils = () => {
  const menu = document.getElementById("menu");
  const sideNav = document.querySelector("#nav");

  function show() {
    console.log("hola");
    if (sideNav.classList.contains("active")) {
      sideNav.classList.remove("active");
    } else {
      sideNav.classList.add("active");
    }
  }
  function hide() {
    console.log("me jui");
    if (sideNav.classList.contains("active")) {
      sideNav.classList.add("active");
      sideNav.style.visibility = "hidden";
      sideNav.style.overflow = "hidden";
      sideNav.style.opacity = "0";
      sideNav.style.height = "0";
    }
  }
  menu.addEventListener("click", show);
  sideNav.addEventListener("click", hide);
};
