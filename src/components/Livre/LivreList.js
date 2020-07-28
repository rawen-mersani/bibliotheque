import React, {useState} from 'react';
import Livre from './Livre.js'



export default function LivreList(props) {

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
                                <h3 className="box-title">Liste des livres</h3><br></br><br></br>
                                <button className="btn btn-info" onClick={toggleVisibility}>Afficher liste</button>
                            </div>

                            
                            {/* /.box-header */}
                            <div className="box-body">
                                <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                      <th>Libellé</th>
                                      <th>Auteur</th>
                                      <th>Edition</th>
                                      <th>Nombre exemplares</th>
                                      <th>Etat</th>
                                      <th>Détails</th>
                                      <th>Archiver</th>
                                      <th>Modifier</th>
                                      <th>Supprimer</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                  
                                    isVisible && props.livres.map( (livre) => (
                                   <Livre key={livre.id}
                                      id={livre.id } 
                                      libellé={livre.libellé} 
                                      auteur ={livre.auteur} 
                                      édition ={livre.édition} 
                                      nbExmp ={livre.nbExmp}
                                      etat={livre.etat}
                                      deleteLivre={props.deleteLivre}
                                      updateLivre={props.updateLivre} >  
                                    </Livre>
                                    
                                   
                                    
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

