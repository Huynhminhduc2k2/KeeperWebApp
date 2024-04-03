import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import './App.css';
import notes from '../notes';
import CreateArea from './CreateArea';

function App() {
  const [list, setList] = React.useState([]);

  React.useEffect(() => {
    console.log(list);
  }, [list]);

  function addNote(newValue) {
    setList((prevValue) => {
      return [...prevValue, newValue];
    });
  }

  function deleteNote(id) {
    setList((prevValue) => prevValue.filter((note, index) => index !== id));
  }

  function editNote(id, title, content) {
    const newNote = {
      title: title,
      content: content,
    };
    setList((prevValue) =>
      prevValue.map((note, index) => {
        if (index === id) {
          return newNote;
        }
        return note;
      })
    );
  }

  return (
    <div>
      <Header />
      <CreateArea addNote={addNote} />
      {list.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
          editNote={editNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
