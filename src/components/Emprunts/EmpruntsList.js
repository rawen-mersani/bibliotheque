import React, {useState} from 'react';
import Emprunts from './Emprunts'



export default function EmpruntsList(props) {

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
                                  <h3 className="box-title">Emprunts de livres {props.nameSection}</h3><br></br><br></br>
                                <button className="btn btn-info" onClick={toggleVisibility}>Afficher liste</button>
                            </div>

                            
                            {/* /.box-header */}
                            <div className="box-body">
                                <table id="example2" className="table table-bordered table-hover">
                                <thead>
                                    <tr>
                                      <th>Date</th>
                                      <th>Nom</th>
                                      <th>Prénom</th>
                                      <th>Titre</th>
                                      <th>Emprunté le</th>
                                      <th>Rendu le</th>
                                      
                                    </tr>
                                </thead>
                                <tbody>
                                {
                                  
                                    isVisible && props.emprunts.map( (emprunt) => (
                                   <Emprunts key={emprunt.id}
                                      date={emprunt.date } 
                                      name={emprunt.name} 
                                      pname ={emprunt.pname} 
                                      titre ={emprunt.titre} 
                                      dateEmp ={emprunt.dateEmp}
                                      dateRet ={emprunt.dateRet}
                                       >  
                                    </Emprunts>
                                    
                                   
                                    
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

