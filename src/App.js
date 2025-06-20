// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [name,setName]= useState('Hanna');
  const [email,setEmail]=useState('');
  const [show,setShow]=useState(false);
  const [darkMode, setDarkMode]=useState(false);

  const compliments=[
    "You are awesome",
    "You are genius",
    "You make the world better!",
    "You have great taste in apps 😉",
  ]

  const handleClick=()=>setShow(true);
  const getGreeting=()=>{
    const hour= new Date().getHours();
    if(hour<12) return 'Good Morning';
    if(hour<18) return 'Good Afternoon';
    return 'Good Evening';
  }
  const getRandomCompliments=()=>{
    return compliments[Math.floor(Math.random()*compliments.length)];
  }
  return (
    <div className={darkMode ? "dark" : "light"}>
      <h1>{getGreeting()}  {name}! {getRandomCompliments()}</h1>
      Name: <input placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}/><br/>
      Email: <input placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
      <button onClick={handleClick}>Create Profile</button>
      <button onClick={()=>{setDarkMode((prev)=>!prev)}}>Toggle Theme</button>
      {show && (
        <div>
          <h2>Profile</h2>
          <p>Name: {name}</p>
          <p>Email: {email}</p>

        </div>
      )}
    </div>
  );
}

export default App;
