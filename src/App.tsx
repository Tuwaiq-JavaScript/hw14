import React, { useEffect, useState } from "react";
import { FormPage } from "./pages/form-page";
import { WelcomePage } from "./pages/welcome-page";

export default App;
//form
//email name password gender
//validation
//second page with greeting to the name and background change

function App() {
  const [Page, setPage] = useState(2);
  const [value, setValue] = useState({
    name: "",
    email: "",
    password: "",
    gender: "male",
  });
  let [styles, setStyles] = useState({ backgroundColor: "grey" });
  useEffect(() => {
    if (value.gender === "male") {
      setStyles({ backgroundColor: "lightblue" });
    } else {
      setStyles({ backgroundColor: "pink" });
    }
  }, [Page]);
  const re = /\S+@\S+\.\S+/;
  const validForm =
    value.name === "" ||
    !re.test(value.email) ||
    value.password.length < 5 ||
    value.password.length > 10;
  function handleChange(e: any) {
    setValue((prevalue: any) => {
      return { ...prevalue, [e.target.id]: e.target.value };
    });
  }
  return (
    <div style={{ ...styles }} className="App form">
      {Page === 1 ? (
        <FormPage
          handleChange={handleChange}
          validForm={validForm}
          re={re}
          value={value}
          setValue={setValue}
          setPage={setPage}
        />
      ) : (
        <WelcomePage
          handleChange={handleChange}
          value={value}
          setPage={setPage}
        />
      )}
    </div>
  );
}
