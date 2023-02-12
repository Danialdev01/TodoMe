import { writable } from 'svelte/store';
import  supabase  from '$lib/db';
export const todos = writable([]);

export const loadTodos = async () => {
	const { data, error } = await supabase.from('todos').select();
	if (error) {
		return console.error(error);
	}
	// @ts-ignore
    //BUG fIX ERROR ( idk but doesn't effect anything)
	todos.set(data);
};
loadTodos();
