import {useState} from "react";
import './styles.css'

export default function Chat({contact}) {
    const [text, setText] = useState('');

    return (
        <section className="chat">
            <textarea
                value={text}
                placeholder={'Chat to ' + contact.name}
                onChange={ (e) => setText(e.target.value)}
            />
            <br />
            <button>发送给 {contact.email}</button>
        </section>
    );
}
