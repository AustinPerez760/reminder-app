export default function Counter({ reminders }) {
	return (
		<p className='text-[14px] text-gray-800'>
			<b>{reminders.filter((reminder) => reminder.completed).length}</b>:{' '}
			{reminders.length} completed
		</p>
	);
}
