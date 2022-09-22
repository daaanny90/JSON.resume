import { CvConfig } from "src/types/CvConfig";

export const Info = (cvConfig: CvConfig) => {
  return 
  `
  <div>
    <ul>
      <li>Profession: ${cvConfig.profession}</li>
    </ul>
  </div>
  `
}