import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Games from "../components/games/Games";
import Algorithms from "../components/Algorithms";
import Projects from "../components/projects/Projects";
import RedditClient from "../components/projects/RedditClient";
import Mario from "../components/projects/Mario";
import TicTacToe from "../components/games/ticTacToe/TicTacToe";
import Minesweeper from "../components/games/minesweeper/Minesweeper";
import Chess from "../components/games/Chess";
import { Navigate } from "react-router-dom";

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route index element={<Navigate to="home" />} />
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="games" element={<Games />}>
            <Route index element={<Navigate to="tic-tac-toe" />} />
            <Route path="tic-tac-toe" element={<TicTacToe />} />
            <Route path="minesweeper" element={<Minesweeper />} />
            <Route path="chess" element={<Chess />} />
        </Route>
        <Route path="algorithms" element={<Algorithms />} />
        <Route path="algorithms/:algorithm" element={<Algorithms />}>
        </Route>
        <Route path="projects" element={<Projects />} >
            <Route index element={<Navigate to="reddit-client" />} />
            <Route path="reddit-client" element={<RedditClient />} />
            <Route path="bbrl" element={<Mario />} />
            <Route path="viarama" />
        </Route>
    </Route>
))

function App() {
    return (
        <RouterProvider router={appRouter} />
    );
}

export default App;
