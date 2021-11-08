import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Appointments from "./Pages/Appointments/Appointments/Appointments";


import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>
            <Route path='/login'>
              <Login></Login>
            </Route>
            <Route path='/register'>
              <Register></Register>
            </Route>
            <Route path='/appointments'>
              <Appointments></Appointments>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>

    </div>
  );
}

export default App;
