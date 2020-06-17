export const utils = () => {
  const menu = document.getElementById("menu");
  const sideNav = document.querySelector("#nav");
  const close_document = document.getElementById("close");

  function show() {
    if (sideNav.classList.contains("active")) {
      sideNav.classList.remove("active");
    } else {
      sideNav.classList.add("active");
    }
  }
  function hide() {
    if (sideNav.classList.contains("active")) {
      sideNav.classList.add("active");
      sideNav.style.visibility = "hidden";
      sideNav.style.overflow = "hidden%";
      sideNav.style.opacity = "0";
      sideNav.style.height = "0";
    }
  }
  menu.addEventListener("click", show);
  sideNav.addEventListener("click", hide);
  close_document.addEventListener("click", hide);
};
