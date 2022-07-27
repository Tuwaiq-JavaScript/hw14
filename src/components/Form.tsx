import { IForm } from '../data';
import React , {useEffect, useState} from 'react';



interface FormProps {
	form: IForm;
}

export function Form({ form }: FormProps) {
    const [values , setValues] = useState("");
  const [gender,setGender]=useState("");


   



	return (
		<div className='form'>
		<h2>LOGIN</h2>
        <form>
            <input type="text" name='username' placeholder='Name' />
            <input type="text"  name='email' placeholder='Email'/>
            <input type="password"  name='password' placeholder='Password'/>
            <select>
    <option>Select gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
            <button type='submit'>Login</button>
        </form>
		</div>
	);
}
