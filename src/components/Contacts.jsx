import { View, Text, Link, StyleSheet, Image } from "@react-pdf/renderer";
import Social from "./Social";

const Contacts = (props) => {
  console.log(styles);
  return (
    <View style={styles.section}>
      <View style={{ width: "70%" }}>
        <Text>
          Email:{" "}
          <Link src={"mailto:" + props.contacts.email}>
            {props.contacts.email}
          </Link>
        </Text>
        <Text>
          Telephone:{" "}
          <Link src={"tel:" + props.contacts.telephone}>
            {props.contacts.telephone}
          </Link>
        </Text>
        <Text>
          Website:{" "}
          <Link src={props.contacts.website}>{props.contacts.website}</Link>
        </Text>

        <Social social={props.contacts.social} />

        <View style={styles.spacer}></View>

        <Text style={{ fontSize: 10 }}>
          Generated with{" "}
          <Link src={"https://github.com/daaanny90/JSON.resume"}>
            JSON.Resume
          </Link>
        </Text>
        <Text style={{ fontSize: 10 }}>
          Revision: {props.revision}
        </Text>
      </View>
      <Image style={styles.profilePic} src={"/profile.jpg"} />
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

export default Contacts;
