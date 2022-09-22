import { Body } from "./components/body";
import { Header } from "./components/header";

const cv = document.querySelector(".cv")

if (!cv) {
  throw new Error("Main CV container is undefined");
}

const components = [new Header(), new Body()];

components.forEach((el, i) => {
  const fragment = document.createRange().createContextualFragment(el.render());
  cv.appendChild(fragment.children[0]);
});