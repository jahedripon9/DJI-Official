import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import About from './Pages/Home/About/About';
import Users from './Pages/Home/Users/Users';
import Footer from './Pages/Shared/Footer/Footer';
import DJIProductsAdd from './Pages/DJIProductsAdd/DJIProductsAdd';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './context/AuthProvider/AuthProvider';
import ExploreProduct from './Pages/ExploreProduct/ExploreProduct';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import DJISupport from './Pages/Shared/ DJISupport/ DJISupport';
import VerifyProduct from './Pages/VerifyProduct/VerifyProduct';
import MyOrder from './Pages/MyOrder/MyOrder';
import Deshboard from './Pages/Deshboard/Deshboard/Deshboard';
import Payment from './Pages/Deshboard/Payment/Payment';
import AboutUs from './Pages/Shared/AboutUs/AboutUs';
import ContactUs from './Pages/Shared/ContactUs/ContactUs';
import WelcomePage from './Pages/WelcomePage/WelcomePage';



function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
        
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
          <Route path="/aboutus">
           <AboutUs />
          </Route>
          <Route path="/welcome">
           <WelcomePage />
          </Route>
          <Route path="/contact">
           <ContactUs />
          </Route>
          <Route path="/exploreproduct">
           <ExploreProduct />
          </Route>
          <PrivateRoute  path="/djiproduct/:verifyId">
              <VerifyProduct></VerifyProduct>
            </PrivateRoute>
          <PrivateRoute  path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
          <Route path="/djiSupport">
           <DJISupport />
          </Route>
          <PrivateRoute path="/deshboard">
           <Deshboard />
          </PrivateRoute>
          <PrivateRoute path="/payment">
           <Payment />
          </PrivateRoute>
        </Switch>
      <Footer></Footer>
    </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
