import { CvComponent } from "@/utils/CvComponent";
import Title from "./title";
import { Subtitle } from "./subtitle";
import { SectionSummary } from "./sectionSummary";
import { SectionExperiences } from "./sectionExperiences";

export class Body extends CvComponent {
  render() {
    return `
    <div class="py-8">
      <div class="flex flex-col mb-5">
      ${new Title().render()}
      ${new Subtitle({ color: "dark" }).render()}
      </div>

      ${new SectionSummary().render()}

      ${new SectionExperiences().render()}
    </div>
    `;
  }
}
