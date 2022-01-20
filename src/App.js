// import './App.css';
//
// import Users from "./Component/users/Users";
//
//
//
// function App() {
// // const [greeting, setGreeting]=useState('hellp')
// //
// //     const adder = () => {
// //         setGreeting(greeting+'!')
// //         console.log(greeting);
// //     }
//
//
//     return (
//         <div>
//            {/*<button onClick={adder}>click</button>*/}
//            {/* {greeting}*/}
//             <Users/>
//         </div>
//     );
// }
//
// export default App;src
import React, {useEffect, useState} from 'react';
import {userService} from "./services/user.service";
import User from "./Component/users/User";

const App = () => {

    // const [form, setForm] = useState({name: '', age:1})

    const [users, setUsers] = useState([])
    const [userId, setUserId] = useState(0)
    const [user, setUser] = useState(null)


    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    const send = (event) => {
        event.preventDefault() // сторінка не оновлюється

        userService.getById(userId)
            .then(value => setUser(value))
    }

    const formHandler = (event) => {
        const id = event.target.value

       setUserId(id)
    }

    return (
        <div>
            <form onSubmit={send}>
                <select name={'user'} value={userId} onChange={formHandler}>
                    {users.map(value => <option key={value.id} value={value.id}>{value.id} -- {value.name}</option>)}
                </select>
                <button>Click</button>
            </form>
            {user && <User user={user}/>}
        </div>
    );
};

export default App;

// import React, {createRef} from 'react';
//
// const App = () => {
//
//     const name = createRef()
//     const age = createRef()
//
//     const send = (e) => {
//       e.preventDefault()
//         console.log(name.current.value);
//         console.log(age.current.value);
//     }
//
//     return (
//         <div>
//             <form onSubmit={send}>
//                 <div><label>Name:
//                     <input
//                         type="text"
//                         name={'name'}
//                         ref={name}
//                     />
//
//                 </label></div>
//                 <div><label>Age:
//                     <input
//                         type="number"
//                         name={'age'}
//                         ref={age}
//                     />
//                 </label></div>
//                 <button>Click</button>
//             </form>
//
//         </div>
//     );
// };
//
// export default App;