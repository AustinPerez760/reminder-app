import Logo from './Logo';
import Counter from './Counter';

export default function Header() {
	return (
		<header className=' flex justify-between items-center px-[28px] col-[1/3] row-[1/2] bg-amber-100 border-b border-sky-400'>
			<Logo />
			<Counter />
		</header>
	);
}
