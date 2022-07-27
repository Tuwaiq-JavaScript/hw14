import { IForm } from '../data';
import React , { useState} from 'react';



interface FormProps {
	form: IForm;
}

export function Form({ form }: FormProps) {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
 
  
  const handleNameInputChange = (e:any) => {
    e.persist();
    setValues((values) => ({ ...values, name: e.target.value, }));};
 
    const handleEmailInputChange = (e:any) => {
    e.persist();
    setValues((values) => ({ ...values,  email: e.target.value, }));};
  
  
    const handlePasswordInputChange = (e:any) => {
    e.persist();
    setValues((values) => ({ ...values,  password: e.target.value, }));};

  
    const handleSubmit = (e:any) => {
    e.preDefault();
    if(values.name && values.email && values.password) {
        setValid(true);
    }
    setSubmitted(true);
    }
    


	return (
		<div className='form'>
		<h2>LOGIN</h2>
        <form className="register-form" onSubmit={handleSubmit}>
        {submitted && !valid ?<span id="name-error">"heelo"</span> :null}

            <input type="text" name='username' placeholder='Name'     value={values.name} onChange={ handleNameInputChange}  />
            {submitted && !values.name ?<span id="name-error">Please enter a  name</span> :null}
            <input type="text"  name='email' placeholder='Email'     value={values.email} onChange={handleEmailInputChange} />
            {submitted && !values.email ?<span id="email-error">Please enter a  email</span> :null}
            <input type="password"  name='password' placeholder='Password'     value={values.password} onChange={handlePasswordInputChange}/>
            {submitted && !values.password ?<span id="password-error">Please enter a  password</span> :null}

            <select>
    <option>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
  <button className='from-filed'
    type="submit">
          Register
        </button>
        </form>
		</div>
	);
}


