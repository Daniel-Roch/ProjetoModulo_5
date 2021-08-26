import FaleConosco from './Pages/FaleConosco/FaleConosco';

//Pages
import Login from './Pages/Login/Login';
import CadastroPaciente from './Pages/CadastroPaciente/CadastroPaciente';

//importando o React-Router-Dom
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* Login */}
          <Route exact path="/Login" children={<Login />} />
          <Route exact path="/" children={<Home />} />
          <Route exact path="/faleconosco" children={<FaleConosco />} />
          {/* Cadastro */}
          <Route exact path="/Cadastro" children={<CadastroPaciente />} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
