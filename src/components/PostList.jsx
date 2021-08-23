import React from 'react';
import PostItem from "./PostItem";

const PostList = ({posts}, {title}) => {
    return (
        <div>
            {title}
            {posts.map((post, index) =>
                <PostItem post={post} number={index + 1} key={post.id}/>)}
        </div>
    );
};

export default PostList;