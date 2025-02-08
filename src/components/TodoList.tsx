import DeleteBtn from './DeleteBtn';

const initialReminders = ['study', 'work', 'gym'];

export default function TodoList() {
	return (
		<ul>
			{initialReminders.map((reminder) => (
				<li
					key={reminder}
					className='flex justify-between items-center px-8 h-[50px] text-[14px] cursor pointer border-b border-slate-500 text-gray-500'>
					<span>{reminder}</span>
					<DeleteBtn />
				</li>
			))}
		</ul>
	);
}
