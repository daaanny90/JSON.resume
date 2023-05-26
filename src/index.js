import ReactPDF from "react-dom";
import {
  Page,
  Text,
  Document,
  StyleSheet,
  PDFViewer,
  Font,
} from "@react-pdf/renderer";
import config from "./cv_config.json";

import Header from "./components/Header";
import Contacts from "./components/Contacts";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Section from "./components/Section";
import SideProjects from "./components/SideProjects";
import TechSkills from "./components/TechSkills";

import JetbrainsMonoRegular from "./fonts/JetBrainsMono-Regular.ttf";
import JetbrainsMonoBold from "./fonts/JetBrainsMono-SemiBold.ttf";

const Resume = () => (
  <PDFViewer width="100%" height="1000px">
    <Document title={`${config.name} CV`} author={config.name}>
      <Page style={styles.body}>

        <Header name={config.name} profession={config.profession} />

        <Section title="Contact Info">
          <Contacts contacts={config.contacts} revision={config.revision} />
        </Section>

        <Section title="Summary">
          <Text>{config.summary}</Text>
        </Section>

        <Section title="Experiences" wrap={false}>
          <Experiences experiences={config.experiences} />
        </Section>

        <Section title="Education" wrap={false}>
          <Education education={config.education} />
        </Section>

        <Section title="Skills" wrap={false}>
          <TechSkills techSkills={config.tech_skills} />
        </Section>

        <Section title="Side Projects" wrap={false}>
          <SideProjects sideProjects={config.side_projects} />
        </Section>

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
  pageNumber: {
    position: "absolute",
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: "center",
    color: "grey",
  },
});

ReactPDF.render(<Resume />, document.getElementById("root"));
