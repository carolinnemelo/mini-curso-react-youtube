import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Watch.module.css";
import Footer from "../../components/Footer";

function Watch() {
	return (
		<>
			<Header />
			<Container>
				<section className={styles.watch}>
					<h1>Assistir</h1>
				</section>
			</Container>
            <Footer />
		</>
	);
}

export default Watch;
