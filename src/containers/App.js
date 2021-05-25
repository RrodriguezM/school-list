import React from 'react';
import './App.css';
import { NavbarRr } from "../components/NavbarRr"
import { SelectorGroupRr } from "../components/SelectorGroupHeaderRr"
import 'tachyons'
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "../components/PDFGeneratorRr"
import { BasicData } from '../BasicData'
import { BooksData } from '../BooksData'
import { UtilsData } from '../UtilsData'


function App() {
  const [state, setState] = React.useState({
    information: [],
    books: [],
    utils: []
  });

  const onChangeValueBasic = (event) => {
    // Validate if existe si existe se borra si no se agrega
    setState({
      information: state.information.concat(event.target.labels[0].innerText)
    });
    // setState({ 'basic': state.information.concat({[event.target.name]: event.target.checked }) });
    // console.log(state)
  }

  // const onChangeValueBooks = (event) => {
  //   // Validate if existe si existe se borra si no se agrega
  //   setState({
  //     books: state.books.concat(event.target.labels[0].innerText)
  //   });
  // }

  return (
    <div className="ma3">
      <NavbarRr />
      <h3>Informacion Basica</h3>
      <SelectorGroupRr onChangeStatus={onChangeValueBasic} data={BasicData} />
      <h3>Libros</h3>
      <SelectorGroupRr onChangeStatus={onChangeValueBasic} data={BooksData} />
      <h3>Utiles</h3>
      <SelectorGroupRr onChangeStatus={onChangeValueBasic} data={UtilsData} />
      <div className="tc mt4">
        <PDFViewer width={"100%"} height={600}>
          <MyDocument BasicInfo={state.information} BooksInfo={state.books} />
        </PDFViewer>
      </div>
      <p>Foot Notes</p>
    </div>
  );
}

export default App;
