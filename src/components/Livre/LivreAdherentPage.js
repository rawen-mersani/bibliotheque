import React, {useState, useEffect,useRef} from 'react';
import {  searchLivresName, fetchLivresNotArchive, searchLivresAuteur } from '../Services/services';
import '../Adherent/adherentPage.css'
import LivreListAdherent from './LivreListAdherent';




  


export default function LivreAdherentPage(props){


  const [livres, setLivres] = useState([])
  const inputSearch = useRef(null)
  const auteurSearch = useRef(null)

  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")
  const [searchAuteurValue, setAuteurValue] = useState("")


  
/*
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result= await fetchLivres()
      setLivres(result)
      setLoading(false)
    }
    fetchData()
  }, [])
*/

useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    if(!searchValue){
      const result= await fetchLivresNotArchive()
      setLivres(result)
      setLoading(false)
      //inputSearch.current.focus()
    } else {
      const result= await searchLivresName(searchValue)
      setLivres(result)
      setLoading(false)
      inputSearch.current.focus()
    }
   
  }
  fetchData()
}, [searchValue])
  

useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    if(!searchAuteurValue){
      const result= await fetchLivresNotArchive()
      setLivres(result)
      setLoading(false)
      //inputSearch.current.focus()
    } else {
      const result= await searchLivresAuteur(searchAuteurValue)
      setLivres(result)
      setLoading(false)
      inputSearch.current.focus()
    }
   
  }
  fetchData()
}, [searchAuteurValue])
  




  



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
                      <select onChange={e=> setAuteurValue(e.target.value)} ref={auteurSearch} value={searchAuteurValue}  className="form-control selec">
                          <option value="">Sélectionnez l'auteur</option>
                          <option value="Émile Zola">Émile Zola</option>
                          <option value="Victor Hugo" >Victor Hugo</option>
                          <option value="Antoine de Saint-Exupéry">Antoine de Saint-Exupéry</option>
                        </select>
                      </div>
                      <div className="form-inline ">
                          <input className="form-control mr-sm-2 right" name="Nom" ref={inputSearch} value={searchValue} onChange={e=> setSearchValue(e.target.value)} type="search" placeholder="Nom du livre" aria-label="Search" />
                      </div>
                    <LivreListAdherent livres={livres} />

                      



                   
                    </>
                    )}
            </div>
      </div>
       
    );
}
