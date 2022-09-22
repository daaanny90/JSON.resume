import { CvComponent } from "@/utils/CvComponent";

type Props = {color: "light" | "dark"}
export class Subtitle extends CvComponent {
  props: Props;

  constructor(props: Props) {
    super()
    this.props = props
  }

  getColorClass() {
    return this.props.color === "light" ? "text-slate-300" : "text-black";
  }

  render() {
    return `<h3 class="${this.getColorClass()} text-2xl">${this.config.profession}</h3>`
  }
}