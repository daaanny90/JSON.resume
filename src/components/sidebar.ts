import { CvComponent } from "@/utils/CvComponent";
import { ProfilePic } from "./profilePic";
import { SectionTitle } from "./sectionTitle";

export class Sidebar extends CvComponent {
  render() {
    return `<div class="w-1/3 h-full py-8 pl-5 bg-neutral-900 text-slate-100 mr-5 flex flex-col align-center">
    ${new ProfilePic().render()}
   <div class="sidebar row-span-auto">
          ${new SectionTitle({ title: "Contacts" }).render()}
          <ul>
            <li>✉️ email: ${this.config.contacts.email}</li>
            <li>☎️ telephone: ${this.config.contacts.telephone}</li>
            <li>🌐 website: ${this.config.contacts.website}</li>
          </ul>
        </div> 
    </div>`;
  }
}