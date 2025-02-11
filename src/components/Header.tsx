import Logo from './Logo';
import Counter from './Counter';

type HeaderProps = {
	totalNumberOfReminders: number;
	completedReminders: number;
};

export default function Header({
	totalNumberOfReminders,
	completedReminders,
}: HeaderProps) {
	return (
		<header className=' flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-slate-700 border-b border-sky-800'>
			<Logo />
			<Counter
				totalNumberOfReminders={totalNumberOfReminders}
				completedReminders={completedReminders}
			/>
		</header>
	);
}
