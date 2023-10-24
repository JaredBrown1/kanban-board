import TaskCard from "./tasks/TaskCard";
let data = true;

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
			<div className="flex w-screen overflow-x-auto scrollbar-hide no-scrollbar">
				<div>
					<h1 className="flex p-4">
						{/* color will be dynamic */}
						<div className="bg-[#49C4E5] h-[15px] w-[15px] rounded-full mr-4 mt-1" />{" "}
						{/* column names will be dynamic */}
						TODO (1)
					</h1>
					{/* task cards will be dynamic */}
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
				</div>
				<div className="">
					<h1 className="flex p-4">
						{/* color will be dynamic */}
						<div className="bg-[#49C4E5] h-[15px] w-[15px] rounded-full mr-4 mt-1" />{" "}
						{/* column names will be dynamic */}
						TODO (1)
					</h1>
					{/* task cards will be dynamic */}
					<TaskCard />
					<TaskCard />
					<TaskCard />
					<TaskCard />
				</div>
			</div>
		);
	}
};
export default Board;
