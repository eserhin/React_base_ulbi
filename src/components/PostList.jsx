import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            {title}
            {posts.map((post, index) =>
                <PostItem post={post} number={index + 1} key={post.id} remove = {remove}/>)}
        </div>
    );
};

export default PostList;