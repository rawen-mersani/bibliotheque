import React, { useEffect, useState } from "react"
import { fetchAdherentById, fetchEmpruntsByID, fetchEmpruntsCountByAdherent, fetchLivreById } from '../Services/services'
import { useParams} from "react-router-dom"

function EmpruntDetails() {

  const [emprunts, setEmprunts] = useState({})
  const [adherent, setAdherent] = useState({})
  const [livre, setLivre] = useState({})
  const [empruntsCount, setEmpruntsCount] = useState({})
  
  
  
 
  const { empruntId } = useParams()
  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchEmpruntsByID(empruntId)
      setEmprunts(result)
      
    }
    fetchData()
  }, [empruntId])

  useEffect(() => {
    const fetchData = async () => {
      const result2 = await fetchAdherentById(emprunts.idAd)
      setAdherent(result2)
      
    }
    fetchData()
  }, [emprunts.idAd])

  useEffect(() => {
    const fetchData = async () => {
      const result3 = await fetchLivreById(emprunts.idLiv)
      setLivre(result3)
      
    }
    fetchData()
  }, [emprunts.idLiv])

  useEffect(() => {
    const fetchData = async () => {
      const result2 = await fetchEmpruntsCountByAdherent(emprunts.idAd)
      setEmpruntsCount(result2)
      console.log("result: ",result2)
    }
    fetchData()
  }, [emprunts.idAd])

//   console.log("emprunt: ",emprunts)
//   console.log("adherent: ",adherent)
//   console.log("livre: ",livre)
  return (
    
    <div className="emprunt-details">
        <div className="content-wrapper">
        
        <section className="content-header">
                <h1>Les détails de l'emprunt du livre {livre && livre.libellé}  </h1>
                <ol className="breadcrumb">
                <li><a href="page"><i className="fa fa-dashboard" /> Emprunts</a></li>
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
                    {adherent && adherent.name}
                </div>
               
                <div className="box-header with-border">
                    <h3 className="box-title">Prénom:</h3>
                   
                </div>
                <div className="box-body">
                    {adherent && adherent.pname}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Mail:</h3>
                    
                </div>
                <div className="box-body">
                    {adherent && adherent.mail}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Nombre des emprunts:</h3>
                    
                </div>
                <div className="box-body">
                {JSON.stringify(empruntsCount) + " Emprunts"}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Télephone:</h3>
                    
                </div>
                <div className="box-body">
                    {adherent && adherent.tel}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Livre emprunté:</h3>
                    
                </div>
                <div className="box-body">
                {livre && livre.libellé}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Date d'emprunt:</h3>
                    
                </div>
                <div className="box-body">
                    {emprunts.dateEmp}
                </div>
                <div className="box-header with-border">
                    <h3 className="box-title">Date de retour:</h3>
                    
                </div>
                <div className="box-body">
                    {emprunts.dateRet}
                </div>
               
                </div>
            </section>
        </div>


    </div>
            












  )
}

export default EmpruntDetails