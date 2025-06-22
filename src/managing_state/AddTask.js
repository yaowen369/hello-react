import {useState} from "react";
import ButtonClick from "../learn_list/ButtonClick";

export default function AddTask({onAddTask}) {
    const [text, setText] = useState('');

    return (
        <>
            <input
                placeholder="添加任务"
                value={text}
                onChange={(e) => setText(e.target.value)}
            />

            <button
                onClick={() => {
                    setText('');
                    onAddTask(text);
                }}
            >
                添加
            </button>
        </>
    );
}
