
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector  ,useDispatch} from 'react-redux';
import { LogoutFunction } from '../Login/login.action';


const Logout = () => {

  const dispatch  = useDispatch() ;
  const applyDarkMode = useSelector(res=>res.applyDarkMode)

const styles = {
  container: {
    height: '100vh',
    backgroundColor: applyDarkMode.darkmode ? "black" : '#f0f2f5',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '20px',
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '15px',
  },
  message: {
    fontSize: '1rem',
    color: '#555',
    marginBottom: '30px',
    maxWidth: '400px',
  },
  button: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
  }
};


  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Want to Logout </h2>
      <Link to="">
        <button  
        onClick={()=>dispatch(LogoutFunction())}
        style={styles.button}>Click to Confirm</button>
      </Link>
    </div>
  );
};


export default Logout;
