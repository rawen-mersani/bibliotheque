import React, { useState, useRef, memo } from "react"
import '../Adherent/adherentPage.css'

function AddForm({addLivre, maxNbExmpValue}) {
    
  const [libellé, setLibellé] = useState("")
  const [auteur, setAuteur] = useState("")
  const [édition, setEdition ]= useState("")
  const [nbExmp, setNbExmp] = useState(0)
  const [etat, setEtat] = useState("non")



  
  const inputName = useRef(null)
  const handleAddLivre = () => {
    addLivre(libellé, auteur, édition, nbExmp,etat)
    inputName.current.focus()
    setLibellé("")
    setAuteur("")
    setEdition("")
    setNbExmp(0)
    setEtat("non")
    
  }
  /*useEffect(() => {
    document.name = name
  })
*/

  
  return (
    <section className="content">
    <div className="row">
    <div className="col-xs-12">
     <div className="box">
        
    
    <div className="box box-info">
        <div className="box-header with-border">
            <h3 className="box-title">Ajouter un livre</h3>
        </div>
        <div className="form-horizontal">
            <div className="box-body">
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Libellé</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="libellé" name="libellé" value={libellé} ref={inputName}
                        onChange={e => setLibellé(e.target.value)} placeholder="Libellé" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Auteur</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="auteur" name="auteur" value={auteur} 
                        onChange={e => setAuteur(e.target.value)} placeholder="Auteur" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Edition</label>
                <div className="col-sm-10">
                    <input type="date" className="form-control" id="édition" name="édition" value={édition} 
                        onChange={e => setEdition(e.target.value)} placeholder="Mail" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Nombre d'exemplaires</label>
                <div className="col-sm-10">
                    <input aria-label="nbExmp" type="number" className="form-control" id="nbExmp" placeholder="Nombre Exemplaires"
                    value={nbExmp} name="nbExmp" onChange={e => setNbExmp(e.target.value)} />
                    {nbExmp > maxNbExmpValue && (
            <div data-testid="error-nbExmp" className="error">
                Le nombre d'exemplaires doit etre inférieur à {maxNbExmpValue}

            </div>
        )}
                </div>
            </div>
            
            
        
        </div>
        {/* /.box-body */}
        <div className="box-footer">
        <button  className="btn btn-default">Cancel</button>
        <button  className="btn btn-success pull-right" onClick={handleAddLivre}>Ajouter</button>

        </div>
        
    </div>
</div>




     
    </div>
    </div>
    </div>
    </section>
  )
}
AddForm.defaultProps = {
    maxNbExmpValue : 20,
}


export default memo(AddForm)