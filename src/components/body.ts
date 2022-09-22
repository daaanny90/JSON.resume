import { CvComponent } from "@/utils/CvComponent";
import { SectionTitle } from "./sectionTitle";

export class Body extends CvComponent {
  render() {
    return `
      <div class="grid grid-cols-3 gap-0 p-3">
        <div class="sidebar row-span-auto">
          ${new SectionTitle({ title: "Contacts" }).render()}
          <ul>
            <li>✉️ email: ${this.config.contacts.email}</li>
            <li>☎️ telephone: ${this.config.contacts.telephone}</li>
            <li>🌐 website: ${this.config.contacts.website}</li>
          </ul>
        </div>
        <div class="content col-span-2">
          ${new SectionTitle({ title: "Summary" }).render()} 
          <p>A description about myself and my story as a developer and as a person</p>
        </div>

        <div class="sidebar row-span-auto">
          ${new SectionTitle({ title: "Contacts" }).render()}
          <ul>
            <li>✉️ email: ${this.config.contacts.email}</li>
            <li>☎️ telephone: ${this.config.contacts.telephone}</li>
            <li>🌐 website: ${this.config.contacts.website}</li>
          </ul>
        </div>
        <div class="content col-span-2">
          ${new SectionTitle({ title: "Summary" }).render()} 
          <p>A description about myself and my story as a developer and as a person</p>
        </div>
      </div>
    `;
  }
}
