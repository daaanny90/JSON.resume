import { View, Text, StyleSheet } from "@react-pdf/renderer";

const CompanyAddress = (props) => {
  return (
    <View style={styles.section}>
      <View style={{ width: "70%" }}>
        <Text>{props.company.name}</Text>
        <Text>{props.company.address}</Text>
        <Text>{props.company.city}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profilePic: {
    width: 150,
    height: "auto",
    border: "2px solid black",
    padding: 5,
  },
  spacer: { height: 10, width: "100%" },
  section: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
});

export default CompanyAddress;
