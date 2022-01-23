import React from 'react';

const Post = ({post:{id, userId, title, body}}) => {
    return (
        <div>
            {id} --- {userId} --- {title} -- {body}
        </div>
    );
};

export default Post;