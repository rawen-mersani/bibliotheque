import React from 'react';


export default function UserPanel(props){

    return (
        
        <div className="Entete">
            {/* Sidebar user panel */}
            <div className="user-panel">
                <div className="pull-left image">
                    <img src="dist/img/user.jpg" className="img-circle" alt="UserImage" />
                </div>
                <div className="pull-left info">
                    <p>Mersani Rawen</p>
                    <a href="#"><i className="fa fa-circle text-success" /> Online</a>
                </div>
            </div>
        </div>
    );
}
