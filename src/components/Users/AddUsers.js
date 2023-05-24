import  Card from '../UI/Card';
import './addUser.css';

export default function AddUsers(){

    function onSubmitHandler(event){
        event.preventDefault();
    }
    return (
        <Card className='input'>
        <form onSubmit={onSubmitHandler}>
            <label htmlFor="username">Enter Username</label>
            <input id="username" type="text"/>
            <label htmlFor="age">Enter Age (year) </label>
            <input id="age" type="number"/>
            <button>Add User</button>
        </form>
        </Card>
    )
}