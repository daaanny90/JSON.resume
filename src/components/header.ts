import { CvComponent } from "@/utils/CvComponent";
import { ProfilePic } from "./profilePic";
import { Subtitle } from "./subtitle";
import Title from "./title";

export class Header extends CvComponent {
  render() {
    return `<div class="w-full py-5 px-2 bg-slate-500 flex items-center">
    <div class="w-4/5">
      ${new Title().render()}
      ${new Subtitle({color: "light"}).render()}
      </div>
      ${new ProfilePic().render()}
    </div>`;
  }
}