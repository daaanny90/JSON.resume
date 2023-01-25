import ReactPDF from 'react-dom';
import { Page, Text, Font, Document, StyleSheet, PDFViewer } from '@react-pdf/renderer';
import Html from 'react-pdf-html';
import ReactDOMServer from 'react-dom/server';
import TailwindUiTemplate from './tailwindUiTemplate';

import style from './style.js';
import './index.css';

const reactComponents = (
  <TailwindUiTemplate></TailwindUiTemplate>
)

const reactInHtml = ReactDOMServer.renderToStaticMarkup(reactComponents)


const Quixote = () => (
  <PDFViewer width="100%" height="1000px">
  <Document author="Danny Spina">
    <Page style={styles.body}>
      <Text style={styles.header} fixed>
        ~ Created with react-pdf ~
      </Text>

      <Html stylesheet={style}>{reactInHtml}</Html>
      
      <Text style={styles.pageNumber} render={({ pageNumber, totalPages }) => (
        `${pageNumber} / ${totalPages}`
      )} fixed />
    </Page>
  </Document>
  </PDFViewer>
);

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
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
});

ReactPDF.render(<Quixote />, document.getElementById('root'));
