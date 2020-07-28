import React from 'react';


export default function UserPanel(props){

    // let location = useLocation(); 
    // const adherent = location.state.adherant
    //console.log("userpannel",adherent.name);

    return (
        
        <div className="Entete">
            {/* Sidebar user panel */}
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="dist/img/user.jpg" className="img-circle" alt="UserImage" />
                </div>
                <div className="pull-left info">
                    <p>{/*adherent && adherent.name} {adherent && adherent.pname*/}
                    Mersani Rawen
                    </p>
                    <a href="page"><i className="fa fa-circle text-success" /> Online</a>
                </div>
            </div>
        </div>
    );
}
