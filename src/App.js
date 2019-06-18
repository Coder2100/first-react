import React from 'react';
import Todos from './components/Todos';
import Header from './components/layout/Header';

import './App.css';


class App extends React.Component{
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

markComplete = () => {
  console.log('from app.js')
}
  render(){
   // console.log(this.state.todos)
    return(
      <div className="App">
        <Header />
        <Todos todos={this.state.todos} markComplete={this.markComplete} />
      </div>
    );
  }
}


export default App;


