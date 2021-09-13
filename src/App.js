import React, {useMemo, useState} from 'react';
import './styles/App.css'
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import PostFilter from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";

function App() {
    const [posts, setPosts] = useState([
        {id: '1', title: 'JS1', body: "Post number1"},
        {id: '2', title: 'JS2', body: "Post number2"},
        {id: '3', title: 'JS3', body: "Post number3"}
    ]);

    const [filter, setFilter] = useState({sort: '', query: ''});

    const [modal, setModal] = useState(false);

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
        setModal(false);
    };
    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    };

    return (
        <div className='App'>
            <MyButton style = {{marginTop: 30}} onClick = {()=>setModal(true)}>
                Создать пользователя
            </MyButton>
            <MyModal visible={modal} setVisible={setModal}>
                <PostForm create={createPost}/>
            </MyModal>
            <hr/>
            <PostFilter filter={filter} setFilter={setFilter}/>
            <PostList posts={sortedAndSearchedPosts} title="Список постов 1" remove={removePost}/>
        </div>
    );
}

export default App;
