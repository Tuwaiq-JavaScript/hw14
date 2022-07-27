import React, { useState } from 'react';
// import { valueContainerCSS } from 'react-select/dist/declarations/src/components/containers';
import './App.css';
// import Select from 'react-select'
// import { useState } from 'react';



export function App() {
 
    const [values, setValues] = useState({
      userName:'',
      email:'',
      password:'',

    });
    const [submitted,setSubmitted]=useState(false);
    const [valid,setValid]=useState(false);


const handleNameChange=(event :any)=>{
  setValues({...values,userName:event.target.value})
}
const handleEmailChange=(event :any)=>{
  setValues({...values,email:event.target.value})
}
const handlePasswordChange=(event :any)=>{
  setValues({...values,password:event.target.value})
} 

const handleSubmit=(event:any)=>{
  event.preventDefault();
  if(values.userName && values.email && values.password){
    setValid(true);
  }
  setSubmitted(true);
}



  return (

   
  <><div className='login'>
        { submitted && valid? <div className='hello-message'><b>Hello...</b> </div>:null}

     <h2 className='title'> Form</h2>
    <form action='' onSubmit={handleSubmit}>
        <label className='userName'>Name:</label>
        <br/>

        <input 
        onChange={handleNameChange}
        value ={values.userName} 
        type="text" 
        name='userName'
         placeholder='enter your name' />
         <br/>
         {submitted && !values.userName ?<span>Please enter your name</span>:null}

        <br/>
        <label htmlFor='userName'>Email:</label>
        <br/>
        <input onChange={handleEmailChange} 
        value ={values.email} 
        type="text" 
        name='email' 
        placeholder='enter your e-mail' />
        <br/>
       { submitted && !values.email ?<span>Please enter your email</span>:null}
        <br/>

        <label htmlFor='userName'>Password:</label>
        <br/>
        <input onChange={handlePasswordChange} value ={values.password}  type="text" name='password' placeholder='enter your password' />
         <br/>
        
        { submitted && !values.password ?<span>Please enter your password</span>:null}

        <div className="selectGender">
    
    
          <label className="genderWord">Gender:</label>

          <select className="gender">
          <option value="male">male</option>
          <option value="female">female</option>
          </select>
          <br/>
          <button className='press-me'>SignIn</button>
 </div>
</form>
  </div>
  
  

  
  
  </>
  );
}

export default App;
