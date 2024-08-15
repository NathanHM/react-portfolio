import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from "react-router-dom";
import Root from "./Root";
import Home from "../components/Home";
import Contact from "../components/Contact";
import Games from "../components/Games";
import Algorithms from "../components/Algorithms";
import Projects from "../components/Projects";

const appRouter = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Root />}>
        <Route path="home" element={<Home />} />
        <Route path="contact" element={<Contact />} />
        <Route path="games" element={<Games />} />
        <Route path="games/:game" element={<Games />} />
        <Route path="algorithms" element={<Algorithms />} />
        <Route path="algorithms/:algorithm" element={<Algorithms />} />
        <Route path="projects" element={<Projects />} />
        <Route path="projects/:project" element={<Projects />} />
    </Route>
))

function App() {
    return (
        <RouterProvider router={appRouter} />
    );
}

export default App;
