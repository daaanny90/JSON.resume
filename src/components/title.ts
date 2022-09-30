import { CvComponent } from "@/utils/CvComponent";

export class Title extends CvComponent {
  render() {
    return `<h1 class="text-6xl">${this.config.name.toUpperCase()}</h1>`;
  }
}

export default Title;