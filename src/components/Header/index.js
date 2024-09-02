import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
    return (
			<header className={styles.header}>
				<Link to="/">
					<span>Movies</span>
				</Link>
				<nav>
                    <Link to='/'>Home</Link>
                    <Link to="/watch">Watch</Link>
                    <Link to="/todo">To Do</Link>

				</nav>
			</header>
		);
}

export default Header;