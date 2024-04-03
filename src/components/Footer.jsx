import React from 'react';

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright by Minh Duc Dev @ {year}</p>
    </footer>
  );
}

export default Footer;
