
import { useEffect, useState } from 'react';
import { Navb } from './components/navbar';

// import{LoginPage}from './components/login-page'
// function didChange





export default function App() {
//if valid appear Logout Button

	const [values,setValues]=useState({
		username:'',
		email:'',
		password:'',
		// gender:''

	});


const handlerUsernameChange =(event :any)=>{
	setValues({...values,username:event.target.value})
}
const handlerEmailChange =(event :any)=>{
	setValues({...values,email:event.target.value})
}
const handlerPassChange =(event :any)=>{
	setValues({...values,password:event.target.value})
}


// {submitted ? <div className='logoutButton' ><button>LogOut</button></div>}
//  const LoginButton = () => {
//     const [isLoggedIn, setIsLoggedIn] = useState(true);

//     if (isLoggedIn) {
//         return <div className='welcomeMessage'><h4>Hello{values.username}</h4><button>Logout</button></div>;
//     } else {
//         // If user is logged out
//         return <button>Login</button>;
//     }
// };
const passValidation = (password:string) => {
	if (password.length < 10 && password.length > 5) {
		return true;
	}else{
		return false;
	}
	
};
const[valid,setValid]=useState(false);
useEffect(() => {
		
		
	if (passValidation(values.password)) {
		setValid(true);
	}
});

// const [color,setColor]=useState(false);
// // const [textColor,setTextColor]=useState('pink');

// const [gender,setGender]=useState(false)

const [submitted,setSubmitted]=useState(true);


const handlerSubmit=(event:any)=>{
event.preventDefault();

if(values.username&& values.email && values.password )
{setValid(true)
}
setSubmitted(true);
}



	return (<><Navb />

<div className="login-container">



  <form className="login-form" onSubmit={handlerSubmit}>
 
  <h2>Login</h2>
    <input 
	onChange={handlerUsernameChange}
	value={values.username}
	type="text"
	 className="username"
	  name="username"
	   placeholder="Username" />
	     {submitted && !values.username ?
 <span>Please Enter Your Name!</span>:null}
   
    <input
	onChange={handlerEmailChange}
	value={values.email}
	 type="email" 
	className="email" 
	name="email" 
	placeholder="Email Address" />
	 {submitted &&!values.email  ?
      <span>Please Enter a valid email!</span>:null}
    <input 
	onChange={handlerPassChange}
	value={values.password}
	 className="password" 
	 name="password" 
	 placeholder="password" />
	  {submitted && !values.password ?
      <span>Please Enter valid password!</span>:null}
   
    <div className="selectGender" >
    <label className="genderWord">Gender:</label>

    <select  className="gender" >
    <option value="male">male</option>
    <option value="female">female</option>
    </select>
	
	</div>
	{submitted && valid ?<div className='loginButton'>
	  <h4>Hello {values.username}</h4>
	  <button >LogOut</button> </div> : <div className='loginButton'><button >Login</button></div>}
	{/* <div className='loginButton'><button >Login</button></div> */}

    
  </form>

</div>


</>);

}
