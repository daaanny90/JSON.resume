import { Text } from "@react-pdf/renderer";
import data from "../cv_config.json";

/** Style */
import { sectionTitleStyle } from "../style/sectionTitleStyle";
import { sectionStyle } from "../style/sectionStyle";
const exp = data.experiences.map(function(experience){
  return (
    <Text>{experience.company}</Text>
  )
})
export const Experiences = () => (
  {exp}
  // <>
  //   <Text style={sectionTitleStyle.title}>Experiences</Text>
  //   {data.experiences.forEach(exp => (
  //    `${exp.company}` 
  //   ))}
  // </>
);
