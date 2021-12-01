import './App.css';
import Canvas from './components/Canvas';
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {


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
