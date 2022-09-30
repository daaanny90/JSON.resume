import { CvComponent } from "@/utils/CvComponent";
import { SectionTitle } from "./sectionTitle";

export class SectionSummary extends CvComponent {
  render() {
    return `
    <div class="content col-span-2 mb-5">
        ${new SectionTitle({ title: "Summary" }).render()} 
        <p>A description about myself and my story as a developer and as a person</p>
      </div>
    `;
  }
}