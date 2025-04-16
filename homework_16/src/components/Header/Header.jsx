import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Header = () => {
    return (
        <header>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6">
                        My Material UI App
                    </Typography>
                </Toolbar>
            </AppBar>
        </header>
    )
};

export default Header;