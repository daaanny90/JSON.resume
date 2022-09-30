import { CvComponent } from "@/utils/CvComponent";

export class ProfilePic extends CvComponent {
  render() {
    return `
      <img class="mx-auto max-h-60 max-w-[200px] shadow rounded-full mb-5" src="./profile.jpg" alt="" />
    `;
  }
}