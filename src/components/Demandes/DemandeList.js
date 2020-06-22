import React, {useState} from 'react';
import Demande from './Demande.js'



export default function DemandeList(props) {

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
                                <h3 className="box-title">Liste des demandes</h3><br></br><br></br>
                                <button className="btn btn-info" onClick={toggleVisibility}>Afficher liste</button>
                            </div>

                            
                            {/* /.box-header */}
                            <div className="box-body">
                                <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                      <th>Nom</th>
                                      <th>Prénom</th>
                                      <th>mail</th>
                                      <th>Télephone</th>
                                      <th>Etat</th>
                                      <th>Accepter</th>
                                      <th>Refuser</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                  
                                    isVisible && props.demandes.map( (demande,index) => (
                                   <Demande key={index}
                                      id={demande.id } 
                                      name={demande.name} 
                                      pname ={demande.pname} 
                                      mail ={demande.mail} 
                                      tel ={demande.tel}
                                      etat={demande.etat}
                                      refuDemande={props.refuDemande}
                                      acceptDemande={props.acceptDemande} >  
                                    </Demande>
                                    
                                   
                                    
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

