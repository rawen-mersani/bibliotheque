import React, {useState, useEffect,useRef} from 'react';
import DemandeList from './DemandeList';
import { fetchDemandes, searchDemandes } from '../Services/services';
import '../Adherent/adherentPage.css'




  


export default function DemandePage(props){


  const [demandes, setdemandes] = useState([])
  const inputSearch = useRef(null)

  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")


  


useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    if(!searchValue){
      const result= await fetchDemandes()
      setdemandes(result)
      setLoading(false)
      //inputSearch.current.focus()
    } else {
      const result= await searchDemandes(searchValue)
      setdemandes(result)
      setLoading(false)
      inputSearch.current.focus()
    }
   
  }
  fetchData()
}, [searchValue])
  

  //console.log(Livres);

  

  const refuDemande = (id)=>{
    const newDemandes=demandes.filter(demande=>demande.id!==id)
    setdemandes(newDemandes)
  }
  const updateDemande = (id,name, pname, mail, tel, etat)=>{
    const newDemandes=demandes.map(demande=>demande.id===id?({name, pname, mail, tel, etat}): demande)
    setdemandes(newDemandes)
  }


  

    return (
        <div className="Demande-page">
            <div className="content-wrapper">
                 {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                        Demandes d'adhésion
                        <small>table des demandes</small>
                        </h1>
                        <ol className="breadcrumb">
                        <li><i className="fa fa-dashboard" /> Accueil</li>
                        <li>Demande</li>
                        <li className="active">Table des demandes</li>
                        
                        </ol>
                        
                        

                        
                    </section>
                    {/* content */}
                    {loading? (
                      <div className="col-md-3">
                            <div className="box-header">
                            <div className="progress progress-xs active ">
                              
                              <div className="progress-bar progress-bar-success progress-bar-striped" role="progressbar" aria-valuenow={20} aria-valuemin={0} aria-valuemax={100} style={{width: '90%'}}>
                              </div>
                            </div>
                            </div>
                      </div>
                        
                      
                    ) : (
                      <>
                      <div className="form-inline ">
                          <input className="form-control mr-sm-2 right" name="search" ref={inputSearch} value={searchValue} onChange={e=> setSearchValue(e.target.value)} type="search" placeholder="Search" aria-label="Search" />
                        </div>
                    <DemandeList demandes={demandes}
                    refuDemande={refuDemande}
                    updateDemande={updateDemande}  />

                      



                    
                    </>
                    )}
            </div>
      </div>
       
    );
}
