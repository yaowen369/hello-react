import './App.css';

export default function MyApp() {
  return (
      <div>
        <h1>欢迎来到我的应用1</h1>
        <MyButton />
      </div>
  )
}

function MyButton() {
  return (
      <button>我是一个按钮</button>
  )
}
