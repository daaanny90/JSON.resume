import { Body } from "./components/body";
import { Sidebar } from "./components/sidebar";

const cv = document.querySelector(".cv")

if (!cv) {
  throw new Error("Main CV container is undefined");
}

const components = [new Sidebar(), new Body()];

components.forEach((el, i) => {
  const fragment = document.createRange().createContextualFragment(el.render());
  cv.appendChild(fragment.children[0]);
});