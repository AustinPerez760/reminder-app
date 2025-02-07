import AddTodoForm from './AddTodoForm';

export default function Sidebar() {
	return (
		<section className='col-[2/3] row-[2/3] bg-amber-900 border-l border-sky-400/[0.8] '>
			<AddTodoForm />
		</section>
	);
}
