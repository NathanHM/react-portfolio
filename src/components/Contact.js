import { Link } from "react-router-dom";

export default function Contact() {
    return (<>
        <div className="content">
            <h3>Contact Information</h3>
            <h4>Email - NathanHM16@gmail.com</h4>
            <h4>GitHub - <Link to='https://github.com/NathanHM' target="_blank">github.com/NathanHM</Link></h4>
        </div>
    </>)
}