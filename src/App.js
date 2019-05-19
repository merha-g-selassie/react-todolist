import React, { Component } from 'react';
import AddTodo from './AddTodo';
import './App.css';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';


let i = 0;

class App extends Component {
  constructor() {
      super();
      this.state = {
        todos: [],
        addField: ''
      }
  }

  onAddTodo = (event) => {
      console.log(i);
      event.preventDefault();
      if(this.textInput.value.length > 0){
        const todo = { index: i++, text: this.textInput.value};
        this.state.todos.push(todo);
        this.textInput.value = '';
      }
      
      this.setState({
        addField: this.textInput.value
      })
      return this.state.todos;
    }

removeById = (index) => {
    for (var i = 0; i < this.state.todos.length; i++) {
      if(parseInt(this.state.todos[i].index, 10) === parseInt(index, 10)) {
        this.state.todos.splice(i, 1);
      }
    }
  }

  onDeleteTodo = (event) => {
    this.removeById(event.target.id);
    this.setState({
      todos: this.state.todos
    })
    return this.state.todos;
  }

  

  render() {

  return (
      <div className="App">
        <div className="container">
          <div className='jumbotron'>
              <Header/>
              <div className='container'>
                <AddTodo 
                addTodo={this.onAddTodo} 
                inputRef={(input) => this.textInput = input} />
                <TodoList todos={this.state.todos} deleteTodo={this.onDeleteTodo}/>
              </div> 
          </div>
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
