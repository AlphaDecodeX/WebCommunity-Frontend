import './App.css';
import Canvas from './components/Canvas';
import Login from './components/Login';
import { useHistory } from 'react-router';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {

  let history = useHistory();

  return (
    <div className="app">

      <Router>
        <Switch>

          <Route path="/home">
            <Canvas />
          </Route>

          <Route path="/">
            <Login />
          </Route>



        </Switch>
      </Router>
    </div>
  );
}

export default App;
