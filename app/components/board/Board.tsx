import TaskCard from "./tasks/TaskCard";
let data = false;

const Board = () => {
	if (!data) {
		return (
			<div className="w-[343px] flex justify-center flex-col items-center text-center min-h-screen">
				<h3 className="text-[18px] text-[#828FA3] font-bold text-center">
					The board is empty. Create a new column to get started.
				</h3>
				<button className="w-[174px] h-[48px] text-white bg-[#635FC7] rounded-[24px] mt-[25px]">
					+ Add New Column
				</button>
			</div>
		);
	} else {
		return (
			<div className="mr-20">
				<TaskCard />
			</div>
		);
	}
};
export default Board;
