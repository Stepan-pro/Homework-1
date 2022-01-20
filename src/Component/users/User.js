import React from 'react';

const User = ({user: {name, id, email}, getUserId}) => {
    return (
        <div>
            {id} -- {name} -- {email}
            <button onClick={() => getUserId(id)}>click</button>
        </div>
    );
};

export default User;