import AddTodoForm from './AddTodoForm';
import Button from './Button';

export default function Sidebar() {
	return (
		<section className='flex flex-col col-[2/3] row-[2/3] bg-slate-700 border-black/[0.8] px-[25px] py-[18px] pb-[28px] '>
			<AddTodoForm />
			<div className='mt-auto space-y-2'>
				<Button buttonType='secondary'>Log in </Button>
				<Button buttonType='secondary'>Register</Button>
			</div>
		</section>
	);
}
