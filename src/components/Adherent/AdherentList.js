import React, {useState} from 'react';
import Adhrent from './Adherent.js'



export default function AdherentList(props) {

  const [isVisible, setIsVisible] = useState(true)
  

  const toggleVisibility=()=>{
    setIsVisible(!isVisible)
  }

 

  return (
    <div className="">
       <section className="content">
                        <div className="row">
                        <div className="col-xs-12">
                            <div className="box">
                            <div className="box-header">
                                <h3 className="box-title">Liste adherents</h3><br></br><br></br>
                                <button className="btn btn-info" onClick={toggleVisibility}>Afficher liste</button>
                            </div>

                            
                            {/* /.box-header */}
                            <div className="box-body">
                                <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                      <th>Nom</th>
                                      <th>Prénom</th>
                                      <th>Mail</th>
                                      <th>Nombre emprunts</th>
                                      <th>Télephone</th>
                                      <th>Détails</th>
                                      <th>Modifier</th>
                                      <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                  
                                    isVisible && props.adherents.map( (adherent) => (
                                   <Adhrent key={adherent.id}
                                      id={adherent.id } 
                                      name={adherent.name} 
                                      pname ={adherent.pname} 
                                      mail ={adherent.mail} 
                                      nbEmp ={adherent.nbEmp}
                                      tel ={adherent.tel}
                                      deleteAdherent={props.deleteAdherent}
                                      updateAdherent={props.updateAdherent} >  
                                    </Adhrent>
                                    
                                   
                                    
                                    )) 
                                } 
                                
                                </tbody>
                                </table>
                                <br></br>
                                
                                
                            </div>
                            </div>
                           
                        </div>
                        </div>
  </section>       
         
        
     
    </div>
  );

  
}

