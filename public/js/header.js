import AnimatedElement from "./animate.js";

const menuOpenButton = document.querySelector("#header_menu_open_button");
// const menuCloseButton = document.querySelector("#header_menu_close_button");

const animatedOpenButton = new AnimatedElement(
  "#header_menu_open_button",
  "trigger_show_header_menu",
  "trigger_hide_header_menu"
);

const animatedCloseButton = new AnimatedElement(
  "#header_menu_close_button",
  "trigger_show_header_close_button"
);

function showMenu() {
  animatedOpenButton.on();
  animatedCloseButton.on();
  console.log("show menu");
}

function hideMenu() {
  animatedOpenButton.off();
  animatedCloseButton.off();
  console.log("hide menu");
}
animatedOpenButton.element.addEventListener("click", showMenu);
animatedCloseButton.element.addEventListener("click", hideMenu);
