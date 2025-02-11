type CounterProps = {
	totalNumberOfReminders: number;
	completedReminders: number;
};

export default function Counter({
	totalNumberOfReminders,
	completedReminders,
}: CounterProps) {
	return (
		<p className='text-[14px] text-gray-800'>
			<b>{completedReminders}</b>: {totalNumberOfReminders} completed
		</p>
	);
}
