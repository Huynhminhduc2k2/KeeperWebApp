import React from 'react';
import HighlightIcon from '@mui/icons-material/Highlight';

function Heading() {
  return (
    <header>
      <a href="/">
        <h1>
          <HighlightIcon />
          Keeper App
        </h1>
      </a>
    </header>
  );
}

export default Heading;
