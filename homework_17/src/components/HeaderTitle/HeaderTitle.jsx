import { Typography } from "@mui/material";

import { useSwitchTheme } from "../../context/Theme";

const HeaderTitle = () => {

    const { currentTheme } = useSwitchTheme();

    return (
        <Typography variant='h2' gutterBottom>
            {currentTheme === 'light' ? 'Light' : 'Dark'} Mode
        </Typography>
    )
};

export default HeaderTitle;