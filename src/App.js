import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Appointments from "./Pages/Appointments/Appointments/Appointments";


import Home from "./Pages/Home/Home/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/appointments'>
            <Appointments></Appointments>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
