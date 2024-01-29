import {useContext} from 'react';
import {ThemeContext} from "../helpers/context.js";

function ChangeColor() {
    const [color, setColor] = useContext(ThemeContext);
    const handleClick = () => {
        setColor({
            color: color.color === 'blue' ? 'green': 'blue',
            // backgroundColor: color.backgroundColor === 'grey' ? 'yellow': 'grey'
        })
    }

    return <button onClick={handleClick}>Toggle Color</button>
}
export default ChangeColor;