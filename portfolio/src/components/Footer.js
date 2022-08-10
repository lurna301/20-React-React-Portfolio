import React from 'react';



const styles = {
  footerStyle: {
    background: 'white',
  },
  headingStyle: {
    fontSize: '50px',
  },
};



function Footer() {
  return (
    <header style={styles.footerStyle} className="footer">
      <h1 style={styles.headingStyle}>created by: Lauren A. Design Portfolio</h1>
    </header>
  );
}

export default Footer;