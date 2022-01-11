import {useEffect, useState} from "react";
import Comment from "./Comment/Comment";

const Comments = () => {

    const [comments, setComments] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => setComments(value))
    },[])

  return(
      <div>
          {comments.map(value => <Comment
          name={value.name}
          email={value.email}
          body={value.body}
          id={value.id}
          />)}
      </div>
  )
}

export default Comments