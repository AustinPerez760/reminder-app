import { useRemindersContext } from '../lib/hooks';

export default function Counter() {
	const { completedReminders, totalNumberOfReminders } = useRemindersContext();
	return (
		<p className='text-[14px] text-gray-300'>
			<b>
				{completedReminders} {''}
			</b>
			: {totalNumberOfReminders} completed
		</p>
	);
}
