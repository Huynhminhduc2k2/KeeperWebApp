import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import CheckIcon from '@mui/icons-material/Check';

function Note({ title, content, deleteNote, editNote, id }) {
  const [isEdit, setEdit] = React.useState(false);
  const [note, setNote] = React.useState({
    title: title,
    content: content,
  });

  React.useEffect(() => {}, [note]);

  function handleChange(e) {
    const { name, value } = e.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="note">
      {isEdit ? (
        <input
          type="text"
          value={note.title}
          name="title"
          onChange={handleChange}
        />
      ) : (
        <h1>{title}</h1>
      )}
      {isEdit ? (
        <input
          type="text"
          value={note.content}
          name="content"
          onChange={handleChange}
        />
      ) : (
        <p>{content}</p>
      )}

      <button onClick={() => deleteNote(id)}>
        <DeleteIcon />
      </button>

      {isEdit ? (
        <button
          onClick={() => {
            editNote(id, note.title, note.content);
            setEdit(false);
          }}
        >
          <CheckIcon />
        </button>
      ) : (
        <button onClick={() => setEdit(true)}>
          <EditIcon />
        </button>
      )}
    </div>
  );
}

export default Note;
