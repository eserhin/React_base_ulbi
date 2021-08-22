import React, {useState} from 'react';
import './components/styles/App.css'
import PostList from "./components/PostList";
function App() {
    const [posts, setPosts ] = useState([
        {id:'1', title: 'JS1', body: "Post number1"},
        {id:'2', title: 'JS2', body: "Post number2"},
        {id:'3', title: 'JS3', body: "Post number3"}
    ]);

    return (
        <div className='App'>
            <PostList posts={posts} title = "Список постов 1" />
        </div>
    );
}

export default App;
