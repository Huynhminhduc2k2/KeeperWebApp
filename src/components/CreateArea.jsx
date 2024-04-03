import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

function CreateArea({ addNote, closeExpand }) {
  const [note, setNote] = React.useState({
    title: '',
    content: '',
  });
  const [isExpand, setExpand] = React.useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function handleClick(e) {
    e.preventDefault();
    if (note.title && note.content) {
      addNote(note);
      setExpand(false);
    }
    setNote({ title: '', content: '' });
  }

  return (
    <div>
      <form className="create-note">
        {isExpand && (
          <input
            name="title"
            placeholder="Title"
            onChange={handleChange}
            value={note.title}
            autoFocus
          />
        )}

        <textarea
          name="content"
          placeholder="Take a note..."
          rows={isExpand ? '3' : '1'}
          onChange={handleChange}
          value={note.content}
          onClick={() => setExpand(true)}
          required
        />
        <Zoom in={isExpand}>
          <Fab onClick={handleClick}>
            <AddIcon />
          </Fab>
        </Zoom>
      </form>
    </div>
  );
}

export default CreateArea;
