import Link from "./Link.jsx";
import routers from "../helpers/routers.js";
function Footer() {
    return (
        <footer className="bg-white rounded-lg  m-4 ">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    <Link href="tel:+380689876177">Телефонний номер: +380689876177</Link>
                </span>
                <ul className="flex flex-wrap items-center mt-3 ">
                    <li className="px-1">
                        <Link to={routers.main}>Home</Link>
                    </li>
                    <li className="px-1">
                        <Link to={routers.about}>About</Link>
                    </li>
                    <li className="px-1">
                        <Link to={routers.contact}>Contact</Link>
                    </li>
                    <li className="px-1">
                        <Link to={routers.todo}>Contact</Link>
                    </li>
                </ul>
            </div>
        </footer>
    )
}
export default Footer
