
interface MyButtonProps {
    title:string;
    disable:boolean;
}

function MyButton({title,disable}: MyButtonProps) {
    return <button disabled={disable}>{title}</button>;
}

export default function MyApp() {
    return (
        <div>
            <h1>欢迎来到我的应用</h1>
            <MyButton disable={true} title="我是一个按钮1" />
        </div>
    );
}
