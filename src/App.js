import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: 'JS1', body: "Post number1"},
        {id: '2', title: 'JS2', body: "Post number2"},
        {id: '3', title: 'JS3', body: "Post number3"}
    ]);

    const [filter, setFilter] = useState({sort: '',query:''});

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]))
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(p => p.title.toLowerCase().includes(filter.query))
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <hr/>
            <PostFilter filter = {filter} setFilter = {setFilter}/>
            {sortedAndSearchedPosts.length ?
                <PostList posts={sortedAndSearchedPosts} title="Список постов 1" remove={removePost}/> :
                <h1 style={{textAlign: 'center'}}>Постов нет</h1>}

        </div>
    );
}

export default App;
