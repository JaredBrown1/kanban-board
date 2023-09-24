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
				<main className="min-h-screen flex flex-col items-center bg-[#E4EBFA]">
					{children}
				</main>
			</body>
		</html>
	);
}
