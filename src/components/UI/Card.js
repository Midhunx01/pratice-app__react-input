import './card.css';

export default function Card(props){
    return (
        <div className={`${'cardStyle'} ${props.className}`}>
            {props.children}
        </div>
    )
}