import Button from './Button';

export default function AddTodoForm() {
	return (
		<form>
			<h2 className='font-medium text-white'>Add task</h2>
			<input
				type='text'
				className='h-[45px] border border-slate-500 rounded-[5px] my-[9px] text-[14px] block w-full px-[14px]'
			/>
			<Button buttonType='primary'> + {''} Reminder</Button>
		</form>
	);
}
