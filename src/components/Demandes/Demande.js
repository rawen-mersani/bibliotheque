import React,{useState} from 'react';

export default function Demande(props){

    const [adherents, setAdherents] = useState([])

    const addAdherent = (name, pname, mail, nbEmp,tel)=>{
        setAdherents(precAdherents => 
          [...precAdherents,
          {id:precAdherents.length+1 ,name, pname, mail, nbEmp, tel}
          ])
          console.log("liste: ", adherents)
      }
    
    const handleUpdateDemande = () => {
        props.acceptDemande(props.id,props.name, props.pname, props.mail,props.tel ,"acceptée")
        addAdherent(props.name, props.pname, props.mail, 0, props.tel)
        //console.log(props.name)
        
    }
    

    return (
      
            <tr>
                <td>{props.name}</td>
                <td>{props.pname}</td>
                <td>{props.mail}</td>
                <td>{props.tel}</td>
                <td>{props.etat}</td>
                <td><button className="fa fa-check btn btn-success" onClick={handleUpdateDemande}></button></td>
                <td><button className="fa fa-ban btn btn-danger" onClick={()=>props.refuDemande(props.id)}></button></td>
            </tr> 
       
           
    );
}
