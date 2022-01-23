import React from 'react';

const UserDetails = ({name: {id, name, username, email, address, phone, website}, getPostUserId}) => {

    return (
        <div className={'users'}>
            <ul>
                <li>{id}</li>
                <li>{name}</li>
                <li>{username}</li>
                <li>{email}</li>
                <li>{address.street}</li>
                <li>{address.city}</li>
                <li>{phone}</li>
                <li>{website}</li>
                <button onClick={()=>{getPostUserId(id)}}>Posts</button>

            </ul>
        </div>
    );
};

export default UserDetails;