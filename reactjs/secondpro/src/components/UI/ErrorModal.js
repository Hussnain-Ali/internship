import React from 'react';
import Button from './Button';
import Card from './Card';
import classes from './ErrorModal.module.css'
function ErrorModal(props) {
    const { title, message, onHandlerError } = props;
    return (
        <div>
            <div className={classes.backdrop} onClick={onHandlerError} />
            <Card className={classes.modal}>
                <header className={classes.header}>
                    <h2>
                        {title}
                    </h2>
                </header>
                <div className={classes.content}>
                    <p>{message}</p>
                </div>
                <footer className={classes.actions}>
                    <Button onClick={onHandlerError}>Okkay</Button>
                </footer>
            </Card>
        </div>
    );
}

export default ErrorModal;