import React, { ChangeEventHandler, useState } from "react";
import { formData } from "..";
import { CustomInput } from "../components/custom-input";

export function WelcomePage({
  setPage,
  value,
  handleChange,
}: {
  setPage: React.Dispatch<React.SetStateAction<number>>;
  value: formData;
  handleChange: ChangeEventHandler<HTMLInputElement>;
}) {
  const [change, setChange] = useState(false);
  return (
    <>
      <h1>greetings {value.name}</h1>
      {change && (
        <CustomInput value={value.name} onChange={handleChange} for="name" />
      )}
      <div className="center">
        <button
          onClick={(e) => {
            e.preventDefault();
            setChange((prev) => !prev);
          }}
        >
          {change ? "Hide Form" : "Change Name ?"}
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            setPage(1);
          }}
        >
          sign out
        </button>
      </div>
    </>
  );
}
