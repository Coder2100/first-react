import React from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
import axios from 'axios';


import './App.css';


class App extends React.Component{

  state = {
    todos: []
  }
  componentDidMount(){
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10').then(res => this.setState({todos: res.data}))
  }
  //using axios
  /**
  state = {
    todos: [
        {
            id: 1,
            title: 'sex',
            completed: false
        },

        {
            id: 2,
            title: 'giving blow job',
            completed: true
        },

        {
            id: 3,
            title: 'cock suckin bitch',
            completed: false
        }
    ]
}

 */
markComplete = (id) => {
  //console.log('from app.js')
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

// create function to delete items
delTodo = (id) => {
  axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] }));
}

// create addTodo function
addTodo = (title) => {
  axios.post('https://jsonplaceholder.typicode.com/todos', {
    title,
    completed: false
  })
    .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
}
  render(){
   // console.log(this.state.todos)
    return(
      <Router>
      <div className="App">
        <div className="container">
          <Header />
          <Route exact path="/" render={props => (
            <React.Fragment>
              <AddTodo addTodo={this.addTodo} />
              <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
            </React.Fragment>
          )} />
          <Route path="/about" component={About} />
        </div>  
      </div>
    </Router>
    );
  }
}


export default App;


