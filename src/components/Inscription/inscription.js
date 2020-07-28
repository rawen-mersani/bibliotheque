import React, { useState, useRef } from 'react';
import '../Login/login.css'




  export default function Inscription(){

    const [name, setName] = useState("")
    const [pname, setPname] = useState("")
    const [mail, setMail] = useState("")
    const [tel, setTel] = useState()
    const [mdp, setMdp ]= useState("")
    const [etat, setEtat] = useState("non")
    


    const [demande, setDemande] = useState([])
    

    const addDemande = (name, pname, mail,tel,etat,mdp)=>{
        setDemande(precDemandes => 
          [...precDemandes,
          {id:precDemandes.length+1 ,name, pname, mail, tel, etat, mdp}
          ])
         localStorage.setItem("demande", JSON.stringify(demande))
         var retrievedObject = localStorage.getItem('demande')
         console.log('retrievedObject: ', JSON.parse(retrievedObject));
        
         
      }
    

      
  const inputName = useRef(null)
  const handleAddUser = () => {
    addDemande(name, pname, mail, tel,"non",mdp)
    inputName.current.focus()
    setName("")
    setPname("")
    setMail("")
    setTel("")
    setEtat("non")
    setMdp("")
    
  }
 

    return (
        <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100 p-t-30 p-b-50">
      <span className="login100-form-title p-b-41">
        Sign Up
      </span>
      <div className="login100-form validate-form p-b-33 p-t-5">
        
        <div className="wrap-input100 validate-input" data-validate="Enter username">
          <input className="input100" type="text" name="username" placeholder="Nom" value={name}  ref={inputName}
                        onChange={e => setName(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>

        <div className="wrap-input100 validate-input" data-validate="Enter username">
          <input className="input100" type="text" name="username" placeholder="Prénom" value={pname} 
                        onChange={e => setPname(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>

        <div className="wrap-input100 validate-input" data-validate="Enter username">
          <input className="input100" type="mail" name="username" placeholder="Mail" value={mail} 
                        onChange={e => setMail(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Enter username">
          <input className="input100" type="number" name="username" placeholder="Télephone" value={tel} 
                        onChange={e => setTel(e.target.value)}/>
          <span className="focus-input100" data-placeholder="" />
        </div>

        <div className="wrap-input100 validate-input" data-validate="Enter password">
          <input className="input100" type="password" name="pass" placeholder="Mot de passe" value={mdp} 
                        onChange={e => setMdp(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>

        <div className="container-login100-form-btn m-t-32">
          <button className="login100-form-btn" onClick={handleAddUser}>
            Créer
          </button>
        </div>
      </div>
    </div>
  </div>
</div>

       
    );
}
