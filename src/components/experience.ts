import { CvComponent } from "@/utils/CvComponent";
import type { JobExperience } from "@/types/CvConfig"

type Props = {experience: JobExperience}
export default class Experience extends CvComponent {
  props: Props;

  constructor(props: Props) {
    super();
    this.props = props;
  }

  render() {
    return `
      <h2 class="text-xl font-semibold">${this.props.experience.title}</h2>
      <h3 class="text-base">@ ${this.props.experience.company}</h3>
      <h5 class="text-xs">${this.props.experience.type}</h5>
      <p class="my-3">${this.props.experience.from} -> ${this.props.experience.to}</p>
      <p class="mb-5">${this.props.experience.summary}</p>
    `;
  }
}