import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import RemindersContextProvider from './contexts/RemindersContextProvider.tsx';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RemindersContextProvider>
			<App />
		</RemindersContextProvider>
	</StrictMode>
);
