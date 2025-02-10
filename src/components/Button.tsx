export default function Button({ buttonType, children }) {
	return (
		<button
			type='submit'
			className={`h-[45px] bg-slate-600 w-full text-gray-300 rounded-[8px] cursor-pointer hover:bg-slate-500 opactiy-[85%] ${
				buttonType === 'secondary' ? 'opacity-[85%]' : ''
			}`}>
			{' '}
			{children}
		</button>
	);
}
