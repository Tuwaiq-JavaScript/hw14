import { useState } from 'react';
import './App.css';

export default function App() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email,setEmail]=useState("");
  const validemail = isValidEmail(email);
  const validPassword= isValidPassword(password);
  const showButton = showButtons(email,password,name);

  return <><div className='login-form'>
      <label htmlFor="name">Name:</label>
      {name.length === 0 ? <Empty /> :null}
      <input type="text" name="name" placeholder='Name' onChange={e =>setName(e.target.value)}/>
      <label htmlFor="email">Email:</label>
      {validemail === false ?  <EmailFormat /> : null}
      <input type="text" name="email" placeholder='Email' onChange={e =>setEmail(e.target.value)}/>
      <label htmlFor="password">Password:</label>
      {validPassword === false ?  <WrongPassword /> : null}
      <input type="password" name="password" placeholder='Password' onChange={e =>setPassword(e.target.value)}/>
      <p>What is your gender?</p>
      <input type="radio" name="gender" value="male"/>Male 
      <input type="radio" name="gender" value="female"/>Female 
    {showButton === true ? <LoginBtn /> : null}
  </div>
  </>
}
 function showButtons(email :any,password:any,name:any){
  const n = name.length !== 0;
  const e = email.length !== 0;
  const p = password.length !== 0;
return  n && e && p && isValidEmail(email) && isValidPassword(password)
 }

function isValidEmail(email : any) {
  return /\S+@\S+\.\S+/.test(email) && email.length !== 0;
}
function isValidPassword(password : any) {
  return password.length<10 && password.length>5;
}


function Empty(){
  return <p className='red'> This field is required</p>
}

function WrongPassword(){
  return <p className='red'>This field is required and password should be greater than 5 and less than 10</p>
}

function EmailFormat(){
  return <p className='red'> This field is required and email should be in this format t@t.com</p>
}

function LoginBtn(){
  return <div className='button'>login</div>
}

function WelcomePage(){
  return <div className='welcome'>
    <h1>Hi </h1>
    <div className='button'>logout</div>
  </div>
}
