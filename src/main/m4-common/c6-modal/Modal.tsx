import React from 'react';
import {createStyles, Theme, withStyles, WithStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {ItemType} from '../types/Types';

const styles = (theme: Theme) =>
    createStyles({
        root: {
            margin: 0,
            padding: theme.spacing(2),
        },
        closeButton: {
            position: 'absolute',
            right: theme.spacing(1),
            top: theme.spacing(1),
            color: theme.palette.grey[500],
        },
    });

export interface DialogTitleProps extends WithStyles<typeof styles> {
    id: string;
    children: React.ReactNode;
    onClose: () => void;
}

const DialogTitle = withStyles(styles)((props: DialogTitleProps) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme: Theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme: Theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


type PropsType = {
    open: boolean
    handleClose: () => void
    currentItem: ItemType

}
export const ModalInfo: React.FC<PropsType> = ({open, handleClose, currentItem}) => {

    const onHandleClose = () => {
        handleClose();
    };


    return (
        <div>
            <Dialog onClose={onHandleClose} aria-labelledby="customized-dialog-title" open={open}>
                <DialogTitle id="customized-dialog-title" onClose={onHandleClose}>
                    Product details
                </DialogTitle>
                <DialogContent dividers>
                    <Typography gutterBottom>
                        {currentItem ? currentItem.title + ' Ang Lorem Ipsum ay ginagamit na ' +
                            'modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging regular ' +
                            'na modelo simula pa noong 1500s, noong may isang di kilalang manlilimbag and kumuha ng galley ' +
                            ' at kamakailan lang sa mga desktop publishing software tulad ' +
                            'ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.' : 'hey'}
                    </Typography>
                    <Typography gutterBottom>
                        {currentItem ? currentItem.title + ' Ang Lorem Ipsum ay ginagamit na ' +
                            'modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging regular ' +
                            'to hindi lang limang siglo, kundi nalagpasan din nito ang paglaganap ng electronic typesetting at nanatili' +
                            'ng parehas. Sumikat ito noong 1960s kasabay ng pag labas ng Letraset sheets na mayroong mga talata ng Lorem Ipsum,' +
                            ' at kamakailan lang sa mga desktop publishing software tulad ' +
                            'ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.' : 'hey'}
                    </Typography>
                    <Typography gutterBottom>
                        {currentItem ? currentItem.title + ' Ang Lorem Ipsum ay ginagamit na ' +
                            'modelo ng industriya ng pagpriprint at pagtytypeset. Ang Lorem Ipsum ang naging regular ' +
                            'ng parehas. Sumikat ito noong 1960s kasabay ng pag labas ng Letraset sheets na mayroong mga talata ng Lorem Ipsum,' +
                            ' at kamakailan lang sa mga desktop publishing software tulad ' +
                            'ng Aldus Pagemaker ginamit ang mga bersyon ng Lorem Ipsum.' : 'hey'}
                    </Typography>
                </DialogContent>
                <DialogActions>
                    <Button autoFocus onClick={onHandleClose} color="primary">
                        Back
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};
