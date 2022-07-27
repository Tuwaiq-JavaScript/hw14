import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import './styles.css'; 


export default function App() {

const[name, setName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const [istrue,Setistrue]=useState(false);

function handleclick(){
  Setistrue(true);
}

  return (
    
    <div className="container">
        <div className="item-container">
            <h2 className="log-in">Log in</h2>
        </div>
        <div className="item-container">
    
        <form>

        <div className="form-input">

                <label className="label" >Name</label>
                <input type="text" name="name" onChange={e=>setName(e.target.value)}/>
            </div>
            <div className="form-input">
                <label className="label">Email</label>
                <input type="email" name="email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-input">
                <label  className="label">Password</label>
                <input type="password" name="password" onChange={e=>setPassword(e.target.value)}/>
            </div>
            <div className="display-space-between">
            </div>
            <div>
                <button type="submit" onClick={handleclick}>Log in</button>
            </div>
        </form>
    </div>
    </div>

  )

}