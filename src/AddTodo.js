import React, { Component } from 'react';

class AddTodo extends Component {
	

	render () {
		return (
			<div>
				<form onSubmit={this.props.addTodo}>
					<div className="input-group center-block">
						<input 
							placeholder='Add a todo' 
							type='text'
							ref={this.props.inputRef}
							id='todo'
							className='form-control'
						/>
						<button onClick={this.props.addTodo}>
						<i className="fa fa-plus"></i></button>
					</div>
				</form>
			</div>
		)
	}
}

export default AddTodo;