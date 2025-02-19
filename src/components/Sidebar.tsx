import AddTodoForm from './AddTodoForm';
import Button from './Button';
import { useKindeAuth } from '@kinde-oss/kinde-auth-react';

export default function Sidebar() {
	const { login, register, logout, isAuthenticated, isLoading, user } =
		useKindeAuth();
	return (
		<section className='flex flex-col col-[2/3] row-[2/3] bg-slate-700 border-black/[0.8] px-[25px] py-[18px] pb-[28px] '>
			<AddTodoForm />

			<div className='mt-auto space-y-2'>
				{/* Nested ternary */}
				{isLoading ? null : isAuthenticated ? (
					<>
						<p className='text-small'> Logged in as {user?.email}</p>

						<Button onClick={logout} buttonType='secondary'>
							Logout
						</Button>
					</>
				) : (
					<>
						<Button onClick={login} buttonType='secondary'>
							Log in{' '}
						</Button>
						<Button onClick={register} buttonType='secondary'>
							Register
						</Button>
					</>
				)}
			</div>
		</section>
	);
}
