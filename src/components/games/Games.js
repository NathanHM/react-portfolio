import { Outlet } from "react-router";
import Sidebar from "../../features/sidebar/Sidebar";

export default function Games() {
    return (<>
        <Sidebar page='games' />
        <div className="content">
            <Outlet />
        </div>
    </>)
}