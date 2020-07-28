import React, {useState, useCallback, useEffect,useRef} from 'react';
import LivreList from './LivreList';
import AddForm from './AddForm.js';
import { fetchLivres, searchLivres } from '../Services/services';
import '../Adherent/adherentPage.css'




  


export default function LivrePage(props){


  const [livres, setLivres] = useState([])
  const inputSearch = useRef(null)

  const [isVisibleForm, setIsVisibleForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")


  const formVisibility=()=>{
    setIsVisibleForm(!isVisibleForm)
  }


useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    if(!searchValue){
      const result= await fetchLivres()
      setLivres(result)
      setLoading(false)
      //inputSearch.current.focus()
    } else {
      const result= await searchLivres(searchValue)
      setLivres(result)
      setLoading(false)
      inputSearch.current.focus()
    }
   
  }
  fetchData()
}, [searchValue])
  

  //console.log(Livres);

  
  const addLivre = (libellé, auteur, édition, nbExmp,etat)=>{
    setLivres(precLivres => 
      [...precLivres,
      {id:precLivres.length+1 ,libellé, auteur, édition, nbExmp,etat}
      ])
  }

  const deleteLivre = (id)=>{
    const newLivres=livres.filter(livre=>livre.id!==id)
    setLivres(newLivres)
  }
  const updateLivre = (id,libellé, auteur, édition, nbExmp,etat)=>{
    const newLivres=livres.map(livre=>livre.id===id?({libellé, auteur, édition, nbExmp,etat}): livre)
    setLivres(newLivres)
  }


  const memosedCallback = useCallback (addLivre, [])

    return (
        <div className="Livre-page">
            <div className="content-wrapper">
                 {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                        Livres
                        <small>table des livres</small>
                        </h1>
                        <ol className="breadcrumb">
                        <li><i className="fa fa-dashboard" /> Accueil</li>
                        <li>Livres</li>
                        <li className="active">Table des livres</li>
                        
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
                    <LivreList livres={livres}
                    deleteLivre={deleteLivre}
                    updateLivre={updateLivre}  />

                      



                    <div className="box-header">
                      <button className="btn btn-secondary" onClick={formVisibility}>Ajouter livre </button>
                    </div>
                    {isVisibleForm && <AddForm addLivre={memosedCallback} />}
                    </>
                    )}
            </div>
      </div>
       
    );
}
