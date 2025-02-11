import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';
import Sidebar from './Sidebar';
import { useState } from 'react';
import { Reminder } from '../lib/types';

function App() {
	// State to store reminders
	const [reminders, setReminders] = useState<Reminder[]>([]);

	// Derived state to count completed reminders
	const totalNumberOfReminders = reminders.length;
	const completedReminders = reminders.filter(
		(reminder) => reminder.completed
	).length;

	// Handler functions to add, toggle and delete reminders
	const handleAddReminder = (reminderText: string) => {
		if (reminders.length >= 5) {
			alert('You can only add 5 reminders');
			return;
		} else {
			setReminders((prev) => [
				...prev,
				{
					id: prev.length + 1,
					text: reminderText,
					completed: false,
				},
			]);
		}
	};

	const handleToggleReminder = (id: number) => {
		setReminders(
			reminders.map((reminder) => {
				if (reminder.id === id) {
					return { ...reminder, completed: !reminder.completed };
				}
				return reminder;
			})
		);
	};

	const handleDeleteReminder = (id: number) => {
		setReminders(reminders.filter((reminder) => reminder.id !== id));
	};

	return (
		<div className='flex justify-center items-center font-sans bg- min-h-screen flex-col bg-slate-900'>
			<BackgroundHeading />

			<main className='relative w-[972px] h-[636px] bg-slate-800 rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden'>
				<Header
					totalNumberOfReminders={totalNumberOfReminders}
					completedReminders={completedReminders}
				/>

				<TodoList
					reminders={reminders}
					handleToggleReminder={handleToggleReminder}
					handleDeleteReminder={handleDeleteReminder}
				/>

				<Sidebar handleAddReminder={handleAddReminder} />
			</main>

			<Footer />
		</div>
	);
}

export default App;
