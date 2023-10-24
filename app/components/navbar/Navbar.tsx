import Image from "next/image";

const Navbar = () => {
	return (
		<div className="flex flex-shrink-0 justify-between w-screen h-[64px] pt-2 bg-white">
			<div className="flex cursor-pointer h-[25px]">
				<div className="pl-4 pt-4">
					<Image src="/logo-mobile.svg" width={24} height={25} alt="logo" />
				</div>

				<h1 className="flex pt-4 pl-4 text-lg font-bold">
					Platform Launch
					<span className="mt-2 pl-2">
						<Image
							src="/icon-chevron-down.svg"
							width={8}
							height={4}
							alt="down arrow"
						/>
					</span>
				</h1>
			</div>
			<div className="flex pt-4 pb-4">
				<button className="w-[48px] h-[32px] bg-[#635FC7] rounded-2xl pl-[19px] opacity-[0.25]">
					<span>
						<Image
							src="/icon-add-task-mobile.svg"
							width={10}
							height={10}
							alt="add column"
						/>
					</span>
				</button>
				<div className="p-2">
					<Image
						src="/icon-vertical-ellipsis.svg"
						width={4}
						height={16}
						alt="user"
					/>
				</div>
			</div>
		</div>
	);
};
export default Navbar;
