import { useEffect, useState } from "react";

function button() {
  let btn = document.getElementById('btn')
  btn?.classList.remove('hid-btn')
  btn?.classList.add('show-btn')
}
export default function From() {
 const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [password,setPassword] = useState('')

function checkName(name:string) {
  if (setName !== null ) {
    return true
  }else return false
}
 function checkEmail(email:string) {
    if (setEmail!== null ) {
      return true
    }else return false
 }
 function checkPassword(password:string) {
  if (setPassword !== null && password.length > 10) {
    return true
  }else return false
 }

 useEffect(() => {
  if (checkName(name) && checkEmail(email) && checkPassword(password)) {
   return button()
  }
 }, [name,email,password])

  return (
    <>
  <div className="form">
    <form action="">
      <label htmlFor="name"> your name</label>
      <input type="text" placeholder="name"/>
      <label htmlFor="email"> your email</label>
      <input type="text" placeholder="email" />
      <label htmlFor="password"> your password</label>
      <input type="text" placeholder="password" />
      <label htmlFor="genders">gender: </label>
      <select name="genders" id="gender">
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
    </form>
  </div>
  <div id="btn" className="button hid-btn">Login</div>
  <button onClick={button} >check</button>
  </> 
  )
}
