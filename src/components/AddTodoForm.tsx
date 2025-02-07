export default function AddTodoForm() {
	return (
		<form>
			<h2 className='font-medium text-sky-400'>Add task</h2>
			<input
				type='text'
				className='h-[45px] border border-sky-400 rounded-[5px] my-[9px] text-[14px] block w-full px-[14px]'
			/>
			<button
				type='submit'
				className='h-[45px] bg-amber-100 w-full text-sky-400 rounded-[8px] cursor-pointer hover:bg-amber-200'>
				{' '}
				Add to list{' '}
			</button>
		</form>
	);
}
