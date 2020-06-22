
const adhrents = [
    {
        id:"1",
        name:"mersani",
        pname:"rawen",
        mail:"rawen@mail.com",
        nbEmp:1,
        tel:12345678,
        livreEmp:"livre ",
        dateEmp:"26/05/2020",
        dateRet:"06/06/2020"
      },
      {
        id:"2",
        name:"missaoui",
        pname:"rym",
        mail:"mail2@mail.com",
        nbEmp:2,
        tel:12345678,
        livreEmp:"livre ",
        dateEmp:"26/05/2020",
        dateRet:"06/06/2020"
    
      },
      {
        id:"3",
        name:"Adhérent 3",
        pname:"adherent3",
        mail:"mail3@mail.com",
        nbEmp:2,
        tel:12345678,
        livreEmp:"livre ",
        dateEmp:"26/05/2020",
        dateRet:"06/06/2020"
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