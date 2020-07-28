import React from 'react';
import UserPanel from './UserPanel';
import SearchForm from './SearchForm';
import ElementList from './ElementList';



let objects=[
  {
    title:"Adhérents",
    icon:"fa fa-users"
  },
  {
    title:"Livres",
    icon:"fa fa-book"

  },
  {
    title:"Emprunts",
    icon:"fa fa-calendar-minus-o"

  },
  {
    title:"Demandes",
    icon:"fa  fa-user-plus"

  }
  ]

  export default function Menu(props){

    return (
        <div className="Menu">
          <aside className="main-sidebar">
            <section className="sidebar">
              
              <UserPanel />
              <SearchForm/>
              {/*<ul className="sidebar-menu" data-widget="tree">
                <li className="header">MAIN NAVIGATION</li>
                <li className="treeview menu-open">
                  <Link to="/adherents" >
                        <i className="fa fa-users" /> <span>Adhérents</span>
                  </Link>
                </li>
                <li className="treeview menu-open">
                  <Link to="/livres" >
                        <i className="fa fa-book" /> <span>Livres</span>
                  </Link>
                </li>
                <li className="treeview menu-open">
                  <Link to="/content" >
                        <i className="fa fa-calendar-minus-o" /> <span>Emprunts</span>
                  </Link>
                </li>
                <li className="treeview menu-open">
                  <Link to="/content" >
                        <i className="fa  fa-user-plus" /> <span>Demandes d'adhésion</span>
                  </Link>
                </li>
    </ul>*/}
               
              <ElementList objects={objects} />
            </section>
          </aside>
 
        </div>
       
    );
}
