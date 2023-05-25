import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import './addUser.css';

export default function AddUsers() {

    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        if (username.trim().length === 0 || userAge.trim().length === 0  || +userAge < 1){
            return;
        }
        console.log(userAge, username);
        setUserAge('');
        setUsername('');
    }

    function userInputHandler(event) {
        setUsername(event.target.value);
    }

    function ageInputHandler(event) {
        setUserAge(event.target.value);
    }
    return (
        <Card className='input'>
            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Enter Username</label>
                <input id="username" type="text" onChange={userInputHandler} value={username} />
                <label htmlFor="age">Enter Age (year) </label>
                <input id="age" type="number" onChange={ageInputHandler}  value={userAge}/>
                <Button type='submit'>Add User</Button>
            </form>
        </Card>
    )
}