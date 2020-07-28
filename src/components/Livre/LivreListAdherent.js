import React, {useState} from 'react';
import LivreAdherent from './LivreAdherent.js'


export default function LivreListAdherent(props) {

  const [isVisible, setIsVisible] = useState(true)
 
  const adherent = window.history.state.state.adherant
  const id= adherent.id
  
  const toggleVisibility=()=>{
    setIsVisible(!isVisible)
  }
  console.log('adherent', adherent)
  console.log('id', id)


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
                                      <th>Détails</th>

                                    </tr>
                                </thead>
                                <tbody>
                                {
                                  
                                    isVisible && props.livres.map( (livre) => (
                                   <LivreAdherent key={livre.id}
                                      id={livre.id } 
                                      libellé={livre.libellé} 
                                      auteur ={livre.auteur} 
                                      édition ={livre.édition} 
                                      nbExmp ={livre.nbExmp}
                                      adherent={adherent}
                                       >  
                                    </LivreAdherent>
                                    
                                   
                                    
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

