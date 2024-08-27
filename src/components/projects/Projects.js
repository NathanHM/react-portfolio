import { Outlet } from "react-router";
import Sidebar from "../../features/sidebar/Sidebar";

export default function Projects() {



    return (<>
        <Sidebar page='projects' />
        <div className="content">
            <Outlet />
        </div>
    </>
    )
}