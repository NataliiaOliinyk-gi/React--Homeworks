import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import useMediaQuery from '@mui/material/useMediaQuery';

import DialogWindowCopy from './DialogWindowCopy';

import AlertDialog from './AlertDialog/AlertDialog';
import DraggableDialog from './DraggableDialog/DraggableDialog';

const MainComponentCopy = () => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const buttonRef = useRef(null);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
        setTimeout(() => {
            buttonRef.current?.focus();
        }, 0);
    };

    useEffect(() => {
        if (!open) {
            // Додатковий setTimeout — на випадок, якщо MUI ще не прибрав aria-hidden
            const timer = setTimeout(() => {
                buttonRef.current?.focus();
            }, 150);

            return () => clearTimeout(timer);
        }
    }, [open]);

    return (
        <main>
            <Container>
                <Typography variant="h4" sx={{ mt: 3 }}>
                    Добро пожаловать в наше приложение!
                </Typography>
                <Button onClick={handleClickOpen}
                    ref={buttonRef}
                    variant="contained"
                    sx={{ margin: "20px 0", padding: "8px 30px" }}>
                    Открыть диалоговое окно
                </Button >
                <DialogWindowCopy
                    open={open}
                    handleClose={handleClose}
                    fullScreen={fullScreen} />

                <div>
                    <AlertDialog />
                    <DraggableDialog />
                </div>

            </Container>
        </main>
    )
};

export default MainComponentCopy;