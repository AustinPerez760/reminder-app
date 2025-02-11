import Button from './Button';
import { useState } from 'react';

type AddTodoFormProps = {
	handleAddReminder: (reminderText: string) => void;
};

export default function AddTodoForm({ handleAddReminder }: AddTodoFormProps) {
	const [reminderText, setReminderText] = useState('');
	return (
		<form
			className='text-gray-300'
			onSubmit={(event) => {
				event.preventDefault();
				handleAddReminder(reminderText);

				setReminderText('');
			}}>
			<h2 className='font-medium text-gray-300'>Add reminder</h2>
			<input
				type='text'
				className='h-[45px] border border-slate-500 rounded-[5px] my-[9px] text-[14px] block w-full px-[14px]'
				value={reminderText}
				onChange={(e) => {
					setReminderText(e.target.value);
				}}
			/>
			<Button buttonType='primary'>
				<p className='font-bold'>+</p>
			</Button>
		</form>
	);
}

// e = event
