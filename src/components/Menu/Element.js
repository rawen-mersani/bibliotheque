import React from 'react';
import {Link} from 'react-router-dom'


export default function Element(props){
    


    return (
        <Link to={`/${props.title}`} >
            <li className="treeview menu-open">
               
                    <i className={props.icon} /> <span>{props.title}</span>
                
            </li>
        </Link>
    
    );
}
