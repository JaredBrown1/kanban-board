import "./globals.css";

import Navbar from "@/components/navbar/Navbar";

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
				<main className="min-h-screen flex flex-col items-center">
					{children}
				</main>
			</body>
		</html>
	);
}
