import { CvComponent } from "@/utils/CvComponent";

export class ProfilePic extends CvComponent {
  render() {
    return `
      <img class="self-end ml-auto max-h-60 max-w-[200px] shadow rounded-full" src="./profile.jpg" alt="" />
    `;
  }
}