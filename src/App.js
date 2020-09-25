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
import notFound from './Component/notFound/notFound';

 export const UserContext = createContext();

 const App = () => {
   const [loggedInUser,setLoggedInUser] = useState({})
   return (
    <UserContext.Provider value={[loggedInUser,setLoggedInUser]}>
      <Router> 
        
        <Switch> 
          <Route path='/home'> 
          <Home></Home>
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
          
            <Route exact path ='/'> 
              <Home></Home>
            </Route> 
            <Route path="*">
                <notFound></notFound>
            </Route>
        </Switch>  
      </Router>
    </UserContext.Provider>
     
   );
 };
 
 export default App;