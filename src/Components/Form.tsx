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
	
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [valid, setValid] = useState(false);

	// check if the password is less than 10 and more than 5
	const checkPassword = (password: string) => {
		if (password.length < 10 && password.length > 5) {
			return true;
		}
		return false;
	};
	const checkEmail = (email: string) => {
		if (email.includes('@')) {
			return true;
		}
		return false;
	};
	const checkName = (name: string) => {
		if (name.length > 3) {
			return true;
		}
		return false;
	};
	useEffect(() => {
		
		
		if (checkPassword(password)&&checkEmail(email)&&checkName(name)) {
			setValid(true);
		}
	}, [name, password, email]);

	return (
		<><div className="form" id='form'>dd
			<h1>Form</h1>
			<form id='first'>
				<label>
					Name:
					<input id='name' type='text' name='name' onChange={(e) => setName(e.target.value)} />
				</label>
				<label>
					Email:
					<input type='email' name='email' onChange={(e) => setEmail(e.target.value)} />
				</label>
				<label>
					Password:
					<input type='password' name='password' onChange={(e) => setPassword(e.target.value)} />
				</label>
				<p>select your gender</p>
				<select name='cars' id='gender'>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
				</select>

				<button onClick={hideform}>hide</button>
				</form>
				</div>
				
				{valid ? <button >Click me</button> : null}
				
				<div id='se'>
				<h1> hi {name}</h1>

				
				</div>
				
			
		</>
	);
}
