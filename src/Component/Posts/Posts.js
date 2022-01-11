import {useEffect, useState} from "react";
import Post from "./Post/Post";

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => setPosts(value))
    },[])

    return (
        <div className={'Items'}>
            {posts.map(value => <Post
            id={value.id}
            title={value.title}
            body={value.body}
            />)}
        </div>
    )
}

export default Posts