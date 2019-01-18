import React from 'react';
import { ToDoListItem } from './ToDoListItem'

// className={this.state.active ? 'your_className': null}
// onclick={this.toggleClass}


export const ToDoList = (props) => {
  let todos = props.todos.map(item => {
    return  <ToDoListItem
      toggleCompleted = {props.toggleCompleted}
      key={item.id}
      todo= {item} />
  })

  return (

    <>
    <ul>
    {todos}
    </ul>
    </>
  )
}
