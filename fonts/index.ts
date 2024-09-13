import localFont from "next/font/local";

export const proximaNova = localFont({
	src: [
		{
			path: "./ProximaNova-Light.woff2",
			weight: "200"
		},
		{
			path: "./ProximaNova-Regular.woff2",
			weight: "400"
		},
		{
			path: "./ProximaNova-Semibold.woff2",
			weight: "700"
		},
		{
			path: "./ProximaNova-Bold.woff2",
			weight: "900"
		}
	],
	variable: "--font-proxima-nova"
});
