import React, { useState } from 'react';
import Card from '../UI/Card';
import classes from './UsersList.module.css'
function UsersList(props) {
    const { users } = props;

    return (
        <Card className={classes.users}>
            <ul>
                {users.map(user => {
                    return (

                        <li
                            key={user.id}
                            style={{ color: 'red', fontWeight: '700' }}>
                            your name is :{user.name} ______And your age is :{user.age} years old
                        </li>)
                })}
            </ul>
        </Card>
    );
}

export default UsersList;