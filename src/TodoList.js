import React from 'react';
import Todo from './Todo';


const TodoList = ({ todos, deleteTodo }) => {

	return (
		<div>
			<ul>
				{
					todos.map((todo, i) => {
						return (
							<Todo
								key={todo.index}
								todo={todo}
								deleteTodo={deleteTodo}
								/>
						)
					})
				}
			</ul>
		</div>
		)
	
}

export default TodoList;