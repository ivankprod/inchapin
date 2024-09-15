import { ScreenTop, ScreenBottom } from "@sections/home";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles.main}>
			<ScreenTop />
			<ScreenBottom />
		</main>
	);
}
