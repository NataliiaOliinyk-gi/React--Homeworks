import { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const DialogWindow = () => {

    const [open, setOpen] = useState(false);
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Button
                variant="contained"
                sx={{ margin: "20px 0", padding: "8px 30px" }}
                onClick={handleClickOpen}>
                Открыть диалоговое окно
            </Button>
            <Dialog
                fullScreen={fullScreen}
                open={open}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    {"Использовать Material UI?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Это простое React приложение с использованием Material UI.
                        Вы можете настроить его по своему усмотрению
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={handleClose}>
                        Отмена
                    </Button>
                    <Button onClick={handleClose} autoFocus>
                        Согласен
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    )
};

export default DialogWindow;