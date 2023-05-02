import { Text } from "@react-pdf/renderer";
import data from "../cv_config.json";

/** Style */
import { sectionTitleStyle } from "../style/sectionTitleStyle";
import { sectionStyle } from "../style/sectionStyle";

export const Summary = () => (
  <>
    <Text style={sectionTitleStyle.title}>Summary</Text>
    <Text style={sectionStyle.section}>{data.summary}</Text>
  </>
);
