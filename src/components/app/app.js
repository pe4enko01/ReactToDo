import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../serh-panel/serh-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form'


const App = () =>{
    return(
        <div className = "app">
            <AppHeader/>
            <div className = "search-panel d-dlex">
                <SearchPanel/>
                <PostStatusFilter/>
            </div>
            <PostList/>
            <PostAddForm/>
        </div>
        );
}

export default App;

