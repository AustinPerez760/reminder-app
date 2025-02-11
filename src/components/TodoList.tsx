import DeleteBtn from './DeleteBtn';
import { Reminder } from './App';

type ReminderListProps = {
	reminders: Reminder[];
	handleToggleReminder: (reminderId: number) => void;
	handleDeleteReminder: (reminderId: number) => void;
};

export default function ReminderList({
	reminders,
	handleToggleReminder,
	handleDeleteReminder,
}: ReminderListProps) {
	return (
		<ul>
			{reminders.length === 0 ? (
				<li className='h-full flex justify-center items center font-semibold'>
					{' '}
				</li>
			) : null}
			{reminders.map((reminder) => (
				<li
					key={reminder.id}
					className='flex justify-between items-center px-8 h-[50px] text-[14px] cursor pointer border-b border-slate-500 text-gray-300 cursor-pointer'
					onClick={() => {
						handleToggleReminder(reminder.id);
					}}>
					<span
						className={` ${
							reminder.completed ? 'line-through text-gray-100' : ''
						}`}>
						{reminder.text}
					</span>

					<DeleteBtn
						id={reminder.id}
						handleDeleteReminder={handleDeleteReminder}
					/>
				</li>
			))}
		</ul>
	);
}
