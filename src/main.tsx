import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './components/App.tsx';
import RemindersContextProvider from './contexts/RemindersContextProvider.tsx';
import { KindeProvider } from '@kinde-oss/kinde-auth-react';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<KindeProvider
			clientId='26b2bb8775da4e8e84d0dd66ecf773d6'
			domain='https://austinperezwebdev.kinde.com'
			redirectUri='http://localhost:5173'
			logoutUri='http://localhost:5173'>
			<RemindersContextProvider>
				<App />
			</RemindersContextProvider>
		</KindeProvider>
	</StrictMode>
);
