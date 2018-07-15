import React, { Component } from 'react';



class Todo extends Component {
	render () {

		return (

			<li id={this.props.todo.index} onClick={this.props.deleteTodo}>{this.props.todo.text}<span><i className="fa fa-trash"></i></span></li>
		)
	}
	
}

export default Todo;