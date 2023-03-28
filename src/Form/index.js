import "./style.css";
import React, { useState } from "react";

const Form = ({ addNewTask }) => {
  const [newTaskContent, setNewTaskContent] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    const contentTrimmed = newTaskContent.trim();
    if (!contentTrimmed) {
      return;
    }

    addNewTask(contentTrimmed);
    setNewTaskContent("");
  };

  return (
    <form className="form"
      onSubmit={onFormSubmit}
    >
      <input
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?" autofocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <button className="form__button">Dodaj
        zadanie</button>
    </form>
  );
};

export default Form;