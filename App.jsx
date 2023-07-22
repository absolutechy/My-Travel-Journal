import React from 'react'
import data from '../data'
import Navbar from './Components/Navbar'
import Section from './Components/Places'

export default function App() {
    
    const visited = data.map(place => {
        return (
            <Section
                 id={place.id}
                 {...place}   
            />
        )
    })
    return (
        <div>
            <Navbar />
            {visited}
        </div>
    )
}
