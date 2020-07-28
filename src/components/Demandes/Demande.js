import React,{useState} from 'react';

export default function Demande(props){

    const [adherents, setAdherents] = useState([])

    const addAdherent = (name, pname, mail, tel, etat, mdp)=>{
        setAdherents(precAdherents => 
          [...precAdherents,
          {id:precAdherents.length+1 ,name, pname, mail, tel, etat, mdp}
          ])
          console.log("liste: ", adherents)
      }
    
    const handleAcceptDemande = () => {
        props.updateDemande(props.id,props.name, props.pname, props.mail,props.tel ,"acceptée")
        addAdherent(props.name, props.pname, props.mail, props.tel, "non", props.mdp)
        //console.log(props.name)
        
    }
    const handleRefuDemande = () => {
        props.updateDemande(props.id,props.name, props.pname, props.mail,props.tel ,"refusé")
        
    }
    
    

    return (
      
            <tr>
                <td>{props.name}</td>
                <td>{props.pname}</td>
                <td>{props.mail}</td>
                <td>{props.tel}</td>
                <td>{props.etat}</td>
                <td><button className="fa fa-check btn btn-success" onClick={handleAcceptDemande}></button></td>
                <td><button className="fa fa-ban btn btn-warning" onClick={handleRefuDemande}></button></td>
                <td><button className="fa fa-remove btn btn-danger" onClick={()=>props.refuDemande(props.id)}></button></td>
            </tr> 
       
           
    );
}
