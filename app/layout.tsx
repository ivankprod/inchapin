import type { Metadata } from "next";
import { proximaNova } from "@fonts";

import "./globals.scss";

export const metadata: Metadata = {
	title: {
		default: "INCHAPIN",
		template: "%s - INCHAPIN"
	},
	description: "Test project"
};

export default function RootLayout({
	children
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="ru">
			<body className={proximaNova.variable}>{children}</body>
		</html>
	);
}
