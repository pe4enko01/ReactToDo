import React from 'react';

import './post-add-form.css';


const PostAddForm = ({onAdd}) => {
    return(
        <div className = "bottom-panel d-flex">
            <input
                text = "text"
                placeholder = "О чем вы думаете?"
                className = "form-control new-post-label"
            />
            <button
                type = "submit"
                className = "btn btn-outline-secondary"
                onClick={()=>{onAdd("kkk")}}
            > Добавить</button>
        </div>
    )
}

export default PostAddForm;