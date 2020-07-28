import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

import Header from './components/Header/Header';
import Menu from './components/Menu/Menu';
import Footer from './components/Footer/Footer';
import AdherentPage from './components/Adherent/AdherentPage';
import LivrePage from './components/Livre/LivrePage'
import AdherentDetails from './components/Adherent/AdherentDetails';
import LivreDetails from './components/Livre/LivreDetails';
import EmpruntsPage from './components/Emprunts/EmpruntsPage'
import DemandePage from './components/Demandes/DemandePage';
import EmpruntDetails from './components/Emprunts/EmpruntDetails';
import Login from './components/Login/login';
import Inscription from './components/Inscription/inscription';
import LivreAdherentPage from './components/Livre/LivreAdherentPage';
import MenuAdherent from './components/Menu/MenuAdherent';
import LivreDetailsAdherent from './components/Livre/LivreDetailsAdherent';


  


function App() {
  return (  
    <div>
      <Router>
        <Switch>
        <Route exact path="/Inscription">
             <Inscription/>
        </Route>

        <Route exact path="/Login">
             <Login/>
        </Route>


        
          <Route exact path="/Adhérents">
            <Header />
            <Menu />
            <AdherentPage/>
            <Footer/>
          </Route>

          <Route exact path="/livres">
            <Header />
            <Menu />
            <LivrePage/>
            <Footer/>
          </Route>

          <Route exact path="/Emprunts">
            <Header />
            <Menu />
            <EmpruntsPage/>
            <Footer/>
          </Route>

          <Route exact path="/Demandes">
            <Header />
            <Menu />
            <DemandePage/>
            <Footer/>
          </Route>

          <Route exact path="/Adhérents/:adherentId">
            <Header />
            <Menu />
            <AdherentDetails/>
            <Footer/>
          </Route>

          <Route exact path="/livres/:livreId">
            <Header />
            <Menu />
            <LivreDetails/>
            <Footer/>
          </Route>


          <Route exact path="/Emprunts/:empruntId">
            <Header />
            <Menu />
            <EmpruntDetails/>
            <Footer/>
          </Route>

          <Route exact path="/Listelivres">
          <Header />
            <MenuAdherent />
            <LivreAdherentPage />
            <Footer/>
          </Route>

          <Route exact path="/Listelivres/:livreId">
            <MenuAdherent />
            <LivreDetailsAdherent />
            <Footer/>
          </Route>


        </Switch>
      </Router>
     
     
    </div>
  );
}

export default App;

