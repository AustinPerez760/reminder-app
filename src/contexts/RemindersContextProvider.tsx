import { createContext, useState } from 'react';
import { Reminder } from '../lib/types';

type RemindersContextProviderProps = {
	children: React.ReactNode;
};
type RRemindersConrtext = {
	reminders: Reminder[];
	totalNumberOfReminders: number;
	completedReminders: number;
	handleAddReminder: (reminderText: string) => void;
	handleToggleReminder: (id: number) => void;
	handleDeleteReminder: (id: number) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const RemindersContext = createContext<RRemindersConrtext | null>(null);

export default function RemindersContextProvider({
	children,
}: RemindersContextProviderProps) {
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
		<RemindersContext.Provider
			value={{
				reminders,
				totalNumberOfReminders,
				completedReminders,
				handleAddReminder,
				handleToggleReminder,
				handleDeleteReminder,
			}}>
			{children}
		</RemindersContext.Provider>
	);
}
