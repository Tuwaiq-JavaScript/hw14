import React, { ChangeEventHandler } from "react";
import { formData } from "..";
import { CustomInput } from "../components/custom-input";

export function FormPage({
  setPage,
  value,
  setValue,
  handleChange,
  re,
  validForm,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  validForm: Boolean;
  setValue: React.Dispatch<React.SetStateAction<formData>>;
  re: RegExp;
  handleChange: ChangeEventHandler<any>;
  value: formData;
}) {
  return (
    <form className="form">
      <CustomInput value={value.name} onChange={handleChange} for="name" />
      {value.name === "" ? "name's required" : null}
      <CustomInput value={value.email} onChange={handleChange} for="email" />
      {!re.test(value.email) ? "make sure the email is valid" : null}
      <CustomInput
        value={value.password}
        onChange={handleChange}
        for="password"
      />
      {value.password.length < 5 || value.password.length > 10
        ? "password needs to be between 5 and 10 letter"
        : null}
      <label htmlFor="gender">gender</label>
      <select
        onChange={handleChange}
        value={value.gender}
        name="gender"
        id="gender"
      >
        <option value="male">male</option>
        <option value="female">female</option>
      </select>
      {!validForm && (
        <div className="center">
          <button
            onClick={(e) => {
              e.preventDefault();
              setPage(2);
            }}
          >
            Login
          </button>
          <button
            onClick={(e) => {
              e.preventDefault();
              setValue({ name: "", email: "", password: "", gender: "male" });
            }}
          >
            Reset
          </button>
        </div>
      )}
    </form>
  );
}
