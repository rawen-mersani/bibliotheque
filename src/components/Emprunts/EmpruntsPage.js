import React, {useState, useEffect,useRef} from 'react';
import EmpruntsList from './EmpruntsList';
import { fetchEmpruntsCours, searchEmpruntsCours, fetchEmpruntsRetard } from '../Services/services';
import '../Adherent/adherentPage.css'




  


export default function EmpruntsPage(props){

  const [emprunts, setEmprunts] = useState([])
  const [empruntsCours, setEmpruntsCours] = useState([])
  const [empruntsRetard, setEmpruntsRetard] = useState([])
  const inputSearch = useRef(null)

  
  const [loading, setLoading] = useState(false)
  const [searchValue, setSearchValue] = useState("")

  // useEffect(() => {
  //   const fetchData = async () => {
  //     setLoading(true)
  //     if(!searchValue){
  //       const result= await fetchEmprunts()
  //       setEmprunts(result)
  //       setLoading(false)
  //       //inputSearch.current.focus()
  //     } else {
  //       const result= await searchEmprunts(searchValue)
  //       setEmprunts(result)
  //       setLoading(false)
  //       inputSearch.current.focus()
  //     }
     
  //   }
  //   fetchData()
  // }, [searchValue])
    
  

useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    if(!searchValue){
      const result= await fetchEmpruntsCours()
      setEmpruntsCours(result)
      setLoading(false)
      //inputSearch.current.focus()
    } else {
      const result= await searchEmpruntsCours(searchValue)
      setEmpruntsCours(result)
      setLoading(false)
      inputSearch.current.focus()
    }
   
  }
  fetchData()
}, [searchValue])
  

useEffect(() => {
  const fetchData = async () => {
    setLoading(true)
    if(!searchValue){
      const result= await fetchEmpruntsRetard()
      setEmpruntsRetard(result)
      setLoading(false)
      //inputSearch.current.focus()
    } 
   
  }
  fetchData()
}, [searchValue])

  console.log(emprunts);

  
  
 
  

    return (
        <div className="Emprunts-page">
            <div className="content-wrapper">
                 {/* Content Header (Page header) */}
                    <section className="content-header">
                        <h1>
                        Emprunts
                        <small>table des emprunts</small>
                        </h1>
                        <ol className="breadcrumb">
                        <li><i className="fa fa-dashboard" /> Accueil</li>
                        <li>Emprunts en cours</li>
                        <li className="active">Table des emprunts</li>
                        
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
                    <EmpruntsList emprunts={empruntsCours} nameSection="en cours"/>
                    <EmpruntsList emprunts={empruntsRetard} nameSection="en retard"/>


                    </>
                    )}
            </div>
      </div>
       
    );
}
