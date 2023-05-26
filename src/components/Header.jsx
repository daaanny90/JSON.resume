import { Text, StyleSheet, View } from "@react-pdf/renderer";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>{props.name.toUpperCase()}</Text>
      <Text style={styles.subHeader}>{props.profession.toUpperCase()}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    border: "2px solid black",
    paddingTop: "20px",
    paddingBottom: "20px",
    width: "380px",
    margin: "0 auto",
  },
  header: {
    fontSize: 28,
    textAlign: "center",
    marginBottom: "5px",
    fontWeight: 700,
  },
  subHeader: {
    fontSize: 14,
    textAlign: "center",
  },
});

export default Header;
