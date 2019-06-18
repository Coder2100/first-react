import React, { Component } from 'react';
import PropTypes from 'prop-types'
import Todos from './Todos';

export class TodoItem extends Component {
    /**
    getStyle = () => {
        if(this.props.todo.completed){
            return{
                textDecoration: 'line-through'
            }
        }else{
            return{
                textDecoration: 'none'
            }
        }
    }
 */
// tenary operator instead
getStyle = () => {
    return{
        backgroundColor: 'lightgrey',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.todo.completed ?
        'line-through': 'none'
    }
}
/**
markComplete = (event) =>{

}
 */
    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete} /> {' '}
                  
                {this.props.todo.title}</p>
            </div>
        )
    }
}
// creating style variable
const itemStyle = {
    backgroundColor: 'lightgrey'
    // use as style={itemStyle}
}
//Proptypes
TodoItem.propTypes = {
    todo:PropTypes.object.isRequired
}
export default TodoItem
