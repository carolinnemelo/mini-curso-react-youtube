import styles from "./Container.module.css"

function Container({ children }) {
    return (
        <section className={styles.container}>
            {children}
        </section> /*section acomoda conteudos*/
    );
}

export default Container;