import {useContext} from "react";
import clsx from 'clsx';
import {ThemeContext} from "../helpers/context.js";

function Logo() {
    const [colorState] = useContext(ThemeContext);
    const className = clsx('m1 ', {
        ['text-orange-400']: colorState.color === 'green',
        ['text-blue-400']: colorState.color === 'blue',
    });
    console.log(clsx({
        ['text-orange-400']: colorState.color === 'green',
        ['text-blue-400']: colorState.color === 'blue'
    }));

    return (
        // <div className={`m-1 text-orange-600 ${colorState.color === 'orange' ? 'text-orange-600' : 'text-blue-950'}`}>
        <div className={className}>
            Logo
        </div>
    )
}
export default Logo
