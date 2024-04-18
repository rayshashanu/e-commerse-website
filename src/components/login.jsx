import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const  navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {

    try {
      const response = await axios.post('http://localhost:2000/login', { email, password });
      const { firstName } = response.data;
      dispatch({ type: 'SET_USER', payload: firstName }); 
       if(response.data) {
        navigate('/');
       }       
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  const redirecter = () => {
    navigate('/register');
  }

  return (
    <center>
    <>
    <div style={{backgroundColor:'beige'}}>
    <div style={{alignContent:'start',display:'flex',justifyContent:"space-around",color:'black',flexDirection:'row',width:'1450px',padding:'20px'}}>
    <input type='text' name='search' placeholder='search' style={{height:'30px'}}/>
    <div style={{justifyContent:'space-between',alignContent:'end',display:'flex',flexDirection:'row',gap:'50px'}}>
    <h3>sign in</h3>
    <h3>favorites</h3>
    <h3>cart</h3>
    </div>
    </div>
    </div>
    <table>
    <div style={{backgroundRepeat:'no-repeat',display:'flex',justifyContent:'center',flexDirection:'column',alignItems:'center',gap:'10px'}}>
      <h2>Account</h2>
      <div style={{borderRadius:'10px'}}>
        <label></label>
        <input placeholder='enter email_id' style={{width:'500px',padding:'10px'}}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input placeholder='password' style={{width:'500px',padding:'10px'}}
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div  style={{display:'flex',padding:'10px',gap:'20px'}}>
      <button onClick={handleSubmit} style={{backgroundColor:'darkslategrey',width:'100px',height:'30px',padding:'10px'}}>Login</button> 
      <button onClick={redirecter} style={{backgroundColor:'darkslategray',width:'100px',height:'30px',padding:'10px'}}>Register</button><br></br>
      <a href='' onClick={redirecter} style={{color:'blue',flexDirection:'column',display:'flex',justifyContent:'center',alignItems:'center'}}>Forget Password?</a>
      </div> 
    </div>
    </table>
   
    </>
    </center>
  );
};

export default Login;
