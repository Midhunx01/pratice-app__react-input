import Card from '../UI/Card';
import './userlist.css';

export default function UserList(props) {
    return (
        <Card className='users' >
            <ul>
                {props.users.map((user) => {
                    return (
                        <li key={user.id}>
                            {user.username} ({user.userAge} years old)
                        </li>
                    )

                })}
            </ul>
        </Card>
    )
}