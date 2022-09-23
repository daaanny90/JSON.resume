import { CvConfig } from "@/types/CvConfig";
import cvConfig from "@/cv_config.json";

export class CvComponent {
  config: CvConfig = cvConfig;
  props: unknown;

  constructor(props: unknown = {}) {
    this.props = props
  }
}