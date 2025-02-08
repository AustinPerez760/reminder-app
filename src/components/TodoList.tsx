import { useState } from 'react';
import DeleteBtn from './DeleteBtn';

export default function ReminderList() {
	const [reminders, setReminders] = useState([
		{
			id: 1,
			text: 'study',
			completed: true,
		},
		{
			id: 2,
			text: 'work',
			completed: true,
		},
		{ id: 3, text: 'gym', completed: false },
	]);
	return (
		<ul>
			{reminders.map((reminder) => (
				<li
					key={reminder.id}
					className='flex justify-between items-center px-8 h-[50px] text-[14px] cursor pointer border-b border-slate-500 text-gray-500 cursor-pointer'>
					<span
						className={` ${
							reminder.completed ? 'line-through text-gray-100' : ''
						}`}>
						{reminder.text}
					</span>

					<DeleteBtn id={reminder.id} setReminders={setReminders} />
				</li>
			))}
		</ul>
	);
}
