import "./globals.css";

import Navbar from "@/app/components/navbar/Navbar";

export const metadata = {
	title: "Kanban Board App",
	description: "An app to help manage your projects",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="min-h-screen flex flex-col items-center bg-blue-50">
					{children}
				</main>
			</body>
		</html>
	);
}

// Ideal component layout for board:
// <Board> -> <Column> -> <TaskCard>

// Boards will have their own columns and tasks unique to them
