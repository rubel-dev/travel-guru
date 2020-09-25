import React from 'react';
import './Home.css'
import coxBazar from '../../Image/Rectangle 1.png'
import sreemangal from '../../Image/Sreemongol.png'
import sundarbans from '../../Image/sundorbon.png'
import Header from '../Header/Header';
import { useHistory } from 'react-router-dom';

const Home = () => {
    const history = useHistory()
const handleSlide =(destination)=>{
    if(destination === "sundarbans"){
            history.push(`/${destination}`)
    }
    if(destination === "sreemangal"){
        history.push(`/${destination}`)
    }
    if(destination === "coxsbazar"){
        history.push(`/${destination}`)
    }
}
    return (
        <div className="bg_style">
          
            <Header></Header>
                <div className="container">
                   
                
                    <div className="slider_area">
                        <div onClick={()=>handleSlide("coxsbazar")} className="card cox_bg" >
                                <h2>COX'S BAZAR</h2>
                        </div>
                        
                        <div onClick={()=>handleSlide("sreemangal")} className="card sreemangal_bg">
                                <h2>SREEMANGAL</h2>
                        </div>
                        <div onClick={()=>handleSlide("sundarbans")} className="card sundarbans_bg">
                            <h2>SUNDARBANS</h2>
                        </div>          
                    </div>
                  </div>
                
         </div>
    );
};

export default Home;