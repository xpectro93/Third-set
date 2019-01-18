import React from 'react';

export const ToDoForm = (props) => {
  return (
    <>
    <form onSubmit={props.handleSubmit}>
    <input
      type="text"
      onChange={props.handleChange}
      value={props.textInput}
      placeholder ="Today I have to..."
      name="textInput"
      />

    <button type="submit">Add To-Do</button>
    </form>

    </>
  )
}
