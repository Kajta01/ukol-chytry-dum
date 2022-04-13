import React, { useState } from 'react';
import "./style.css"
import onLight from '../../../html-vzor/images/light-on.svg'
import offLight from '../../../html-vzor/images/light-off.svg'




const Light = ({name, state}) => {

    const [lighting, setlighting ] = useState(state);
    return(
        <div className="light" onClick={()=>{setlighting(state == "on"?"off":"on")}}>
            				
        <div className="light__icon">
            <img src= {lighting == "on" ? onLight : offLight}/>
        </div>
        <div className="light__name">
            {name}
        </div>
				
        </div>
    )
}

export default Light 