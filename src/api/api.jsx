import React from 'react'
import UserPost from './endpoints/UserPost';
import Token from './endpoints/Token';
import PhotoPost from './endpoints/PhotoPost';

const Api = () => {
    return (
        <div>
            <h3>User Post</h3>
            <UserPost />

            <h3>Token Post</h3>
            <Token />

            <h3>Photo Post</h3>
            <PhotoPost />
        </div>
    )
}

export default Api;
