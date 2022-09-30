import { CvComponent } from "@/utils/CvComponent";
import { SectionTitle } from "./sectionTitle";
import Experience from "./experience";

export class SectionExperiences extends CvComponent {

  renderJobs() {
    let jobExperiences = ""
    for (const exp of this.config.experiences) {
      jobExperiences += new Experience({ experience: exp }).render();
    }

    return jobExperiences
  }

  render() {
    return `
    <div class="content col-span-2 mb-5">
        ${new SectionTitle({ title: "Experiences" }).render()}
        ${this.renderJobs()}
      </div>
    `;
  }
}