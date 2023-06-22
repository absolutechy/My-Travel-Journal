import React from 'react'
import data from '../data'
export default function Section(props) {
    return (
        <>
        <section  className="visited--place">
        
            <div className="pic-section" >
                <img src={props.img} className="place--pic"/>
            </div>
            
            <div className="place--info">
            
                <div className="location--info">
                    <img src="./assets/location-icon.png" className="location--icon"/>
                    <p className="country--name">{props.country}</p>
                    <p className="map--link">View on Google Maps</p>
                    
                </div>
                
                <h1 className="place--name">{props.name}</h1>
                <p className="visit--date">{props.dated}</p>
                <p className="place--description">{props.description}</p>
            </div>
            
        </section>
        {props.id < 3 && <div className="divider"></div>}
        </>
    )
}
    
    
    
    
    
    
    
    
    
    
    
    