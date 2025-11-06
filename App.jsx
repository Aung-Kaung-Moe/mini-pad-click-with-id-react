import padsData from "./pads"
import React from 'react'
import Pad from './Pad'

export default function App({darkMode}) {
    const [pads, setPads] = React.useState(padsData)
    function toggle(id) {
        setPads(Prev => Prev.map(pad => {
            return pad.id === id ? { ...pad, on: !pad.on} : pad
        }))
    }
    const padsButton = pads.map(pade => (
        <Pad key={pade.id} id={pade.id} color={pade.color} btnToggle={toggle} on={pade.on}/>
    ))
    return (
        <main>
            <div className="pad-container">
                {padsButton}
            </div>
        </main>
    )
}
