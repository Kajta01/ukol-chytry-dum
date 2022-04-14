import React, { useState } from 'react';
import "./style.css"


import blindsOpen from '../../../html-vzor/images/blinds-open.svg'
import blindsClose from '../../../html-vzor/images/blinds-closed.svg'


const Blinds = ({state}) => {
    const [blinds, setBlinds ] = useState(state);
    return(
        
        <div className="blinds">
        <div className="blinds__icon">
            <img src={blinds == "open"? blindsOpen : blindsClose}/>
        </div>
        <div className="blinds__name">
            Žaluzie
        </div>
        <div className="blinds__controls">
            <button className={blinds == "open"?"button button--active" : "button"}
            onClick={()=>(setBlinds("open"))}>Otevřeno</button>
            <button className={blinds == "close"?"button button--active" : "button"}
            onClick={()=>(setBlinds("close"))}>Zavřeno</button>
        </div>
    </div>
    )
}

export default Blinds  