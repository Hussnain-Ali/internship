import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button.js'
import classes from './AddUser.module.css'
import ErrorModal from '../UI/ErrorModal';
import Wrapper from '../Helper/Wrapper';
function AddUsers(props) {
    const [username, setUserName] = useState('')
    const [userAge, setUserAge] = useState('')
    const [error, setError] = useState()
    const addUserHandler = (event) => {

        event.preventDefault();
        if (username.trim().length === 0 || userAge.trim().length === 0) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values)'
            })
            return;

        }
        if (+userAge < 1) {
            setError({
                title: 'Invalid age',
                message: 'Please enter a valid age(> 0)'
            })
            return;

        }
        props.onAddUser(username, userAge)
        setUserName('')
        setUserAge('')

    }
    const usernameChnagehandler = event => {
        setUserName(event.target.value)
    }
    const userAgeChangeHandler = event => {
        setUserAge(event.target.value)
    }
    const errorHandler = () => {
        setError(null);
    }


    return (
        <Wrapper>
            {error &&
                <ErrorModal
                    title={error.title}
                    message={error.message}
                    onHandlerError={errorHandler}
                />}

            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor='username'>User Name</label>

                    <input id='usrname' value={username} type='text' onChange={usernameChnagehandler} />
                    <label htmlFor='age'>Age (Years)</label>
                    <input id='age' value={userAge} type='number' onChange={userAgeChangeHandler} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </Wrapper>
    );
}

export default AddUsers;