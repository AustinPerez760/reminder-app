type DeleteButtonProps = {
	id: number;
	handleDeleteReminder: (id: number) => void;
};

export default function DeleteBtn({
	id,
	handleDeleteReminder,
}: DeleteButtonProps) {
	return (
		<button
			className='cursor-pointer'
			onClick={(e) => {
				e.stopPropagation();
				handleDeleteReminder(id);
			}}>
			Ⅹ
		</button>
	);
}
