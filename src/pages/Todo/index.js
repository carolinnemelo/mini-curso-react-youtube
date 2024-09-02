import Header from "../../components/Header";
import Container from "../../components/Container";
import styles from "./Todo.module.css";
import Footer from "../../components/Footer";
import { useState } from "react";

function ToDo() {
	const [todos, setTodos] = useState([]);

	const handleAdd = () => {
		const todoText = prompt("Add todo: ");
		const newTodos = [...todos, { text: todoText, isOn: true }];
		setTodos(newTodos);
	};

    const handleToggle = (index) => {
        const newTodos = todos.map((todo, i) => {
            if (i === index) {
                return { ...todo, isOn: !todo.isOn };
            }
            return todo;
        });
        // setIsOn(() => !isOn)
        setTodos(newTodos);
    };
    
	function ToggleButton({ index, handleToggle, isOn }) {

		return (
			<button onClick={() => handleToggle(index)}>
				{" "}
				{isOn ? "on" : "off"}
			</button>
		);
	}

	return (
		<>
			<Header />
			<Container>
				<section className={styles.todo}>
					<h1>My todos</h1>
					<button onClick={handleAdd}>+ add</button>

					<ul>
						{todos.map((todo, index) => {
							return (
								<>
									<li
										key={index}
										className={todo.isOn ? "" : styles.strikethrough}>
										{todo.text}
									</li>
									<ToggleButton
										index={index}
										handleToggle={handleToggle}
										isOn={todo.isOn}
									/>
								</>
							);
						})}
					</ul>
				</section>
			</Container>
			<Footer />
		</>
	);
}

export default ToDo;
