import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Watch from "./pages/Watch";
import ToDo from "./pages/Todo";

function AppRoutes() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/"
					element={<Home />}></Route>
				<Route
					path="/watch"
					element={<Watch />}></Route>
				<Route
					path="/todo"
					element={<ToDo />}></Route>
			</Routes>
		</BrowserRouter>
	);
}

export default AppRoutes;
