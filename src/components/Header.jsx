import Link from "./Link.jsx";
import Logo from "./Logo.jsx";
import routers from "../helpers/routers.js";
import ChangeColor from "./ChangeColor.jsx";

function Header() {
    return (
            <header className="flex justify-between  align-items-center">
                <Logo />
                <ul className="flex grow-1 gap-2">
                    <li className="m-1">
                        <Link  to={routers.main}>Home</Link>
                    </li>
                    <li className="m-1">
                        <Link  to={routers.about}>About</Link>
                    </li>
                    <li className="m-1">
                        <Link  to={routers.contact}>Contact</Link>
                    </li>
                    <li className="m-1">
                        <Link  to={routers.todo}>Todo</Link>
                    </li>
                </ul>
                <ChangeColor />
            </header>
    )
}

export default Header
