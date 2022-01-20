import {useEffect, useState} from "react";

import User from "./User";
import {userService} from "../../services/user.service";

const Users = () => {

    const [users, setUsers] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, [])

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    }

    return (
        <div>
            {user && <div>{user.id} -- {user.name} -- {user.email}</div>}
            <div>{users.map(value => <User key={value.id} user={value} getUserId={getUserId}/>)}</div>
        </div>
    )
}

export default Users