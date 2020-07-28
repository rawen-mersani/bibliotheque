import React from 'react';
import { Link } from 'react-router-dom';

export default function Emprunts(props){


    

   
    
    //console.log("id: ",props.id);

    return (
      
            <tr>
                <td>{props.date}</td>
                <td>{props.dateEmp}</td>
                <td>{props.dateRet}</td>
                <td><Link to= {`/Emprunts/${props.id}`}>Afficher plus</Link></td>
                
            </tr> 
       
           



     
    );
}
