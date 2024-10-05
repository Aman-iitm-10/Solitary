import eventImage from "../assets/card-placeholder.png"
import "./FeaturedEvents.css"
import React from "react"


export default function RegConfirmation(){
    return(
        <div className="container" style={{height:"100%"}}>
            <div className="row">
                <div className="row">
                    <img 
                        className="w-[300px] h-[300px] Regimage mt-4 rounded-md shadow-lg" 
                        src={eventImage} 
                        alt="Event"
                    />
                </div>
            </div> 
            <div className="row congrats mt-3" style={{textAlign:"center"}}>
                <p>Congratulations!</p> 
                <p> You are registered for the event. </p>
            </div>
            <div className="row mt-3" style={{textAlign:"center"}}>
                <p className="description"> To stay updated, we will send you timely emails and WhatsApp messages so that you don't miss any opportunities.
                </p>
            </div>
            <div className="row" style={{textAlign:"center"}}> 
                <div>
                    <button className="btn btn-primary mt-5">Join meet</button>
                </div>  
            </div>
        </div>
    )

}