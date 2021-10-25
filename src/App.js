import './App.css';
import Canvas from './components/Canvas';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';

function App() {
  return (
    <div className="app">

      <Router>
        <Switch>

          <Route path="/">
            <Login />
          </Route>

          <Route path="/community">
            <Canvas />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
