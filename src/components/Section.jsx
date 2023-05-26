import SectionHeader from "./SectionHeader";
import { View, StyleSheet } from "@react-pdf/renderer";

const Section = (props) => {
  const wrap = props.wrap;
  return (
    <View style={styles.section} wrap={wrap}>
      <SectionHeader text={props.title} />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  section: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
});

export default Section;
