import React from 'react';

import { Button } from 'reactstrap';
//import './post-list-item.css';
const PostStatusFilter = ()=>{
    return(
        <div className = "btn-group">
            <Button outline color = 'info'>Все</Button>
            <button type = "button" className='btn btn-info'>Все</button>
            <button type = "button" className='btn btn-outline-secondary'>Понравилось</button>
        </div>
    )
}
export default PostStatusFilter;