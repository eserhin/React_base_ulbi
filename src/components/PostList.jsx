import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if (!posts.length) {
        return <h1 style={{textAlign: 'center'}}>Постов нет</h1>
    }
    return (
        <div>
            {title}
            {posts.map((post, index) =>
                <PostItem post={post} number={index + 1} key={post.id} remove={remove}/>)}
        </div>
    );
};

export default PostList;