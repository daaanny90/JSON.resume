import ReactPDF from 'react-dom';
import { Page, Text, Document, StyleSheet, PDFViewer, View } from '@react-pdf/renderer';
import { Informations } from './sections/informations';
import { Summary } from './sections/summary';
import { Experiences } from './sections/experiences';

import data from './cv_config.json';

/**
 * STATUS 23.03.23
 * Back to simple basic react-pdf components. Tailwind does not work, so I have to write the style from scratch.
 * Todos are:
 * - Import and read the JSON config file (the way above does not work, react-pdf can not import files outside src folder, I should
 *   find a way to put it in src or import it in a different way)
 * - Build and style the resume with react-pdf components
 */

// import './index.css';
console.log(data);

const Quixote = () => (
  <PDFViewer width="100%" height="1000px">
  <Document author="Danny Spina">
    <Page style={styles.body}>
      <Text style={styles.topPage} fixed>
        ~ Created with react-pdf ~
      </Text>

      <View style={styles.headerContainer}>
        <Text style={styles.header}>{(data.name).toUpperCase()}</Text>
        <Text style={styles.subHeader}>{(data.profession).toUpperCase()}</Text>
      </View>

      <Informations></Informations>

      <Summary></Summary>

      <Experiences></Experiences>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
  </PDFViewer>
);

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
    // fontFamily: 'Courier'
  },
  topPage: {
    fontSize: 12,
    color: 'grey',
    textAlign: 'center',
    marginBottom: '10px'
  },
  headerContainer: {
    border: '2px solid black',
    paddingTop: '20px',
    paddingBottom: '20px',
    width: '380px',
    margin: '0 auto'
  },
  header: {
    fontSize: 28,
    textAlign: 'center',
    marginBottom: '5px',
    fontWeight: 700
  },
  subHeader: {
    fontSize: 14,
    textAlign: 'center'
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
  }
});

ReactPDF.render(<Quixote />, document.getElementById('root'));
