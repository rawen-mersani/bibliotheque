import React from 'react';
import '../Adherent/adherentPage.css'

function Header(props){

  // let location = useLocation(); 
  // console.log("hhh", location)
  // const user = location.state.adherant
  

   

    return (
      <div className="Header">
        <header className="main-header">
  
          <a href="index.html" className="logo">
            {/* mini logo for sidebar mini 50x50 pixels */}
            <span className="logo-lg">Bibliothèque</span>
          </a>
  <nav className="navbar navbar-static-top">
    {/* Sidebar toggle button*/}
  
    {/* Navbar Right Menu */}
    <div className="navbar-custom-menu">
      <ul className="nav navbar-nav">
          
        
        {/* Notifications: style can be found in dropdown.less */}
        <li className="dropdown notifications-menu">
          <a href="page" className="dropdown-toggle" data-toggle="dropdown">
            <i className="fa fa-bell-o" />
          </a>
          <ul className="dropdown-menu">
            <li className="header">You have 10 notifications</li>
            <li>
              {/* inner menu: contains the actual data */}
              <ul className="menu">
                <li>
                  <a href="#">
                    <i className="fa fa-users text-aqua" /> 5 new members joined today
                  </a>
                </li>
                
                <li>
                  <a href="page">
                    <i className="fa fa-shopping-cart text-green" /> 25 sales made
                  </a>
                </li>
                
              </ul>
            </li>
            <li className="footer"><a href="#">View all</a></li>
          </ul>
        </li>
      
        {/* User Account: style can be found in dropdown.less */}
        <li className="dropdown user user-menu">
          <a href="#" className="dropdown-toggle" data-toggle="dropdown">
            <img src="dist/img/user.jpg" className="user-image" alt="User Image" />
            <span className="hidden-xs">{/*user && user.name} {user && user.pname*/}Mersani Rawen </span>
          </a>
          <ul className="dropdown-menu">
            {/* User image */}
            <li className="user-header">
              <img src="dist/img/user.jpg" className="img-circle" alt="User Image" />
              <p>
                Alexander Pierce - Web Developer
                <small>Member since Nov. 2012</small>
              </p>
            </li>
            {/* Menu Body */}
            <li className="user-body">
              <div className="row">
                <div className="col-xs-4 text-center">
                  <a href="#">Followers</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Sales</a>
                </div>
                <div className="col-xs-4 text-center">
                  <a href="#">Friends</a>
                </div>
              </div>
              {/* /.row */}
            </li>
            {/* Menu Footer*/}
            <li className="user-footer">
              <div className="pull-left">
                <a href="#" className="btn btn-default btn-flat">Profile</a>
              </div>
              <div className="pull-right">
                <a href="#" className="btn btn-default btn-flat">Sign out</a>
              </div>
            </li>
          </ul>
        </li>
        
      </ul>
    </div>
  </nav>
</header>

        </div>
       
    );
}
export default Header;