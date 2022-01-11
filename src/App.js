import './App.css';
import Posts from "./Component/Posts/Posts";
import Comments from "./Component/Comments/Comments";
import Users from "./Component/Users/Users";

function App() {
    return (
        <div>
            <div className={'comPost'}>
                <Users/>
                <Posts/>
            </div>
            <Comments/>

        </div>
    );
}

export default App;
