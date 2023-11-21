import littlelemon_logo from "../assets/images/littlelemon_logo.png"
import { NavLink } from "react-router-dom";

const Nav = () => {
    return (
        <nav>
            <img src={littlelemon_logo} alt="Little Lemon Logo" ></img>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Menu</li>
                <NavLink to="/reservations">Reservations</NavLink>
                <li>Order Online</li>
                <li>Login</li>

            </ul>
        </nav>
    )
}

export default Nav;