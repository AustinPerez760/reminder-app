export default function AddTodoForm() {
	return (
		<form>
			<h2 className='font-medium text-red-700'>Add task</h2>
			<input type='text' className='h-[45px] border border-black/12%' />
			<button type='submit'> Add to list </button>
		</form>
	);
}
