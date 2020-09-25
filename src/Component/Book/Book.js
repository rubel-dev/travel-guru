import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import Header from '../Header/Header';
import Hotel from '../Hotel/Hotel';
import './Book.css'

const Book = () => {
    const [loggedInUser,setLoggedInUser] = useContext(UserContext)
    
    const {destination} = useParams()
     const rooms = [
         {
             title: 'Light bright airy stylish apt and safe peaceful stay',
             type: '4 guests  2 bedrooms  2 beds  2 baths ',
             description:'Wif Air conditioning Kitchen Cancellation fixibilty about',
             star:'4.9(20)',
             price:34,
             stay:'night $167 total',
             img:'https://iili.io/25sy6N.png'
             

         },
         {
            title: 'Light bright airy stylish apt and safe peaceful stay',
            type: '4 guests  2 bedrooms  2 beds  2 baths ',
            description:'Wif Air conditioning Kitchen Cancellation fixibilty about',
            star:'4.9(20)',
            price:34,
            stay:'night $167 total',
            img:'https://iili.io/25spGp.png'
             

        },
        {
            title: 'Light bright airy stylish apt and safe peaceful stay',
            type: '4 guests  2 bedrooms  2 beds  2 baths ',
            description:'Wif Air conditioning Kitchen Cancellation fixibilty about',
            star:'4.9(20)',
            price:34,
            stay:'night $167 total',
            img:' https://iili.io/25LHFI.png'
            
        }
     ]
     
    return (
        <div> 
             <Header></Header>
            <p>252 stays Apr 13-17 3 guests</p>
            <h3 style={{float:'right',width:"400px"}}>{loggedInUser.firstName}</h3>
            <h4>Stay in {destination}</h4>
         <div className="hotel_info">
             
           {
                rooms.map(room =><Hotel room ={room}></Hotel>)
                 
           }
            
         </div>
         <div className="google_map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d3749245.2713778643!2d92.15710884062497!3d23.410913435810663!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sbn!2sbd!4v1600916539692!5m2!1sbn!2sbd" className="map" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
 
         </div>
        </div>
    );
}
 

export default Book;