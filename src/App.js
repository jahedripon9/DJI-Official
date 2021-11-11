import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/About/About';
import Users from './Pages/Home/Users/Users';

import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';
import DJIProductsAdd from './Pages/DJIProductsAdd/DJIProductsAdd';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';


function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/users">
            <Users />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/djiproductsadd">
           <DJIProductsAdd />
          </Route>
          <Route path="/login">
           <Login />
          </Route>
          <Route path="/register">
           <Register />
          </Route>
        </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
