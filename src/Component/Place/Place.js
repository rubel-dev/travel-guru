import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Header from '../Header/Header';
import './Place.css'

const Place = () => {
    const {place} = useParams();
     const history = useHistory()
    const handleBooking =(destination)=>{
        history.push(`/book/${destination}`)
    }
    return (
        <div className="bg_style">
            <Header></Header>
            <div className="container">
                
                    <div className="place_description">
                         {
                             place === "coxsbazar" &&
                             <div className="same_style">
                             <h1>COX'S BAZAR</h1>
                             <p>Cox's Bazar is a town on the southease coast of Bangladesh. It's known for its verylong. snady beachfront, stretching from Sea Beach in the north to koltoli Beach in the south. Aggamdeda khyang monastrry is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea furties breed on nearby Sonadia islamn.</p>
                         </div>
                         }
                        {
                            place === "sreemangal" &&
                            <div className="same_style">
                            <h1>SREEMANGAL</h1>
                            <p>Set in Sylhet, Sreemangal Resort features a terrace. Each accommodation at the 3-star resort has garden views, and guests can enjoy access to a restaurant and to a garden. The accommodation offers a 24-hour front desk, room service and ticket service for guests.At the resort all rooms come with a balcony, a private bathroom and a TV. Park has waterfalls and many birds. North, sea furties breed on nearby Sonadia islamn.</p>
                           </div>
                        }
                        {
                            place === "sundarbans" &&
                            <div className="same_style">
                            <h1>SUNDARBANS</h1>
                            <p>Despite a total ban on all killing or capture of wildlife other than fish and some invertebrates, it appears that there is a consistent pattern of depleted biodiversity or loss of species in the 20th century, and that the ecological quality of the forest is declining.[7] The Directorate of Forest is responsible for the administration and management of Sundarban National Park in West Bengal. In Bangladesh, a Forest Circle.</p>
                         </div> 
                        }
                    </div>
                    <div className="booking_information">
                        <form onSubmit={()=>handleBooking(place)}>
                             <p>Orgin</p>
                             <input type="text" placeholder="Dhaka"/><br/>
                              <p>Destination</p>
                             <input type="text" placeholder="Cox's Bazar"/><br/>
                              
                                <div style={{float:'left'}}>
                                    <p>Form</p>
                                    <input className="input_box" type="date"/>
                                </div>
                                <div >
                                    <p>To</p>
                                    <input style={{marginLeft:'10px'}}  className="input_box" type="date"/>
                                </div> 
                              <p></p>
                             <input style={{backgroundColor:'#F9A51A'}} type="submit" value="Start Booking"/>
                        </form>
                    </div>
                </div>
        </div>
    );
};

export default Place;