import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import TodoList from './TodoList';
import Sidebar from './Sidebar';

function App() {
	return (
		<div className='flex justify-center items-center font-sans bg- min-h-screen flex-col bg-slate-900'>
			<BackgroundHeading />

			<main className='relative w-[972px] h-[636px] bg-slate-800 rounded-xl shadow-[0_4px_4px_rgba(0,0,0,0.08)] grid grid-cols-[7fr_4fr] grid-rows-[59px_1fr] overflow-hidden'>
				<Header />

				<TodoList />

				<Sidebar />
			</main>

			<Footer />
		</div>
	);
}

export default App;
