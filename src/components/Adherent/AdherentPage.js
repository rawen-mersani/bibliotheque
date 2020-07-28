import React, {useState, useCallback, useEffect,useRef} from 'react';
import AdherentList from './AdherentList';
import AddForm from './AddForm.js';
import { fetchAdherents, searchAdherents } from '../Services/services';
import './adherentPage.css'




  


export default function AdherentPage(props){


  const [adherents, setAdherents] = useState([])
  


  const inputSearch = useRef(null)

  const [isVisibleForm, setIsVisibleForm] = useState(false)
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")


  const formVisibility=()=>{
    setIsVisibleForm(!isVisibleForm)
  }
/*
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      const result= await fetchAdherents()
      setAdherents(result)
      setLoading(false)
    }
    fetchData()
  }, [])
*/
useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    if(!searchValue){
      const result= await fetchAdherents()
      setAdherents(result)
      setLoading(false)
      //inputSearch.current.focus()
    } else {
      const result= await searchAdherents(searchValue)
      setAdherents(result)
      setLoading(false)
      inputSearch.current.focus()
    }
   
  }
  fetchData()
}, [searchValue])
  


  //console.log(adherents);

  
  const addAdherent = async (name, pname, mail,tel,etat)=>{
    await setAdherents(precAdherents => 
      [...precAdherents,
      {id:precAdherents.length+1 ,name, pname, mail, tel,etat}
      ])
  }

  const deleteAdherent = (id)=>{
    const newAdherents=adherents.filter(adherent=>adherent.id!==id)
    setAdherents(newAdherents)
  }
  const updateAdherent = (id,name, pname, mail,tel,etat)=>{
    const newAdherents=adherents.map(adherent=>adherent.id===id?({name, pname, mail,tel,etat}): adherent)
    setAdherents(newAdherents)
  }


  const memosedCallback = useCallback (addAdherent, [])

    return (
        <div className="Adherent-page">
            <div className="content-wrapper">
                 {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                        Adhérents
                        <small>table des adhérents</small>
                        </h1>
                        <ol className="breadcrumb">
                        <li><i className="fa fa-dashboard" /> Accueil</li>
                        <li>Adhérents</li>
                        <li className="active">Table adhérents</li>
                        
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
                    <AdherentList adherents={adherents}
                    deleteAdherent={deleteAdherent}
                    updateAdherent={updateAdherent}
                    />

                      



                    <div className="box-header">
                      <button className="btn btn-secondary" onClick={formVisibility}>Ajouter adhérent </button>
                    </div>
                    {isVisibleForm && <AddForm addAdherent={memosedCallback} />}
                    </>
                    )}
            </div>
      </div>
       
    );
}
