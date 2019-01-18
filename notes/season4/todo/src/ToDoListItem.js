import React from 'react';

export const ToDoListItem = (props) => {
  if(props.todo.completed){
    return (
    <>

    <li onClick = {() => {props.toggleCompleted(props.todo.id)}}
      className ={props.todo.completed ? "leul": "" }
    >
      {props.todo.body}
   </li>
   <button>Delete</button>
    </>
  )
  }

    return (
      <>

      <li onClick = {() => {props.toggleCompleted(props.todo.id)}}
        className ={props.todo.completed ? "leul": "" }
      >
        {props.todo.body}
     </li>

      </>
)
  }
