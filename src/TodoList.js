// import './todoList.css'

const person = {
    name: 'Gregoria Y.zara',
    theme: {
        backgroundColor: 'black',
        color: 'pink'
    }
};

export default function TodoList() {
    return (
        <div style={person.theme}>
            <h1>{person.name}`s Todos</h1>
            <img className="avatar"
                src="https://i.imgur.com/n7hB7PM.jpeg"
                 alt="Gregproa Y.zara"
            />
            <ul>
                <li>Improve the videophone</li>
                <li>Prepare aeronautics lectures</li>
                <li>Work on the alcohol-fuelled engine</li>
            </ul>
        </div>
    );
}


