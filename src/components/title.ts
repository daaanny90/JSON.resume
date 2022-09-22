import { CvComponent } from "@/utils/CvComponent";

export class Title extends CvComponent {
  render() {
    return `<h1 class="text-6xl text-slate-300">${this.config.name}</h1>`;
  }
}

export default Title;