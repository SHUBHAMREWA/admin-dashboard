import  {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const NotFound = () => {
 
    const applyDarkMode =  useSelector(res=>res.applyDarkMode) ;
    
    const [mode , setMode]   = useState(applyDarkMode.darkmode)

    useEffect(()=>{
        setMode(applyDarkMode.darkmode)

    }, [applyDarkMode])

const styles = {
  container: {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: mode ? "black" :  '#f0f2f5' 
  },
  heading: {
    fontSize: '5rem',
    margin: 0,
    color: '#999',
  },
  text: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1rem',
    textDecoration: 'none',
    color: '#007bff',
  }
};

  
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>404</h1>
      <p style={styles.text}>Page Not Found</p>
      <Link to="/" style={styles.link}>Go to Home</Link>
    </div>
  );
};



export default NotFound;
