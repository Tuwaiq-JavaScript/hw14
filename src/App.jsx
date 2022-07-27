import React, { useState } from "react";
// import ReactDOM from "react-dom";

import "./index.css";


// function button (){
//   let btn = document.getElementById('btn');
//   btn?.classList.remove('hid-btn')
//   btn?.classList.add('show-btn')}




function App() {
  // States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "user1",
      password: "password001"
    },
    {
      username: "user2",
      password: "password002"
    }
  ];

  const errors = {
    uname: "invalid username",
    pass: "invalid password "
  };

  // function checkPassword(password) {
  //   if (password.length < 10 && password.length > 5) {
  //     return true;
  //   }
  //   return false;
  // }

  function handleSubmit(event) {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  }

  // error message
  const renderErrorMessage = (name) =>
    {
      return name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      );
    };
    // useEffect(() =>{
    //   if
    // })
  //  code for login form
  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username: </label>
          <input type="text" name="uname" required />
          {renderErrorMessage("uname")}
        </div>
        <div className="input-container">
          <label>Email: </label>
          <input type="text" name="email" required />
          {/* {renderErrorMessage("pass")} */}
        </div>
        <div className="input-container">
          <label>Password: </label>
          <input type="password" name="pass" required />
          {renderErrorMessage("pass")}

          <div className="input-container">
          <label>Choose a gender: </label>
          <select name='cars' id='gender'>
					<option value='Male'>Male</option>
					<option value='Female'>Female</option>
				</select>
          {/* <input type="text" name="email" required /> */}
          {/* {renderErrorMessage("pass")} */}
        </div>
        </div>
        

        <div  id ="btn" className="button-container">
          <input type="submit" />
        </div>
        {/* <button onClick={button}>check</button> */}
      </form>
    </div>
    
  );

  return (
    <div className="app">
      <div className="login-form">
        <div className="title">Sign In</div>
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;



























