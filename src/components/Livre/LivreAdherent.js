import React from 'react';
import { Link } from 'react-router-dom';

export default function LivreAdherent(props){



   

    console.log("idAdh: ",props.adherent);

    return (
       
           <>
            <tr>
                <td>{props.libellé}</td>
                <td>{props.auteur}</td>
                <td>{props.édition}</td>
                <td>{props.nbExmp} Exemplaires</td>
                <td><Link to= {{
                    pathname: `/Listelivres/${props.id}`,
                    state: { user: props.adherent }
                 }} >Afficher plus</Link></td>
                {/* <Redirect to={{
              pathname: `/Listelivres/${props.id}`,
              state: { adherant: props.adherant}
          }}
          >Afficher plus</Redirect> */}
                
            </tr> 
            </>
     
          
    );
}
