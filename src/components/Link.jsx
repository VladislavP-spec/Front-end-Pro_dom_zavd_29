import {useContext} from 'react'
import {NavLink} from 'react-router-dom'
import {ThemeContext} from "../helpers/context.js";
function Link (props) {
    const { href, to, children } = props;
    const [colorState] = useContext(ThemeContext);
    // console.log()
    return href
            ? (
                <a
                    href={href}
                    className="hover:underline"
                    style ={{color: colorState.color, backgroundColor: colorState.backgroundColor }}>
                    {children}
                </a>
            )
            : (
                <NavLink
                    to={to}
                    className="hover:underline"
                    style ={{color: colorState.color, backgroundColor: colorState.backgroundColor }}>
                    {children}
                </NavLink>
            )
}
export default Link
