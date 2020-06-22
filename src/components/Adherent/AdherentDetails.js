import React, { useEffect, useState } from "react"
import { fetchAdherentById } from '../Services/services'
import { useParams} from "react-router-dom"

function AdherentDetails() {

  const [adherent, setAdherent] = useState({})
 
 
  const { adherentId } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchAdherentById(adherentId)
      setAdherent(result)
      //console.log("result: ",result)
    }
    fetchData()
  }, [adherentId])

  return (
    <div className="adherent-details">
        <div className="content-wrapper">
          <section className="content-header">
                <h1>Les détails de {adherent.name} {adherent.pname} </h1>
                <ol className="breadcrumb">
                <li><a href="page"><i className="fa fa-dashboard" /> Adhérent</a></li>
                <li className="active">Détails</li>
                </ol>
            </section>
            <section className="content">
                <div className="box">
                <div className="box-header with-border">
                    <h3 className="box-title">Nom:</h3>
                    <div className="box-tools pull-right">
                    <button type="button" className="btn btn-box-tool" data-widget="collapse" data-toggle="tooltip" title="Collapse">
                        <i className="fa fa-minus" /></button>
                    
                    </div>
                </div>
                <div className="box-body">
                    {adherent.name}
                </div>
               
                <div className="box-header with-border">
                    <h3 className="box-title">Prénom:</h3>
                   
                </div>
                <div className="box-body">
                    {adherent.pname}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Mail:</h3>
                    
                </div>
                <div className="box-body">
                    {adherent.mail}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Nombre des emprunts:</h3>
                    
                </div>
                <div className="box-body">
                    {adherent.nbEmp}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Télephone:</h3>
                    
                </div>
                <div className="box-body">
                    {adherent.tel}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Livre emprunté:</h3>
                    
                </div>
                <div className="box-body">
                { //console.log(adherent.livreEmp)
                    adherent.livreName
                
                  /* const listLivre = adherent.livreEmp.map((item) => { <li>{item}</li>});
                  adherent.livreEmp.map( (adherent) => (
                    console.log(adherent)
                    //adherent
                                      
                     ))*/
                }
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Date d'emprunt:</h3>
                    
                </div>
                <div className="box-body">
                    {adherent.dateEmp}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Date de retour:</h3>
                    
                </div>
                <div className="box-body">
                    {adherent.dateRet}
                </div>
               
                </div>
            </section>
            </div>


</div>













  )
}

export default AdherentDetails