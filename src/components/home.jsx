import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  // const dispatch = useDispatch()
  // const navigator = useNavigate()
  // const logout = () => {
  //   dispatch({ type: 'SET_USER', payload: 'user not found' }); 
  //   navigator('/login')
  // }
  // const user = useSelector((state) => state.user.user);

  return (
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
     
        <center>
      {/* <h1>"Style is a way to say who you are without having to speak..!"</h1> */}
      </center>
      <div style={{justifyContent:'space-around',display:'flex'}}>
      
      <a href="#">
      <img src='men.png' style={{height:'500px'}}/>
      </a>
      <a>
      <img src='women.png' style={{height:'500px'}}/>
      </a>
      <a href="#">
      <img src='kid2.png' style={{height:'500px'}}/>
      </a>
      </div>
      
      </div>
    
    </>
  );
};

export default Home;
