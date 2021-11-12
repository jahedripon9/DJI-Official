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
import ExploreProduct from './Pages/ExploreProduct/ExploreProduct';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DJISupport from './Pages/Shared/ DJISupport/ DJISupport';


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
          <PrivateRoute exact path="/djiproductsadd">
           <DJIProductsAdd />
          </PrivateRoute>
          <Route path="/login">
           <Login />
          </Route>
          <Route path="/register">
           <Register />
          </Route>
          <Route path="/exploreproduct">
           <ExploreProduct />
          </Route>
          <Route path="/djiSupport">
           <DJISupport />
          </Route>
        </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
