import logo from './logo.svg';
import './App.css';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import NavBar from './components/statics/NavBar';
import Accueil from './pages/Accueil';
import MesInterventions from './pages/MesInterventions';
import Stars from './components/ui/Stars';

// import NavBarV2 from './components/statics/NavBarV2';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Stars />
        <Switch>
          <Route exact path="/">
            <Accueil />
          </Route>
          <Route exact path="/interventions">
            <MesInterventions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
