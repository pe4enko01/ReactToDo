import React from 'react';
import AppHeader from '../app-header/app-header';
import SearchPanel from '../serh-panel/serh-panel';
import PostStatusFilter from '../post-status-filter/post-status-filter';
import PostList from '../post-list/post-list';
import PostAddForm from '../post-add-form/post-add-form';

import './app.css';

export default class App extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [
                {label:"Reactt", important: false, id:1}
            ]
        }
        this.deleteItem = this.deleteItem.bind(this);
        this.addItem = this.addItem.bind(this);
        this.onToggleLike = this.onToggleLike.bind(this);
        this.onToggleImportant = this.onToggleImportant.bind(this);

        this.maxId = 4;
    }
    deleteItem(id){
        this.setState(({data}) => {
            const index = data.findIndex(elem => elem.id ===id);

            const before = data.slice(0, index);
            const after = data.slice(index + 1);

            const newArr = [...before, ...after];

            return{
                data : newArr,
            }
        })
    }

    addItem(body){
        const newItem = {
            label:body, important: false, id:this.maxId++
        }
        this.setState(({data})=>{
            const newArr = [...data, newItem];
            return{
                data:newArr
            }
        })
    }

    onToggleImportant(id){
        console.log(id)
    }

    onToggleLike(){

    }   

    render(){
        return(
            <div className = "app">
                <AppHeader/>
                <div className = "search-panel d-dlex">
                    <SearchPanel/>
                    <PostStatusFilter/>
                </div>
                <PostList posts = {this.state.data} 
                onDelete={this.deleteItem}
                onToggleImportant={this.onToggleImportant}
                onToggleLike={this.onTogglelike}/>
                <PostAddForm
                onAdd={this.addItem}/>
            </div>
            );
    }
};



