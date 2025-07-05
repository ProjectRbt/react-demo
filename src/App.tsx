import './App.css'
import MyButton from "./components/my-button/MyButton.tsx";
import User from "./components/user/User.tsx";

function App() {

  return (
    <div>
        <h1>欢迎来到我的应用</h1>
        <MyButton/>
        <br/>
        <User/>
    </div>
  )
}

export default App
