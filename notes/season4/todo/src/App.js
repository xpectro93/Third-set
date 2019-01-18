import React, { Component } from 'react';
import { ToDoForm } from './ToDoForm'
import { ToDoList } from './ToDoList'

import './App.css';



class App extends Component {
  constructor(){
    super();
    this.state = {
      textInput:"",
      todos:[],

    }
  }

  handleChange = (event) => {
    this.setState({textInput: event.target.value})
  }


  handleSubmit = (event) => {
    event.preventDefault();

    const newTodo ={
      id: this.generateId(),
      body: this.state.textInput,
      completed: false
    }

    this.setState({
      todos:[...this.state.todos, newTodo],
      textInput: ""
    } )
  }

  generateId = () => {
    return Math.random().toString(34).slice(2)
  }


  toggleCompleted = (id) => {
    let oldState = this.state.todos;
    let newState = oldState.map((todo) => {
      if(todo.id === id){
        todo.completed = !todo.completed;

      }
      return todo;
    })
    this.setState({
      todos:newState
    })

  }

  render() {
    console.log(this.state.todos)
    return (
      <div className="App">
      <ToDoForm
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        textInput={this.state.textInput}
      />

      <ToDoList
        todos={this.state.todos}
        toggleCompleted={this.toggleCompleted}
        />


      </div>
    );
  }
}

export default App;
