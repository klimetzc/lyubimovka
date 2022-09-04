import { useRef, useState } from "react";
import "./InputLove.scss";

interface IInputLove {
  type: string; // тип инпута, ИСПОЛЬЗОВАТЬ ТОЛЬКО ТЕКСТОВЫЕ!!!
  required?: boolean;
  placeholder: string;
  textarea?: boolean; // Преобразует обычный инпут в <textarea/>
}

const InputLove = (props: IInputLove) => {
  const [errorMessage, setErrorMessage] = useState("");
  const inputElement = useRef<HTMLInputElement | null>(null);
  const checkValidity = (e: any) => {
    console.log(inputElement.current?.validationMessage);
    setErrorMessage(`${inputElement.current?.validationMessage}`);
  };

  return (
    <div className="InputLove">
      {props.textarea ? (
        <textarea
          className="InputLove__input InputLove__textarea"
          placeholder={props.placeholder}
          rows={4}
        ></textarea>
      ) : (
        <>
          <input
            ref={inputElement}
            className={`InputLove__input ${errorMessage.length ? "InputLove__input-invalid" : ""}`}
            type={props.type}
            placeholder={props.placeholder}
            onInput={checkValidity}
            required={props.required}
          />
          <label className="InputLove__label"></label>
          <div className="InputLove__input-error-message">{errorMessage}</div>
        </>
      )}
    </div>
  );
};

export default InputLove;
