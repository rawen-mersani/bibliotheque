import React, { useEffect, useState } from "react"
import { fetchLivreById, fetchEmpruntsCountByAdherent } from '../Services/services'
import { useParams, useLocation} from "react-router-dom"

function LivreDetailsAdherent() {
  
    let location = useLocation(); 
    const adherent = location.state.user
    console.log(adherent)
  
  const [livre, setLivres] = useState({})
  const [emprunt, setemprunt] = useState([])
    

    const addEmprunt = (date, idAd, idLiv, dateEmp, dateRet)=>{
        setemprunt(precEmprunts => 
          [...precEmprunts,
          {id:precEmprunts.length+1 ,date, idAd, idLiv, dateEmp, dateRet}
          ])
         localStorage.setItem("emprunt", JSON.stringify(emprunt))
         var retrievedObject = localStorage.getItem('emprunt')
         console.log('retrievedObject: ', JSON.parse(retrievedObject));
         alert("Vous avez emprunté le livre Vous devez le rendre avant 15 jours")
        
         
      }
 
    const emprunterLivre = () => {
        const nb = fetchEmpruntsCountByAdherent(adherent.id)
        nb.then((value) => {
          console.log('nb',value);
          if(value < 2) 
          addEmprunt(new Date(), adherent.id, livre.id, new Date(), "") 
          else
           alert("Vous pouvez pas emrunter vous avez dépassé 2")
        });
        //console.log('nb',nb)
       
            
   
    }

  const { livreId } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchLivreById(livreId)
      setLivres(result)
    }
    fetchData()
  }, [livreId])

  return (
    <div className="adherent-details">
        <div className="content-wrapper">
          <section className="content-header">
                <h1>Les détails de {livre.libellé}</h1>
                <ol className="breadcrumb">
                <li><a href="page"><i className="fa fa-dashboard" /> Livre</a></li>
                <li className="active">Détails</li>
                </ol>
            </section>
            <section className="content">
                <div className="box">
                <div className="box-header with-border">
                    <h3 className="box-title">Libellé:</h3>
                    <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i className="fa fa-minus" /></button>
                    
                    </div>
                </div>
                <div className="box-body">
                    {livre.libellé}
                </div>
               
                <div className="box-header with-border">
                    <h3 className="box-title">Auteur:</h3>
                   
                </div>
                <div className="box-body">
                    {livre.auteur}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Edition:</h3>
                    
                </div>
                <div className="box-body">
                    {livre.édition}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Nombre des exemplaires:</h3>
                    
                </div>
                <div className="box-body">
                    {livre.nbExmp}
                </div>

                <div className="box-body">
                <button  className="btn btn-success" onClick={emprunterLivre}>Emprunter</button>
                </div>
                
                
               
                </div>
            </section>
            </div>


</div>













  )
}

export default LivreDetailsAdherent