import Logo from './Logo';
import Counter from './Counter';

export default function Header({ reminders }) {
	return (
		<header className=' flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-slate-700 border-b border-sky-800'>
			<Logo />
			<Counter reminders={reminders} />
		</header>
	);
}
