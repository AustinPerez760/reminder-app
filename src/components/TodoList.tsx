import DeleteBtn from './DeleteBtn';

export default function ReminderList({ reminders, setReminders }) {
	return (
		<ul>
			{reminders.map((reminder) => (
				<li
					key={reminder.id}
					className='flex justify-between items-center px-8 h-[50px] text-[14px] cursor pointer border-b border-slate-500 text-gray-300 cursor-pointer'
					onClick={() => {
						setReminders(
							reminders.map((r) => {
								if (r.id === reminder.id) {
									return { ...r, completed: !r.completed };
								}
								return r;
							})
						);
					}}>
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
