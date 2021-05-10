import React from 'react';


import './post-list-item.css';


export default class PostListItem extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            important:false,
            like: false
        };
        this.onImportant = this.onImportant.bind(this);
        this.onLike = this.onLike.bind(this);
    }

    onImportant(){
        this.setState(({important}) =>({
            important: !important
        }))
    }

    onLike(){
        this.setState(({like}) =>({
            like: !like
        }))
    }
    render(){
        const {label} = this.props;
        const {important, like} = this.state;
        let classNames = "app-list-item d-flex justify-content-between";

        if(important === true ){
            classNames += ' important';
        }
        if(like === true ){
            classNames += ' like';
        }
        return(
            <div className = {classNames}>
            <span className="app-list-item-label"
            onClick={this.onLike}>
                {label}
            </span>
            <div className = "d-flex justifu-content-center align-items-center">
                <button type = "button"
                    className = "bnt-star btn-sm"
                    onClick={this.onImportant}>
                    <i className ="fa fa-star"></i>
                </button>
                <button type = "button"
                    className = "bnt-trash btn-sm">
                    <i className ="fa fa-trash"></i>
                </button>
                <i className ="fa fa-heart"></i>
            </div>
        </div>
        )
    }
}


