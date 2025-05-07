import {getImageUrl} from "./Utils";
// import './learn_props/style.css'


export default function Profile() {
    return (
        <Card>
            <Avatar
            size={100}
            person={{
                name: 'Katsuko Saruhashi2',
                imageId: 'YfeOqp2'
            }}
            />
        </Card>

    );
}

function Avatar({person, size}) {
    return (
        <img
        className="avatar"
        src={getImageUrl(person)}
        alt={person.name}
        width={size}
        height={size}
        />
    );
}

function Card({children}) {
    return (
        <div className="card">
            {children}
        </div>
    );
}
