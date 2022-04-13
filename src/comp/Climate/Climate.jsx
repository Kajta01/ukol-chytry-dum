import React from 'react';
import "./style.css"
import tempImg from '../../../html-vzor/images/temp.svg'




const Climate = ({temperature, humidity }) => {
    return(
        <div className="climate">
        <div className="climate__icon">
            <img src={tempImg}/>
        </div>
        <div className="climate__content">
            <div className="climate__temperature"> {temperature} C</div>
            <div className="climate__humidity">Vlhost vzduchu {temperature}%</div>
        </div>
        <div className="climate__controls">
            <button className="button">+</button>
            <button className="button">-</button>
        </div>
    </div>
    )
}

export default Climate  