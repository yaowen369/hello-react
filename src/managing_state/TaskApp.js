import {useState} from "react";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

export default function TaskApp() {
    const [tasks, setTasks] = useState(initialTasks);

    function handleAddTask(text) {
        setTasks([
            ...tasks,
            {
                id:nextId++,
                text,
                done:false,
            },
        ]);
    }

    /**
 * 处理任务变更的函数
 * 当任务列表中的任务发生变化时调用此函数，以更新任务列表
 * @param {Object} task - 发生变更的任务对象，包含任务的详细信息
 */
function handleChangeTask(task) {
    // 使用map方法遍历所有任务，寻找并更新与传入任务ID匹配的任务
    setTasks(tasks.map( (t) => {
        // 如果当前任务的ID与传入的任务ID相匹配，则用新的任务对象替换原有任务对象
        if (t.id === task.id) {
            return task;
        } else {
            // 对于ID不匹配的任务，保持不变
            return t;
        }
    }));
}


    function handleDeleteTask(taskId) {
        setTasks(tasks.filter((t) => t.id !== taskId));
    }





    return (
        <>
            <h1>布拉格的行程安排</h1>
            <AddTask onAddTask={handleAddTask}/>
            <TaskList
                tasks = {tasks}
                onChangeTask={handleChangeTask}
                onDeleteTask={handleDeleteTask}
            />
        </>
    );
}


let nextId = 3;
const initialTasks = [
    {id: 0, text: '参观卡夫卡博物馆', done: true},
    {id: 1, text: '看木偶戏', done: false},
    {id: 2, text: '打卡列侬墙', done: false},
];
