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
import CompanyAddress from "./components/CompanyAddress";
import Experiences from "./components/Experiences";
import Education from "./components/Education";
import Section from "./components/Section";
import SideProjects from "./components/SideProjects";
import TechSkills from "./components/TechSkills";

import JetbrainsMonoRegular from "./fonts/JetBrainsMono-Regular.ttf";
import JetbrainsMonoBold from "./fonts/JetBrainsMono-SemiBold.ttf";

const hasCoverLetter = config.cover_letter.title !== ""
const lang = config.lang

const Resume = () => (
  <PDFViewer width="100%" height="1000px">
    <Document title={`${config.name} CV`} author={config.name}>
      {hasCoverLetter ? (
        <Page style={styles.body}>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>{config.name}</Text>
          <Text style={{ fontWeight: "bold", fontSize: 14, marginBottom: "10px" }}>{config.profession}</Text>

          <Contacts style={{ marginBottom: "30px" }} contacts={config.contacts} hideJsonResume />
          <CompanyAddress company={config.cover_letter.company} />

          <Text style={{ marginTop: "50px", marginBottom: "20px", textAlign: "right" }}>{config.cover_letter.place}, {lang === "de" ? ("den") : ("")} {config.cover_letter.date}</Text>
          <Text style={{ fontWeight: "bold" }}>{config.cover_letter.title}</Text>
          <Text style={{ marginTop: "20px" }}>{config.cover_letter.text}</Text>
          <Text style={{ marginTop: "20px" }}>{config.name}</Text>
        </Page>
      ) : undefined}
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
  cover_letter: {
    fontWeight: "bold",
    fontSize: 18
  }
});

ReactPDF.render(<Resume />, document.getElementById("root"));
