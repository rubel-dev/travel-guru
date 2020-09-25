 import React, { createContext, useState } from 'react'; 
import Header from './Component/Header/Header';
import Home from './Component/Home/Home';
import Root from './Component/Root/Root';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Component/Login/Login';
import Place from './Component/Place/Place';
import Book from './Component/Book/Book'; 
import PrivateRoute from './Component/PrivateRoute/PrivateRoute';

 export const UserContext = createContext();

 const App = () => {
   const [loggedInUser,setLoggedInUser] = useState({})
   return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router> 
        
        <Switch> 
          <Route path='/home'> 
          </Route>
          <Route path="/login">
                <Login></Login>
            </Route>
            <PrivateRoute path="/book/:destination">
                <Book></Book>
            </PrivateRoute>
        
            <Route path ="/:place">
                <Place></Place>
            </Route>
          
            <Route path ='/'> 
              <Home></Home>
            </Route>
          
        </Switch>  
      </Router>
    </UserContext.Provider>
     
   );
 };
 
 export default App;