import React, { useContext, useState } from 'react';
import Header from '../Header/Header';
import * as firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config'
import './Login.css' 
import {UserContext} from '../../App'
import { useHistory, useLocation } from 'react-router-dom';
firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    const fbProvider = new firebase.auth.FacebookAuthProvider();
    const history = useHistory();
   const location = useLocation();  
  const { from } = location.state || { from: { pathname: "/" } };

    const [newUser,setNewUser] = useState(false)
    const [user,setUser] = useState({
        firstName:'',
        lastName:'',
        email:'',
        password:'',
        error:'',
        success:'',
        confirmPassword:'',

    })
  

    
   


    const handleBlur =(e)=>{
        let isFieldVaild = true;
        if(e.target.name === "email"){
            
            const isEmailVaild =/\S+@\S+\.\S+/.test(e.target.value) 
             isFieldVaild = isEmailVaild;
        }
        if(e.target.name === "password"){
            const isPasswordVaild = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e.target.value)
            isFieldVaild = isPasswordVaild;
            if(isPasswordVaild){
              
            }
            else{
              alert("Error:Password must contain at least 8 characters, including at least one UPPER, one lowercase and one numbers!")
            }
              
        }
        if(e.target.name === "confirmPassword"){
          const isConfirmPasswordVaild = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/.test(e.target.value)
          isFieldVaild = isConfirmPasswordVaild
        }
         
        if(isFieldVaild){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo)
        }
    }

    const handleSubmit =(e)=>{ 
      const { password, confirmPassword } =  user;
         
        if (password !== confirmPassword) {
            alert("Passwords don't match");
        } else {
            
        }

        if(!newUser && user.email && user.password===user.confirmPassword){
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password) 
            .then(res =>{
                const newUserInfo = {...user}
                newUserInfo.error ='';
                newUserInfo.success ="User Created Successfully"
                 
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo)
                history.replace(from); 
                updateName(user.firstName,user.lastName)
                
            })
            .catch( error=>{
                const newUserInfo={...user}
                newUserInfo.error =error.message;
                setUser(newUserInfo)
              });
        }

        if(newUser && user.email && user.password){
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
            
            .then(res =>{
                const newUserInfo = {...user}
                newUserInfo.error ='';
                newUserInfo.success ="User Logged In Successfully"
                setUser(newUserInfo)
                setLoggedInUser(newUserInfo)
                history.replace(from);
                console.log(res)
            })
            
            .catch(function(error) {
                const newUserInfo={...user}
                newUserInfo.error =error.message;
                setUser(newUserInfo)
              });
        }
        


        e.preventDefault()
      
    }



    
  const updateName =(firstName,lastName)=>{
      console.log(firstName,lastName)
    const user = firebase.auth().currentUser;

    user.updateProfile({
      displayName:firstName, 
      
    }).then(function() {
       console.log("name update successfully")
    }).catch(function(error) {
       console.log(error)
    });
  }

    const handleFacebookSignIn =()=>{
        firebase.auth().signInWithPopup(fbProvider)
        .then(result => {
            
            const user = result.user;
            
            
          }).catch( error=>{
            console.log(error.message)
          });
    }

    const handleGoogleSignIn = ()=>{
        firebase.auth().signInWithPopup(googleProvider)
        .then(result => { 
            const {displayName,email} = result.user; 
            const user ={
                firstName:displayName,
                email:email
            }
            setUser(user)
            setLoggedInUser(user)
            history.replace(from);
            

          }).catch(error=> {
            console.log(error.message)
          });
    }
    return (
        <div>
            <Header></Header>  
            <div className="login_area">
             <div className="login_page">
              <h3>{newUser?"Login":"Create an account"}</h3>
    
               <form onSubmit={handleSubmit}>
                    
                    {!newUser && <input onBlur={handleBlur} name="firstName" type="text" placeholder="First Name"/>}
                    {!newUser &&  <input onBlur={handleBlur} name ="lastName" type="text" placeholder="Last Name"/>}
                  
                    <input onBlur={handleBlur} name="email" type="email" placeholder="Username or Email"/>
                    <input onBlur={handleBlur} name="password" type="password" title="Password must contain at least 8 characters, including one UPPER, onelowercase and one numbers" placeholder="Password"/>
                    
                  {
                      newUser && <div style={{margin:"20px 0px"}}> 
                      <input type="checkbox" name="remember"/>
                       <span>Remember Me</span>
                       <a style={{float:'right',color:"#F9A51A"}} href="#">Forgotten Password</a>
                    </div>
                  }

                   {!newUser && <input onBlur={handleBlur} name="confirmPassword" type="password" placeholder="confirm password"/> }
                    {
                    newUser ? <input onBlur={handleBlur}   style={{backgroundColor:'#F9A51A'}} type='submit' value="Login"/>:
                    <input onBlur={handleBlur}   style={{backgroundColor:'#F9A51A'}} type='submit' value="create an account"/>
                    }
                  
                        <h6>{newUser? "Don't have any account?":"Already have an account?"}  
                        <span onClick={()=>setNewUser(!newUser)} style={{color:'#F9A51A',fontSize:'14px'}}> {newUser?"create an account":"Login"}</span>
                       </h6>
                  
               </form>
             
             </div><br/>
             <p>--------------------------Or--------------------------</p>

             <div style={{textAlign:'center'}}> 
                <input type="submit" onClick={handleFacebookSignIn} value="Continue with facebook" className="search_btn fb_bg"></input>
             </div>   
             <br/>
            
             <div style={{textAlign:'center'}}> 
                 <input type="submit" onClick={handleGoogleSignIn} value="Continue with google   " className="search_btn google_bg"></input>
             </div>
             <p style={{color:'red'}}>{user.error}</p>
             <p style={{color:'green'}}>{user.success}</p>
             
          </div>
          
        </div>
    );
};

export default Login;