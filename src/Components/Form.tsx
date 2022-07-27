import { useEffect, useState } from 'react';

function Btn() {
	const [show, setShow] = useState(true);
	return <button >Click me</button>;
}
function hideform(){
	
	let f=document.getElementById("form") as HTMLFormElement;
	let s=document.getElementById("se") as HTMLButtonElement;
	if(f.style.display==="block"){
		f.style.display="block";
		s.style.display="none";
	}
	else{
		f.style.display="none";
		s.style.display="block";
	}


}
//if select is male bgcolor blue if female pink



export function Form() {
	
	const [pass, setPass] = useState("");
	const [Email, setEmail] = useState("");
	const [gender,setGender]=useState('');
	const [name,setName]=useState('');
   
  
	let handleChange = (e :any)=> {
	  console.log("handle change is triggering", e.target.value);
	  setPass(e.target.value);
	};
  
	const handlenameChange =(e:any) => {
	  setName( e.target.value);
	 
	};
	
  
	const handlegenserChange=(e:any)=>{
		setGender( e.target.value);
	 }
  
	 const handleemailChange =(e:any) => {
	  setEmail( e.target.value);
	 
	};
  
	function SubmitButton(e:any){
	  if (name.length!=0&& Email&& gender &&pass.length>10){
		
		return <button type="button">Login</button>
	  } else {
		return <button type="button" disabled>Login</button>
	  };
	};
  
  
  
	useEffect(()=>{
	  return()=>{
  console .log('login');
	  }
  
	},[onsubmit])

	return (
		<div className="form">
		<form>
  		  <div className="input-container">
			<label>Your Name </label>
			<input type="text" name="name"  onChange= {handlenameChange} />
			{name.length >0? <p> valid </p> : <p>*name canot be empty </p>}
		  </div>
		  <div className="input-container">
			<label>Email </label>
			<input type="email" name="Email"   onChange={handleemailChange}/>
			{Email.includes('@') && Email.slice(-4).includes('.com')
	  ? <p>  valid </p>
	  : <p>*should contain (@,.com) </p>}
		  </div>
		  <div className="input-container">Gender :</div>
		  <div className='i'> 
		   
		  <input type="radio" value="Male" name="gender" className='male' onChange={handlegenserChange} /> Male
		 <input type="radio" value="Female" name="gender" className='female' onChange={handlegenserChange} /> Female
	  
		  </div>
  
		  <div>
		 <p>You gender is:  {gender}</p>
		 </div>
		  <div className="input-container">
			<label>Password </label>
			<input type="password" name="pass" required onChange={handleChange} />
		  {pass.length >10 ? <p> valid </p>: <p> * password shold be more than 10</p>}
		  </div>
		  <div className="button-container">
			  <SubmitButton/>
		  </div>
			 <div>
				{gender.includes('Male')?<h1 className='male'> Wellcome {name} 😀</h1> : <h1 className='female'> hey gorgeous {name} 😍</h1>}		
			 </div>
		</form>
	  </div>
	);
}