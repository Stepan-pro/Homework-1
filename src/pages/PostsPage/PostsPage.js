import React, {useEffect, useState} from 'react';
import {Outlet, useSearchParams} from "react-router-dom";

import {postsService} from "../../services/posts.service";
import Post from "../../component/Post/Post";


const PostsPage = () => {

    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useSearchParams()

    useEffect(()=>{
        postsService.getAll().then(value => {
            const title =query.get('title')
            let filter = [...value]
            if(title){
                filter = value.filter(post => post.title.includes(title))
            }
            setPosts(filter)
        })

    },[query])

    const submit = (e) =>{
        e.preventDefault()
        setQuery({title: e.target.search.value})
    }

    return (
        <div>
            <form onSubmit={submit}>
                <input type="search" name={'search'}/>
                <button>Search</button>
            </form>
            {posts.map(post=> <Post post={post}/>)}
            <div><Outlet/></div>
        </div>
    );
};

export default PostsPage;