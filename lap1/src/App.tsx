
import { useEffect, useState } from 'react';
import './App.css';
import "./styles.css";

export default function App(this: any) {

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
  

return(
    <div className="form">
      <form>

        {/* name */}
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="name"  onChange= {handlenameChange} />
          {name.length >0? <p> valid </p> : <p>*name canot be empty </p>}
      
      
        </div>
        {/* email */}
        <div className="input-container">
          <label>Email </label>
          <input type="email" name="Email"   onChange={handleemailChange}/>
          {Email.includes('@') && Email.slice(-4).includes('.com')
    ? <p>  valid </p>
    : <p>*should contain (@,.com) </p>}
          
      
        </div>
        {/* gender */}
        <div className="input-container">Gender :</div>
        <div className='i'> 
         
        <input type="radio" value="Male" name="gender" onChange={handlegenserChange} /> Male
       <input type="radio" value="Female" name="gender"  onChange={handlegenserChange} /> Female
    
        </div>

        <div>
       <p>You gender is:  {gender}</p>
       </div>
        {/* password */}
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required onChange={handleChange} />
        {pass.length >10 ? <p> valid </p>: <p> * password shold be more than 10</p>}
       
  
     
        </div>
        {/* submit  */}
        <div className="button-container">
            <SubmitButton/>
          


        </div>
      </form>
    </div>

  
  

)

 
}




