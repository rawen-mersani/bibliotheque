import React from 'react';

export default function Emprunts(props){


    

   
    
    //console.log("id: ",props.id);

    return (
      
            <tr>
                <td>{props.date}</td>
                <td>{props.name}</td>
                <td>{props.pname}</td>
                <td>{props.titre}</td>
                <td>{props.dateEmp}</td>
                <td>{props.dateRet}</td>
                
            </tr> 
       
           



     
    );
}
