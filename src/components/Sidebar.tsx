import AddTodoForm from './AddTodoForm';

export default function Sidebar() {
	return (
		<section className='col-[2/3] row-[2/3] bg-white border-l border-sky-400/[0.8] px-[25px] py-[18px] pb-[28px] '>
			<AddTodoForm />
		</section>
	);
}
