import { useContext } from 'react';
import { RemindersContext } from '../contexts/RemindersContextProvider';

export function useRemindersContext() {
	const context = useContext(RemindersContext);
	if (!context) {
		throw new Error('Forgot to add provider');
	}
	return context;
}
