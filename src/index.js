import ReactPDF from "react-dom";
import {
  Page,
  Text,
  Link,
  Document,
  StyleSheet,
  PDFViewer,
  View,
  Image,
  Font,
} from "@react-pdf/renderer";
import config from "./cv_config.json";

import JetbrainsMonoRegular from "./fonts/JetBrainsMono-Regular.ttf";
import JetbrainsMonoBold from "./fonts/JetBrainsMono-SemiBold.ttf";

const social = config.contacts.social.map((social, i) => {
  return (
    <View key={i} style={{ display: "flex", flexDirection: "row" }}>
      <Text>
        {social.social}: <Link src={social.url}>{social.username}</Link>
      </Text>
    </View>
  );
});

const experiences = config.experiences.map((exp, i) => {
  return (
    <View
      key={i}
      wrap={false}
      style={{
        borderLeft: "2px solid black",
        paddingLeft: 5,
        width: "100%",
        marginBottom: 15,
      }}
    >
      <Text style={{ fontSize: 8 }}>
        From {exp.from} to {exp.to}
      </Text>
      <Text style={{ fontSize: 8 }}>
        @ {exp.company} - {exp.type}
      </Text>
      <Text style={{ fontWeight: "bold", fontSize: 14 }}>{exp.title}</Text>
      <Text>{exp.summary}</Text>
    </View>
  );
});

const education = config.education.map((edu, i) => {
  return (
    <View
      key={i}
      wrap={false}
      style={{
        borderLeft: "2px solid black",
        paddingLeft: 5,
        width: "100%",
        marginBottom: 15,
      }}
    >
      <Text style={{ fontSize: 8 }}>
        From {edu.from} to {edu.to}
      </Text>
      <Text style={{ fontSize: 8 }}>
        @ {edu.institute}
      </Text>
      <Text style={{ fontSize: 8 }}>{edu.company}</Text>
      <Text style={{ fontWeight: "bold", fontSize: 14 }}>{edu.title}</Text>
    </View>
  );
});

const tech_skills = config.tech_skills.map((skill, i) => {
  const skills = skill.skills.map((sk, j) => {
    return <Text key={j}>{sk}</Text>;
  });
  return (
    <View key={i} wrap={false} style={{ border: "2px solid black", padding: 5, width: 120 }}>
      <Text style={{ fontWeight: "bold", fontSize: 14 }}>{skill.type}</Text>
      {skills}
    </View>
  );
});

const side_projects = config.side_projects.map((project) => {
  return (
    <View
      wrap={false}
      style={{
        borderLeft: "2px solid black",
        paddingLeft: 5,
        width: "100%",
        marginBottom: 15,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 14 }}>{project.title}</Text>
      <Text>{project.description}</Text>
      <Link style={{ fontSize: 10 }} src={project.url}>
        {project.title}
      </Link>
    </View>
  );
});

const Quixote = () => (
  <PDFViewer width="100%" height="1000px">
    <Document author="Danny Spina">
      <Page style={styles.body}>
        {/* Header */}
        <View style={styles.headerContainer}>
          <Text style={styles.header}>{config.name.toUpperCase()}</Text>
          <Text style={styles.subHeader}>
            {config.profession.toUpperCase()}
          </Text>
        </View>

        {/* Contacts */}
        <Text style={styles.sectionHeader}>Contact Info</Text>
        <View style={styles.section}>
          <View style={{ width: "70%" }}>
            <Text>
              Email:{" "}
              <Link src={"mailto:" + config.contacts.email}>
                {config.contacts.email}
              </Link>
            </Text>
            <Text>
              Telephone:{" "}
              <Link src={"tel:" + config.contacts.telephone}>
                {config.contacts.telephone}
              </Link>
            </Text>
            <Text>
              Website:{" "}
              <Link src={config.contacts.website}>
                {config.contacts.website}
              </Link>
            </Text>
            {social}
            <View style={styles.spacer}></View>
            <Text style={{ fontSize: 10 }}>
              Generated with{" "}
              <Link src={"https://github.com/daaanny90/JSON.resume"}>
                JSON.Resume
              </Link>
            </Text>
            <Text style={{ fontSize: 10 }}>
              Revision: {process.env.REACT_APP_VERSION}
            </Text>
          </View>
          <Image style={styles.profilePic} src={"./profile.jpg"} />
        </View>

        {/* Summary */}
        <Text style={styles.sectionHeader}>Summary</Text>
        <Text>{config.summary}</Text>

        {/* Experiences */}
        <Text style={styles.sectionHeader}>Experiences</Text>
        {experiences}

        {/* Education */}
        <Text style={styles.sectionHeader}>Education</Text>
        {education}

        {/* Skills */}
        <Text style={styles.sectionHeader}>Skills</Text>
        <View style={styles.section}>{tech_skills}</View>

        {/* Side Projects */}
        <Text wrap={false} style={styles.sectionHeader}>Side Projects</Text>
        {side_projects}

        <Text
          style={styles.pageNumber}
          render={({ pageNumber, totalPages }) =>
            `${pageNumber} / ${totalPages}`
          }
          fixed
        />
      </Page>
    </Document>
  </PDFViewer>
);

Font.register({
  family: "Jetbrains Mono",
  format: "trueType",
  fonts: [
    { src: JetbrainsMonoRegular },
    { src: JetbrainsMonoBold, fontWeight: "bold" },
  ],
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    fontFamily: "Jetbrains Mono",
    fontSize: 12,
    backgroundColor: "beige",
  },
  topPage: {
    fontSize: 12,
    color: "grey",
    textAlign: "center",
    marginBottom: "10px",
  },
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
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: 700,
    padding: 5,
    border: "2px solid black",
    textAlign: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  section: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  profilePic: {
    width: 150,
    height: "auto",
    border: "2px solid black",
    padding: 5,
  },
  spacer: {
    height: 10,
    width: "100%",
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  }
});

ReactPDF.render(<Quixote />, document.getElementById("root"));
