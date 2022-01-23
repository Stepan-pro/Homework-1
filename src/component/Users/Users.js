import React, {useEffect, useState} from 'react';

import {userService} from "../../services/user.services";
import User from "./User/User";
import UserDetails from "./UserDetails/UserDetails";
import Post from "../Post/Post";

const Users = () => {

    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [user, setUser] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))

    }, [])

    const getUserID = (id) => {
        userService.getUserId(id)
            .then(value => setUser(value))
    }

    const getPostUserId = (id) => {
        userService.getPostsUserId(id)
            .then(value => setPosts(value))
    }
    return (
        <div>
            <div className={'disFlex'}>
                <div className={'item'}>{users.map(value => <User key={value.id} user={value}
                                                                  getUserId={getUserID}/>)}</div>
                <div className={'users'}>{user &&
                <UserDetails key={user.id} name={user} getPostUserId={getPostUserId}/>}</div>
            </div>
            <div>{posts && posts.map(item => <Post key={item.id} post={item}/>)}</div>

        </div>

    );
};

export default Users;