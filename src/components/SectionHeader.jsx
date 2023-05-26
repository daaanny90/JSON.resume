import { Text, StyleSheet } from "@react-pdf/renderer";

const SectionHeader = (props) => {
  return <Text style={styles.sectionHeader}>{props.text}</Text>;
};

const styles = StyleSheet.create({
  sectionHeader: {
    fontSize: 18,
    fontWeight: 700,
    padding: 5,
    border: "2px solid black",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
});

export default SectionHeader;
