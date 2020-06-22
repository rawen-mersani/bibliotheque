import React, {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Adherent(props){


    const [updateMode, setUpdateMode] = useState(false)
    const [nameToUpdate, setNameToUpdate] = useState(props.name)
    const [pnameToUpdate, setPnameToUpdate] = useState(props.pname)
    const [mailToUpdate, setMailToUpdate] = useState(props.mail)
    const [nbEmpToUpdate, setNbEmpToUpdate] = useState(props.nbEmp)
    const [telToUpdate, setTelToUpdate] = useState(props.tel)

    const handleUpdateAdherent = () => {
        props.updateAdherent(props.id,nameToUpdate, pnameToUpdate, mailToUpdate, nbEmpToUpdate, telToUpdate)
        setUpdateMode(false)
    }
    
    //console.log("id: ",props.id);

    return (
       <>
       {!updateMode ? (
           <>
            <tr>
                <td>{props.name}</td>
                <td>{props.pname}</td>
                <td>{props.mail}</td>
                <td>{props.nbEmp} Emprunts</td>
                <td>{props.tel}</td>
                <td><Link to= {`/Adhérents/${props.id}`}>Afficher plus</Link></td>
                <td><button className="fa fa-edit btn btn-warning" onClick={()=>setUpdateMode(true)}></button></td>
                <td><button className="fa fa-remove btn btn-danger" onClick={()=>props.deleteAdherent(props.id)}></button></td>
            </tr> 
            </>
       ) : (
        <>
            <tr>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={nameToUpdate}
                                onChange={(e) => setNameToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={pnameToUpdate}
                                onChange={(e) => setPnameToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={mailToUpdate}
                                onChange={(e) => setMailToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={nbEmpToUpdate}
                                onChange={(e) => setNbEmpToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <div className="form-group">
                        <div className="col-sm-10">
                            <input type="text" className="form-control"  name="name" value={telToUpdate}
                                onChange={(e) => setTelToUpdate(e.target.value)}  />
                        </div>
                    </div>
                </td>
                <td>
                    <button className="btn btn-warning" onClick={handleUpdateAdherent}>Mettre à jour</button>
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
