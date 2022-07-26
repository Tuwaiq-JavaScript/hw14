import { useForm } from "react-hook-form";
import React, { useState , formState } from "react";
import './App.css';




const RegisterForm = () => {
  const form = useForm({
    mode: "onChange" 
  });
  const { register, handleSubmit, formState } = form;
  const { isValid, touchedFields, errors } = formState;

  const handleRegistration = (data) => console.log(data);
  const handleError = (errors) => {};
  
  
  
  

  const registerOptions = {
    name: { required: "Name is required" },
    email: { 
      required: "Email is required",
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "invalid email address"
      }
    },
    password: {
      required: "Password is required",
      minLength: {
        value: 10,
        message: "Password must be more than 10 characters"
      }
    }
  };


  
  return (
    <form className="form" onSubmit={handleSubmit(handleRegistration, handleError)} >
      <div>
        <label>Name</label>
        <input name="name" type="text" {...register('name', registerOptions.name) }/>
        <small className="text-danger">
          {errors?.name && errors.name.message}
        </small>
      </div>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          {...register('email', registerOptions.email)}
        />
        <small className="text-danger">
          {errors?.email && errors.email.message}
        </small>
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          {...register('password', registerOptions.password)}
        />
        <small className="text-danger">
          {errors?.password && errors.password.message}
        </small>
      </div>
      <div>
      <div>
        <label htmlFor="gender">Choose a gender:</label>

<select name="gender" id="gender" >
  <option value="/male">male</option>
  <option value="/female">female</option>
  
  
</select>
        </div>
      </div>
      <button disabled={!isValid}>Submit</button>
    </form>
  );
};
export default RegisterForm;