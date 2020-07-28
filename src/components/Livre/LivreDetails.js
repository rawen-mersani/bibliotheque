import React, { useEffect, useState } from "react"
import { fetchLivreById } from '../Services/services'
import { useParams} from "react-router-dom"

function LivreDetails() {

  const [livre, setLivres] = useState({})
 
 
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
                
               
                </div>
            </section>
            </div>


</div>













  )
}

export default LivreDetails