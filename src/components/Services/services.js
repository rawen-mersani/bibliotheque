
const adhrents = [
    {
        id:"1",
        name:"mersani",
        pname:"rawen",
        mail:"rawen@mail.com",
        nbEmp:1,
        tel:12345678,
        livreName:"livre2",
        dateEmp:"26/05/2020",
        dateRet:"06/06/2020"
        /*livreEmp:[
          {
          livreName:"livre1",
          dateEmp:"26/05/2020",
          dateRet:"06/06/2020"
        },
        {
          livreName:"livre2",
          dateEmp:"26/05/2020",
          dateRet:"06/06/2020"
        }
      ]*/
      
      },
      {
        id:"2",
        name:"missaoui",
        pname:"rym",
        mail:"mail2@mail.com",
        nbEmp:2,
        tel:12345678,
        livreName:"livre2",
        dateEmp:"26/05/2020",
        dateRet:"06/06/2020"
        /*livreEmp:[
          {
          livreName:"livre",
          dateEmp:"26/05/2020",
          dateRet:"06/06/2020"
        },
        {
          livreName:"livre",
          dateEmp:"26/05/2020",
          dateRet:"06/06/2020"
        }
      ]*/
        
    
      },
      {
        id:"3",
        name:"Adhérent 3",
        pname:"adherent3",
        mail:"mail3@mail.com",
        nbEmp:2,
        tel:12345678,
        livreName:"livre2",
        dateEmp:"26/05/2020",
        dateRet:"06/06/2020"
        /*livreEmp:[
          {
          livreName:"livre",
          dateEmp:"26/05/2020",
          dateRet:"06/06/2020"
        },
        {
          livreName:"livre",
          dateEmp:"26/05/2020",
          dateRet:"06/06/2020"
        }
      ]*/
      }
]


const livres = [
    {
        id:"1",
        libellé:"Les Rougon-Macquart ",
        auteur:"Émile Zola",
        édition:"04/01/2008",
        nbExmp:13
      },
      {
        id:"2",
        libellé:"Les Misérables ",
        auteur:"Victor Hugo",
        édition:"30/11/2001",
        nbExmp:7
    
      },
      {
        id:"3",
        libellé:"Le Petit Prince ",
        auteur:"Antoine de Saint-Exupéry",
        édition:"23/02/1999",
        nbExmp:7
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

const empruntsRetard = [
  {
      id:"1",
      date:"30/11/2001",
      name:"mersani",
      pname:"rawen",
      titre:"livre",
      dateEmp:"04/12/2019",
      dateRet:"30/01/2020"
    },
    {
      id:"2",
      date:"30/11/2001",
      name:"yaakoubi",
      pname:"khouloud",
      titre:"Le Petit Prince",
      dateEmp:"01/01/2020",
      dateRet:"21/01/2020"
  
    },
    {
      id:"3",
      date:"30/11/2001",
      name:"missaoui",
      pname:"rym",
      titre:"La Petite",
      dateEmp:"05/05/2020",
      dateRet:"25/05/2020"
  
    }
]

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
      name:"Adhérent 3",
      pname:"adherent3",
      mail:"mail3@mail.com",
      tel:12345678,
      etat:"en attente"   

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



export const searchEmpruntsCours = async searchValue => {
  //await delay(2000)
  return empruntsCours.filter(emprunt => emprunt.titre.includes(searchValue))
}

export const fetchEmpruntsCours = async searchValue => {
  await delay(2000)
  return empruntsCours
}

export const searchEmpruntsRetard = async searchValue => {
  //await delay(2000)
  return empruntsRetard.filter(emprunt => emprunt.titre.includes(searchValue))
}

export const fetchEmpruntsRetard = async searchValue => {
  await delay(2000)
  return empruntsRetard
}


export const fetchLivres = async searchValue => {
    await delay(2000)
    return livres
}
export const fetchLivreById = async (livreId) => {
    return livres.find(livre => livre.id===livreId)
}

export const searchLivres = async searchValue => {
    //await delay(2000)
    return livres.filter(livre => livre.auteur.includes(searchValue))
}



export const fetchDemandes = async searchValue => {
  await delay(2000)
  return demandes
}


export const searchDemandes = async searchValue => {
  //await delay(2000)
  return demandes.filter(demande => demande.etat.includes(searchValue))
}