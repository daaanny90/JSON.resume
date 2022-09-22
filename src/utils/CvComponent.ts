import { CvConfig } from "@/types/CvConfig";
import cvConfig from "@/cv_config.json";

export class CvComponent {
  config: CvConfig = cvConfig;
  props: unknown;

  constructor(props: unknown = {}) {
    this.props = props
  }
}

type Props = {name: string;}
export class Test extends CvComponent {
  props: Props;

  constructor(props: Props) {
    super()
    this.props = props
  }

  render() {
    return `<h1>hello ${this.props.name}</h1>`
  }
}