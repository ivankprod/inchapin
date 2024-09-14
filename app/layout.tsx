import type { Metadata } from "next";

import { proximaNova } from "@fonts";
import { Header } from "@components";
import { Container } from "@shared/ui/components";

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
			<body className={proximaNova.className}>
				<div className="root">
					<Header />
					<Container>{children}</Container>
				</div>
			</body>
		</html>
	);
}
