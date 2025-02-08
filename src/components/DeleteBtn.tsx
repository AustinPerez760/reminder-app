export default function DeleteBtn({ id, setReminders }) {
	return (
		<button
			className='cursor-pointer'
			onClick={() => {
				setReminders((prev) => prev.filter((reminder) => reminder.id !== id));
			}}>
			Ⅹ
		</button>
	);
}
