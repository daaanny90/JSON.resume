import { CvComponent } from "@/utils/CvComponent";

type Props = { title: string };
export class SectionTitle extends CvComponent {
  props: Props;

  constructor(props: Props) {
    super();
    this.props = props;
  }
  
  render() {
    return `
      <h4 class="text-3xl py-3 w-full">${this.props.title}</h4>
    `;
  }
}
