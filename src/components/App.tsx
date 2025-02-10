import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';
import Sidebar from './Sidebar';
import { useState } from 'react';

function App() {
	const [reminders, setReminders] = useState([
		{
			id: 1,
			text: 'study',
			completed: true,
		},
		{
			id: 2,
			text: 'work',
			completed: true,
		},
		{ id: 3, text: 'gym', completed: false },
	]);
	return (
		<div className='flex justify-center items-center font-sans bg- min-h-screen flex-col bg-slate-900'>
			<BackgroundHeading />

			<main className='relative w-[972px] h-[636px] bg-slate-800 rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden'>
				<Header reminders={reminders} />

				<TodoList reminders={reminders} setReminders={setReminders} />

				<Sidebar reminders={reminders} setReminders={setReminders} />
			</main>

			<Footer />
		</div>
	);
}

export default App;
