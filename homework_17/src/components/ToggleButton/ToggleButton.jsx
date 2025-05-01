
import Button from "../Button/Button";

import { useSwitchTheme } from "../../context/Theme";

const ToggleButton = () => {

    const { nextTheme, toggleTheme } = useSwitchTheme();

    return (
        <Button onClick={toggleTheme} variant="contained">
            To {nextTheme} theme
        </Button>
    )
};

export default ToggleButton;