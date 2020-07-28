import React, { useState } from 'react';
import { createBrowserHistory } from "history";

import './login.css'
import { Link } from 'react-router-dom';

import {fetchAdherantByPassword} from '../Services/services'


  export default function Login(){

    const [mail, setMail] = useState("")
    const [mdp, setMdp ]= useState("")
    const withRefresh = createBrowserHistory({ forceRefresh: true });

    const handleLogin = () => {
        verifyLogin(mail, mdp)
        setMail("")
        setMdp("")
        
    }

    const verifyLogin = (mail, mdp)=>{
        
        
         //console.log('mail: ', mail);
        
         const adherant=fetchAdherantByPassword(mail, mdp);
         //console.log("ad",adherant)

         if(adherant)
           if(adherant.etat==="oui")
           {
           alert("Vous n'avez pas le droit pour se connecter !")
             
           }
           else
            withRefresh.push({
                pathname: `/Listelivres`,
                state: { adherant: adherant }
              });
              
          //  return( <Redirect to={{
          //     pathname: '/Listelivres',
          //     state: { adherant: adherant}
          // }}
          // />)
         else if (mail==="admin@mail.com" && mdp==="admin")
         withRefresh.push({
            pathname: `/Adhérents`,
            state: { name: "admin",
                     pname: "admin" 
                    }
          });
         else
         alert('Mail ou Mot de passe incorrect ')
      }

    return (
        <div className="limiter">
  <div className="container-login100">
    <div className="wrap-login100 p-t-30 p-b-50">
      <span className="login100-form-title p-b-41">
        Account Login
      </span>
      <div className="login100-form validate-form p-b-33 p-t-5">
        <div className="wrap-input100 validate-input" data-validate="Enter username">
          <input className="input100" type="mail" name="username" placeholder="Mail" value={mail} 
                        onChange={e => setMail(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="wrap-input100 validate-input" data-validate="Enter password">
          <input className="input100" type="password" name="pass" placeholder="Mot de passe" value={mdp} 
                        onChange={e => setMdp(e.target.value)} />
          <span className="focus-input100" data-placeholder="" />
        </div>
        <div className="container-login100-form-btn m-t-32">
          <button className="login100-form-btn" onClick={handleLogin}>
            Login
          </button>
          <p className="paragraph">Vous n'avez pas de compte ? <Link to= {`/Inscription`}>S'inscrire</Link></p>
        </div>
      </div>
    </div>
  </div>
</div>

       
    );
}
