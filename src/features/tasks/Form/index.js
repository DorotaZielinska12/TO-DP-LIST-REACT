import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../tasksSlice";
import { nanoid } from "@reduxjs/toolkit";
import { StyledForm, FormInput, FormButton } from "./styled";


const Form = () => {
  const [newTaskContent, setNewTaskContent] = useState("");
  const inputRef = useRef(null);

  const dispatch = useDispatch();

  const onFormSubmit = (event) => {
    event.preventDefault();

    const contentTrimmed = newTaskContent.trim();
    if (!contentTrimmed) {
      return;
    }

    dispatch(addTask({
      content: contentTrimmed,
      done: false,
      id: nanoid(),
    }));

    setNewTaskContent("");
    inputRef.current.focus();
  };

  return (
    <StyledForm
      onSubmit={onFormSubmit}
    >
      <FormInput
        ref={inputRef}
        value={newTaskContent}
        placeholder="Co jest do zrobienia?" 
        onChange={({ target }) => setNewTaskContent(target.value)}
      />
      <FormButton>
        Dodaj zadanie
      </FormButton>
    </StyledForm>
  );
};

export default Form;