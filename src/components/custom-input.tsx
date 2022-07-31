import React from "react";

export function CustomInput(props:{value:string,for:string,onChange:React.ChangeEventHandler<HTMLInputElement>}) {
  return (
    <>
      <label htmlFor={`${props.for}`}>{props.for}</label>
      <input onChange={props.onChange} value={props.value} id={`${props.for}`} type="text" />
    </>
  );
}
