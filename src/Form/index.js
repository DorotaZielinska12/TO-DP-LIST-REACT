import React, { useState } from "react";
import { TaskForm, FormInput, FormButton } from "./styled";

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
    <TaskForm
      onSubmit={onFormSubmit}
    >
      <FormInput
        value={newTaskContent}
        className="form__input"
        placeholder="Co jest do zrobienia?" autofocus
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>
        Dodaj zadanie
      </FormButton>
    </TaskForm>
  );
};

export default Form;