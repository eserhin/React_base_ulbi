import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: 'JS1', body: "Post number1"},
        {id: '2', title: 'JS2', body: "Post number2"},
        {id: '3', title: 'JS3', body: "Post number3"}
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            {posts.length === 0 ?
                <div>Постов нет</div> :
                <PostList posts={posts} title="Список постов 1" remove={removePost}/>}
        </div>
    );
}

export default App;
