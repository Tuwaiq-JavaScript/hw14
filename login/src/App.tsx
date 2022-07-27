import { useEffect, useState } from "react";
import "./index.css";



export default function Form() {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password,setPassword] =useState("");
	const [gender,setGender]=useState("");


}
	const EmailChange=(event :any)=>{
		setEmail({...target.value});
	  }
	  const PasswordChange=(event :any)=>{
		setPassword({...target.value});
	  } 

  
	  useEffect(()=>{
		return()=>{
	console .log('login');
		}
	
	  },[onsubmit])

	return (
		
	  <div className="form">
		<form action="">
		<label>Username : </label>   
            <input type="text" placeholder="Enter Username" name="username" required>  
            <label>Password : </label>   
            <input type="password" placeholder="Enter Password" name="password" required>     
		  <label htmlFor="genders">gender: </label>
		  <select name="genders" id="gender">
			<option value="male">male</option>
			<option value="female">female</option>
			<button type="submit">Login</button>    
		  </select>
		</form>
	  </div>
	  );
	
  
