import React, { useState, useEffect } from 'react';
import './App.css';
import { NavbarRr } from "../components/NavbarRr"
import { SelectorGroupRr } from "../components/SelectorGroupHeaderRr"
import { InputRr } from "../components/InputRr"
import { InputTextRr } from "../components/InputTextRr"
import 'tachyons'
import { PDFViewer } from '@react-pdf/renderer';
import MyDocument from "../components/PDFGeneratorRr"
import { BasicData } from '../BasicData'
import { BooksData } from '../BooksData'
import { UtilsData } from '../UtilsData'
import { NotesData } from '../NotesData'

import 'tachyons'


function App() {
  const [books, setBooks] = useState(BooksData)
  const [basics, setBasics] = useState(BasicData)
  const [utils, setUtils] = useState(UtilsData)
  const [notes, setNotes] = useState(NotesData)

  const onChangeBasics = (event) => {
    setBasics({ ...basics, [event.target.id]: event.target.value });
  }

  const onChangeBooks = (event) => {
    setBooks({ ...books, [event.target.id]: event.target.value });
  }

  const onChangeUtils = (event) => {
    setUtils({ ...utils, [event.target.id]: event.target.value });
  }

  const onChangeNotes = (event) => {
    setNotes({ ...notes, [event.target.id]: event.target.value });
  }

  useEffect(() => { setBooks(BooksData) }, [])

  return (
    <div className="ma3">
      <h3>Informacion Basica</h3>
      <InputTextRr onChangeStatus={onChangeBasics} data={basics} />
      <h3>Libros</h3>
      <InputRr onChangeStatus={onChangeBooks} data={books} />
      <h3>Utiles</h3>
      <InputRr onChangeStatus={onChangeUtils} data={utils} />
      <h3>Notas y Observaciones</h3>
      <InputTextRr onChangeStatus={onChangeNotes} data={notes} />
      <div className="tc mt4">
        <PDFViewer width={"80%"} height={600}>
          <MyDocument BasicInfo={basics} BooksInfo={books} UtilsInfo={utils} NotesInfo={notes} />
        </PDFViewer>
      </div>
      <p>Developed by <strong><i>Rafael Rodriguez</i></strong></p>
    </div>
  );
}

export default App;
