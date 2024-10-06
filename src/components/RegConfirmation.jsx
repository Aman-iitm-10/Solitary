import eventImage from "../assets/card-placeholder.png"
import "./FeaturedEvents.css"
import React from "react"


export default function RegConfirmation(props){
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
                <pre className="text-wrap regConfMessage"> Stay updated via emails and WhatsApp messages. Make use of the opportunities. </pre>
            </div>
            <div className="mt-3">
                <pre className="regConfMessage text-[18px]" style={{textAlign:"center"}}>For futher details: {props.contact}</pre>
            </div>
            <div className="row" style={{textAlign:"center"}}> 
                <div>
                    <button className="btn btn-primary mt-4">Join meet</button>
                </div>  
            </div>
            
        </div>
    )

}