import { Outlet } from "react-router";
import Header from "../features/Header";
import Footer from "../features/Footer";


export default function Root() {
    return (
        <div className="App">
            <header>
                <Header />
            </header>

            <div className="banner">
                <div className="banner-content">
                    <h1>NathanHM</h1>
                    <h2>.com</h2>
                </div>
            </div>

            <div className="content-case">
                <div className="content">
                    <div className='container'>
                        <Outlet />
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
        </div>
    )
}