import React, {useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/MySelect";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: 'JS1', body: "Post number1"},
        {id: '2', title: 'JS2', body: "Post number2"},
        {id: '3', title: 'JS3', body: "Post number3"}
    ]);
    const [selectedSort, setSelectedSort] = useState('');

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    };

    return (
        <div className='App'>
            <PostForm create={createPost}/>
            <hr/>
            <MySelect
                value={selectedSort}
                onChange={sort => sortPosts(sort)}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}]}
                defaultValue="Сортировка"/>
            {posts.length === 0 ?
                <h1 style={{textAlign: 'center'}}>Постов нет</h1> :
                <PostList posts={posts} title="Список постов 1" remove={removePost}/>}
        </div>
    );
}

export default App;
