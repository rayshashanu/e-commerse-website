import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();
  const handleSubmit = async () => {

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      console.error('Please fill in all fields');
      return;
    }
  

    if (password !== confirmPassword) {
      console.error('Passwords do not match');
      return;
    }
  
    try {
      const response = await axios.post('http://localhost:2000/register', {
        firstName,
        lastName,
        email,
        password,
      });
      console.log(response.data); 
      if(response.data) {
        navigate('/login')
      }
    } catch (error) {
      console.error('Registration failed', error);
    }
  };

  return (
    <div style={{backgroundColor:'beige',flexDirection:'column',alignItems:'center',gap:'10px',justifyContent:'center',display:'flex'}}>
      <h2 style={{color:'black'}}>PERSONAL-INFORMATION</h2>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
          placeholder='first name'
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='last name'
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='email id'
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='enter password'
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <div>
        <label></label>
        <input style={{width:'500px',padding:'10px'}}
        placeholder='Confirm_Password'
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
      </div>
      <div style={{display:'inline'}}>
      <label></label>
     
      <p> <input  type='checkbox' />
      i agree to recieve information by email about offers,services,products and events from......or other group companies ,in accordance with the <a href='#'>privacy policy</a>
      </p>
      </div>

      <div style={{width:'500px',padding:'10px',textAlign:'center'}}>
      <button onClick={handleSubmit} style={{backgroundColor:'grey',height:'30px',flexDirection:'',padding:'10px'}}>Create Account</button>
      </div>
    </div>
  );
};

export default Register;
