import React, { useState } from 'react';
import "./style.css"


import electricityImg from '../../../html-vzor/images/electricity.svg'
import waterImg from '../../../html-vzor/images/water.svg'


const Energy = ({electricity, water}) => {

    return(
        <div className="energy">
        <div className="energy__source">
            <div className="energy__icon">
                <img src={electricityImg}/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Elektřina</div>
                <div className="energy__value">{electricity} kW</div>
            </div>
        </div>
        <div className="energy__source">
            <div className="energy__icon">
                <img src={waterImg}/>
            </div>
            <div className="energy__consumption">
                <div className="energy__description">Voda</div>
                <div className="energy__value">{water} m<sup>3</sup></div>
            </div>
        </div>
    </div>
    )
}

export default Energy 