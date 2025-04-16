import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import DialogWindow from '../DialogWindow/DialogWindow';

const MainComponent = () => {

    return (
        <main>
            <Container>
                <Typography variant="h4" sx={{ mt: 3 }}>
                    Добро пожаловать в наше приложение!
                </Typography>
                <DialogWindow />
            </Container>
        </main>
    )
};

export default MainComponent;