import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Livre(props){


    const [updateMode, setUpdateMode] = useState(false)
    const [libelléToUpdate, setLibelléToUpdate] = useState(props.libellé)
    const [auteurToUpdate, setAuteurToUpdate] = useState(props.auteur)
    const [éditionToUpdate, setEditionToUpdate] = useState(props.édition)
    const [nbExmpToUpdate, setNbExmpToUpdate] = useState(props.nbExmp)

    const handleUpdateLivre = () => {
        props.updateLivre(props.id, libelléToUpdate, auteurToUpdate, éditionToUpdate, nbExmpToUpdate, props.etat)
        setUpdateMode(false)
    }

    const handleArchiver = () => {
        props.updateLivre(props.id,props.libellé , props.auteur, props.édition, props.nbExmp ,"oui")
        
    }
    
    //console.log("id: ",props.id);

    return (
       <>
       {!updateMode ? (
           <>
            <tr>
                <td>{props.libellé}</td>
                <td>{props.auteur}</td>
                <td>{props.édition}</td>
                <td>{props.nbExmp} Exemplaires</td>
                <td>{props.etat}</td>
                <td><Link to= {`/livres/${props.id}`}>Afficher plus</Link></td>
                <td><button className="fa fa-ban btn btn-warning" onClick={handleArchiver}></button></td>
                <td><button className="fa fa-edit btn btn-info" onClick={()=>setUpdateMode(true)}></button></td>
                <td><button className="fa fa-remove btn btn-danger" onClick={()=>props.deleteLivre(props.id)}></button></td>
            </tr> 
            </>
       ) : (
        <>
            <tr>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={libelléToUpdate}
                                onChange={(e) => setLibelléToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={auteurToUpdate}
                                onChange={(e) => setAuteurToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="date" className="form-control"  name="name" value={éditionToUpdate}
                                onChange={(e) => setEditionToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={nbExmpToUpdate}
                                onChange={(e) => setNbExmpToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                
                <td>
                    <button className="btn btn-warning" onClick={handleUpdateLivre}>Mettre à jour</button>
                </td>
                <td>
                <button  className="btn btn-default" onClick={()=>setUpdateMode(false)}>Cancel</button>
                </td>
         </tr>
        </>



       )}
        </>
    );
}
