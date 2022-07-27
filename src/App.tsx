import React from "react";
import { useForm } from 'react-hook-form'
import "./App.css";


type Profile = {
  firstname: string
  password: number
  gender:string
  email: string
}


export default function App (this: any) {
  const {register, handleSubmit, errors} = useForm<Profile>()

  const onSubmit = handleSubmit((data) => {
    alert(JSON.stringify(data))
  })
  
  
  
  
  
  

  return (
    <main>
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="firstname">First Name</label>
        <input ref={register({ required: true })} id="firstname" name="firstname" type="text"/>
        {
          errors.firstname && <div className="error">Enter your name</div>
        }
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input ref={register({ required: true, minLength:10 })} id="password" name="password" type="text"/>
        {
          errors.password && <div className="error">Password should  10 number</div>
        }
      </div>
      {/* <div>
        <label htmlFor="email">email</label>
        <input ref={email({ required: true })} id="email" name="email" type="text"/>
        {
          errors.email && <div className="error">Enter your age</div>
        }
      </div> */}

  {/* <select {...props}>
    <option>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select> */}
  <div>
  <label>Email</label>
  <input type="text" placeholder='Email' name="emil" ref={register}></input>

  </div>
  <div>
  <label>Gender</label>
     <select>
      <option>Male</option>
      <option>Female</option>
    </select>

  </div>
    

      <button type="submit">Login</button>
    </form>
    </main>
  );
}



// function email(arg0: { required: boolean; }): React.LegacyRef<HTMLInputElement> | undefined {
//   throw new Error("Function not implemented.");
// }

