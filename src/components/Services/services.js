
const adhrents = [
    {
        id:"1",
        name:"mersani",
        pname:"rawen",
        mail:"rawen@mail.com",
        tel:12345678,
        etat: "non",
        mdp: "rawen"
             
      },
      {
        id:"2",
        name:"missaoui",
        pname:"rym",
        mail:"mail2@mail.com",
        tel:12345678,
        etat: "non",
        mdp: "rym"
        
    
      },
      {
        id:"3",
        name:"hamoudi",
        pname:"amel",
        mail:"mail3@mail.com",
        tel:12345678,
        etat: "oui",
        mdp: "amel"
      }
]


const livres = [
    {
        id:"1",
        libellé:"les rougon-Macquart ",
        auteur:"Émile Zola",
        édition:"04/01/2008",
        nbExmp:13,
        etat: "non"
      },
      {
        id:"2",
        libellé:"les misérables ",
        auteur:"Victor Hugo",
        édition:"30/11/2001",
        nbExmp:7,
        etat: "non"
    
      },
      {
        id:"3",
        libellé:"le petit prince ",
        auteur:"Antoine de Saint-Exupéry",
        édition:"23/02/1999",
        nbExmp:7,
        etat: "oui"
      }
]

const empruntsCours = [
  {
      id:"1",
      date:"30/11/2001",
      name:"mersani",
      pname:"rawen",
      titre:"livre",
      dateEmp:"04/01/2008",
      dateRet:"12/01/2008"
    },
    {
      id:"2",
      date:"30/11/2001",
      name:"missaoui",
      pname:"rym",
      titre:"Le Petit Prince",
      dateEmp:"04/01/2008",
      dateRet:"12/01/2008"
  
    },
    {
      id:"3",
      date:"30/11/2001",
      name:"missaoui",
      pname:"rym",
      titre:"La Petite",
      dateEmp:"04/01/2008",
      dateRet:"12/01/2008"
  
    }
]

// const empruntsRetard = [
//   {
//       id:"1",
//       date:"30/11/2001",
//       name:"mersani",
//       pname:"rawen",
//       titre:"livre",
//       dateEmp:"04/12/2019",
//       dateRet:"30/01/2020"
//     },
//     {
//       id:"2",
//       date:"30/11/2001",
//       name:"yaakoubi",
//       pname:"khouloud",
//       titre:"Le Petit Prince",
//       dateEmp:"01/01/2020",
//       dateRet:"21/01/2020"
  
//     },
//     {
//       id:"3",
//       date:"30/11/2001",
//       name:"missaoui",
//       pname:"rym",
//       titre:"La Petite",
//       dateEmp:"05/05/2020",
//       dateRet:"25/05/2020"
  
//     }
// ]

const demandes = [
  {
      id:"1",
      name:"mersani",
      pname:"rawen",
      mail:"rawen@mail.com",
      tel:12345678,
      etat:"en attente"   
    },
    {
      id:"2",
      name:"missaoui",
      pname:"rym",
      mail:"mail2@mail.com",
      tel:12345678,
      etat:"en attente"   
    },
    {
      id:"3",
      name:"adherent",
      pname:"adherent3",
      mail:"mail3@mail.com",
      tel:12345678,
      etat:"en attente"   

    },
    {
      id:"4",
      name:"adhérent 2",
      pname:"adherent3",
      mail:"mail3@mail.com",
      tel:12345678,
      etat:"accepté"   

    },
    {
      id:"5",
      name:"Adhérent 3",
      pname:"adherent3",
      mail:"mail3@mail.com",
      tel:12345678,
      etat:"refusé"   

    }
]


const emprunts = [
  {
      id:"1",
      date:"30/11/2001",
      idAd:"2",
      idLiv:"1",
      dateEmp:"04/12/2019",
      dateRet:"25/01/2020"
    },
    {
      id:"2",
      date:"30/11/2001",
      idAd:"1",
      idLiv:"2",
      dateEmp:"04/03/2020",
      dateRet:"20/01/2020"
  
    },
    {
      id:"3",
      date:"30/11/2001",
      idAd:"3",
      idLiv:"3",
      dateEmp:"04/01/2008",
      dateRet:"12/01/2008"
  
    },
    {
      id:"3",
      date:"30/11/2001",
      idAd:"3",
      idLiv:"1",
      dateEmp:"04/01/2008",
      dateRet:"12/01/2008"
  
    }

]






function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
}

export const fetchAdherents = async searchValue => {
    await delay(2000)
    return adhrents
}
export const fetchAdherentById = async (adherentId) => {
    return adhrents.find(adherent => adherent.id===adherentId)
}

export const searchAdherents = async searchValue => {
    //await delay(2000)
    return adhrents.filter(adherent => adherent.name.includes(searchValue))
}

export const fetchEmpruntsCountByAdherent = async (adherentId) => {
    
    var count = emprunts.reduce(function(n, person) {
      return n + (person.idAd === adherentId);
    }, 0);

    return count
}

export const fetchEmpruntsByAdherent = async (adherentId) => {
  return emprunts.find(emprunt => emprunt.idAd===adherentId)
}

export const fetchLivreByAdherent = async (livreId) => {
  return livres.find(livre => livre.id===livreId)
}

export const searchEmpruntsCours = async searchValue => {
  //await delay(2000)
  return empruntsCours.filter(emprunt => emprunt.titre.includes(searchValue))
}

export const fetchEmpruntsCours = async searchValue => {
  await delay(2000)
  return empruntsCours
}





function dateDiff(date1, date2){
  var diff = {}                           // Initialisation du retour
  var tmp = date2 - date1;

  tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
  diff.sec = tmp % 60;                    // Extraction du nombre de secondes

  tmp = Math.floor((tmp-diff.sec)/60);    // Nombre de minutes (partie entière)
  diff.min = tmp % 60;                    // Extraction du nombre de minutes

  tmp = Math.floor((tmp-diff.min)/60);    // Nombre d'heures (entières)
  diff.hour = tmp % 24;                   // Extraction du nombre d'heures
   
  tmp = Math.floor((tmp-diff.hour)/24);   // Nombre de jours restants
  diff.day = tmp;
   
  return diff;
}

export const fetchEmpruntsRetard = async searchValue => {
  await delay(2000)
  const empruntsRetard = []
  //const empruntsCours = {}

emprunts.forEach(function(item){
  const date1 = new Date(emprunts.dateEmp)
  const date2 = new Date(emprunts.dateRet)
  const diff = dateDiff(date1, date2)
  if (diff >=15) {empruntsRetard.push(item) }

});
console.log(empruntsRetard)
return empruntsRetard

  
}


// function dayDifference(d1, d2)
//   {
//     d1 = d1.getTime() / 86400000;
//     d2 = d2.getTime() / 86400000;
//     return new Number(d2 - d1).toFixed(0);
//   }


// const  d2= new Date()
// export const fetchEmpruntsEncours = async ()=> {
//   await delay(2000)
 
//   let empruntEncours = emprunts.filter(emprunt => emprunt.dateRetour === "" && dayDifference(emprunt.dateEmp,d2) <= 15 )
//   return empruntEncours
 
// }  

// export const fetchEmpruntsRetard = async ()=> {
//   let empruntsRetard = emprunts.filter(emprunt => emprunt.dateRet === "" && dayDifference(emprunt.dateEmp,d2) > 15 )
//   return empruntsRetard
// }


export const fetchLivres = async searchValue => {
    await delay(2000)
    return livres
}

export const fetchLivresNotArchive = async searchValue => {
  await delay(2000)
  return livres.filter(livre => livre.etat==="non")
}


export const fetchLivreById = async (livreId) => {
    return livres.find(livre => livre.id===livreId)
}

export const searchLivres = async searchValue => {
    //await delay(2000)
    return livres.filter(livre => livre.libellé.includes(searchValue))
}

export const searchLivresName = async searchValue => {
  //await delay(2000)
  return livres.filter(livre => livre.libellé.includes(searchValue) && livre.etat==="non")
}

export const searchLivresAuteur = async searchAuteurValue => {
  //await delay(2000)
  return livres.filter(livre => livre.auteur.includes(searchAuteurValue) && livre.etat==="non")
}
export const fetchDemandes = async searchValue => {
  await delay(2000)
  return demandes
}


export const searchDemandes = async searchValue => {
  //await delay(2000)
  return demandes.filter(demande => demande.etat.includes(searchValue))
}

export const searchEmprunts = async searchValue => {
  //await delay(2000)
  return emprunts.filter(emprunt => emprunt.titre.includes(searchValue))
}
export const fetchEmprunts = async searchValue => {
  await delay(2000)
    // const {adherentId, livreId, emprunts} = getValues();
    // const adherentId = adhrents.find(adherent => adherent.id===emprunts.idAd)
    // const livreId = livres.find(livre => livre.id===emprunts.idLiv)
    return emprunts
    }

    export const fetchEmpruntsByID = async (empruntId) => {
      return emprunts.find(emprunt => emprunt.id===empruntId)
  }

  export const fetchAdherantByPassword = (mail, mdp) => {
   
    return adhrents.filter((adherant) => adherant.mail === mail && adherant.mdp === mdp)[0];
  };
 