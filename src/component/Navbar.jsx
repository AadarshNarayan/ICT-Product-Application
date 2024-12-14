import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const styles = {
    nav: {
      display: 'flex',justifyContent: 'space-between',padding: '20px',backgroundColor: 'indianred',color: 'indianred',
    },
    logo: {
      fontSize: '30px',fontWeight: 'bold',textDecoration: 'none',color: 'White',
    },
    navlink: {
      display: 'flex',margin: 0,padding: '10px',
    },
    navitem: {
      margin: '0 1rem',
    },
    navLink: {
      textDecoration: 'none',fontSize: '15px',color: 'white',
    },
    navlinkhover: {
      color: 'lightcoral',
    },
  };

  return (
    <header style={styles.nav}>
      <div>
        <Link to="/" style={styles.logo}>Product Application</Link>
      </div>
      <nav>
        <ul style={styles.navlink}>
          <li style={styles.navitem}>
            <Link
              to="/"
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.color = styles.navlinkhover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
            >Home
            </Link>
          </li>
          <li style={styles.navitem}>
            <Link
              to="/addproduct"
              style={styles.navLink}
              onMouseEnter={(e) => (e.target.style.color = styles.navlinkhover.color)}
              onMouseLeave={(e) => (e.target.style.color = styles.navLink.color)}
            >Add Product
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
export default Navbar;