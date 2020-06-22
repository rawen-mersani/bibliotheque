
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


function delay(ms){
    return new Promise(resolve => setTimeout(resolve, ms))
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