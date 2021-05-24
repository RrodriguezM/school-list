import React from 'react';
import './App.css';
import { NavbarRr } from "../components/NavbarRr"
import { SelectorGroupRr } from "../components/SelectorGroupHeaderRr"
import 'tachyons'
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "../components/PDFGeneratorRr"


function App() {

  const [state, setState] = React.useState({
    information: []
  });

  const onChangeValue = (event) => {
    // console.log("Agrega a PDF", event.target.labels[0].innerText)
    setState({
      information: state.information.concat(event.target.labels[0].innerText)
    });
  }

  return (
    <div className="ml3">
      <NavbarRr />
      <h3>Informacion Basica</h3>
      <SelectorGroupRr onChangeStatus={onChangeValue} />
      <div className="tc mt4">
        <PDFViewer width={800} height={600}>
          <MyDocument info={state.information} />
        </PDFViewer>
      </div>
      <p>Foot Notes</p>
    </div>
  );
}

export default App;
