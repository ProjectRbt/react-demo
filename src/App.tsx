import './App.css'
import MyButton from "./components/my-button/MyButton.tsx";
import User from "./components/user/User.tsx";
import MyUser from "./components/user/MyUser.tsx";

function App() {

    const isUser = true
    let content
    if (isUser){
        content = <MyUser/>
    }else {
        content = <User/>
    }

    return (
        <div>
            <h1>欢迎来到我的应用</h1>
            <MyButton/>
            <br/>
            {content}
        </div>
    )
}

export default App
