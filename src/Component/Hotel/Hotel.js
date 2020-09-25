import React from 'react'; 
import './Hotel.css'
import StarIcon from '@material-ui/icons/Star';

const Hotel = (props) => {
    const {title,img,price,stay,description,type,star} = props.room;
    return (
    <div className="container">
         <div className="hotel_container">
            <div className="hotel"> 
                <div className="hotel_img">
                    <img src={img} alt=""/>
                </div>
                <div className="hotel_content">
                    <h4>{title}</h4>
                    <p>{type}</p>
                    <p>{description}</p>
                    <StarIcon/>{star} <span style={{marginLeft:'10px',fontWeight:'bold'}}>${price}/</span><span><small style={{fontSize:'12px',color:'gray'}}>{stay}</small></span>
                </div>
            </div> 
        </div>
    </div>
        
    );
};

export default Hotel;