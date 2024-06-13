import styles from "./Header.module.css";

function Header() {
    return (
        <header className={styles.header}>
            <span>Movies</span>
            <nav>
                <a href="#">Home</a>
                <a href="#">Watch</a>


            </nav>
        </header>
    );
}

export default Header;