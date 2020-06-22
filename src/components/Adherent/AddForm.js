import React, { useState, useRef, memo } from "react"


function AddForm({addAdherent}) {
    
  const [name, setName] = useState("")
  const [pname, setPname] = useState("")
  const [nbEmp, setNbEmp ]= useState(0)
  const [mail, setMail] = useState("")
  const [tel, setTel] = useState()



  
  const inputName = useRef(null)
  const handleAddAdherent = () => {
    addAdherent(name, pname, mail, nbEmp, tel)
    inputName.current.focus()
    setName("")
    setPname("")
    setMail("")
    setNbEmp(0)
    setTel("")
    
  }
  /*useEffect(() => {
    document.name = name
  })
*/

  const handleName = e => setName(e.target.value)
  const handlePname = e => setPname(e.target.value)
  const handleMail = e => setMail(e.target.value)

  return (
    <section className="content">
    <div className="row">
    <div className="col-xs-12">
     <div className="box">
        
    
    <div className="box box-info">
        <div className="box-header with-border">
            <h3 className="box-title">Ajouter un adhérent</h3>
        </div>
        <div className="form-horizontal">
            <div className="box-body">
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Nom</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="name" name="name" value={name} ref={inputName}
                        onChange={handleName} placeholder="Nom" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Prénom</label>
                <div className="col-sm-10">
                    <input type="text" className="form-control" id="pname" name="pname" value={pname} 
                        onChange={handlePname} placeholder="Prénom" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Mail</label>
                <div className="col-sm-10">
                    <input type="mail" className="form-control" id="mail" name="mail" value={mail} 
                        onChange={handleMail} placeholder="Mail" />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="inputPassword3" className="col-sm-2 control-label">Nombre emprunts</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="nbEmp" placeholder="Nombre Emprunts"
                    value={nbEmp} name="nbEmp" onChange={e => setNbEmp(e.target.value)} />
                </div>
            </div>
            
            <div className="form-group">
                <label htmlFor="inputEmail3" className="col-sm-2 control-label">Télephone</label>
                <div className="col-sm-10">
                    <input type="number" className="form-control" id="tel" name="tel" value={tel} 
                        onChange={e => setTel(e.target.value)} placeholder="Télephone" />
                </div>
            </div>
        
        </div>
        {/* /.box-body */}
        <div className="box-footer">
        <button  className="btn btn-default">Cancel</button>
        <button  className="btn btn-success pull-right" onClick={handleAddAdherent}>Ajouter</button>
        </div>
        {/* /.box-footer */}
    </div>
</div>




     
    </div>
    </div>
    </div>
    </section>
  )
}
export default memo(AddForm)