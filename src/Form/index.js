import "./style.css";
import React, { useState, useRef } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (!contentTrimmed) {
      return;
    }

    addNewTask(contentTrimmed);
    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <form className="form"
      onSubmit={onFormSubmit}
    >
      <input
        ref={inputRef}
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?"
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj
        zadanie</button>
    </form>
  );
};

export default Form;