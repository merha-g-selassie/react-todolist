import { ADD_TODO } from './constants.js';

export const addTodoInput = (text) => {
	return {
		type: ADD_TODO,
		payload: text
	}
}