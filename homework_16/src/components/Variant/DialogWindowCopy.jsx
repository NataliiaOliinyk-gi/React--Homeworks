
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

const DialogWindowCopy = ({ open, handleClose, fullScreen }) => {

    return (
        <Dialog
            fullScreen={fullScreen}
            open={open}
            onClose={handleClose}
            disableRestoreFocus
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
    )
};

export default DialogWindowCopy;