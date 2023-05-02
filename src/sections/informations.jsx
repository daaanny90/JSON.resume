import { StyleSheet, Text } from "@react-pdf/renderer";
import data from "../cv_config.json";
/** Style */
import { sectionTitleStyle } from "../style/sectionTitleStyle";
import { sectionStyle } from "../style/sectionStyle";


export const Informations = () => (
  <>
    <Text style={sectionTitleStyle.title}>Info</Text>
    <Text style={styles.informations}>{data.name}</Text>
    <Text>{data.contacts.email}</Text>
    <Text>{data.contacts.telephone}</Text>
    <Text style={sectionStyle.section}>{data.contacts.website}</Text>
  </>
);

const styles = StyleSheet.create({
  informations: {},
});
