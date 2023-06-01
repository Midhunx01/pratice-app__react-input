import { useState } from 'react';

import Button from '../UI/Button';
import Card from '../UI/Card';
import './addUser.css';
import { ErrorModal} from '../UI/ErrorModal';

export default function AddUsers(props) {

    const [username, setUsername] = useState('');
    const [userAge, setUserAge] = useState('');
    const [error, setError] = useState('');

    function onSubmitHandler(event) {
        event.preventDefault();
        if (username.trim().length === 0 || userAge.trim().length === 0 || +userAge < 1) {
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid username & age'
            })
            return;
        }
        props.addUsers(username, userAge);
        setUserAge('');
        setUsername('');
    }

    function userInputHandler(event) {
        setUsername(event.target.value);
    }

    function ageInputHandler(event) {
        setUserAge(event.target.value);
    }

    function errorHandler(){
        setError(null);
    }
    return (
        <>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler} />}
            <Card className='input'>
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Enter Username</label>
                    <input id="username" type="text" onChange={userInputHandler} value={username} />
                    <label htmlFor="age">Enter Age (year) </label>
                    <input id="age" type="number" onChange={ageInputHandler} value={userAge} />
                    <Button type='submit'>Add User</Button>
                </form>
            </Card>
        </>
    )
}