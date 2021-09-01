import React from 'react';
import MyInput from "./UI/input/MyInput";
import MySelect from "./UI/MySelect";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='поиск...'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'}]}
                defaultValue="Сортировка"/>
        </div>
    );
};

export default PostFilter;