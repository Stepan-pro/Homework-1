import React from 'react';

const User = ({user: {name, id}, getUserId}) => {
    return (
        <div className={'users'}>
            <div>
                {id}) {name}
            </div>
            <button onClick={() => getUserId(id)}>Details</button>
        </div>

    );
};

export default User;