import React from 'react';
import "./style.css"

import Light from '../Light/Light';



const Lights = ({lights}) => {
    return(
        <main className="lights">
            {lights.map(x => 
                <Light name = {x.name}
                state = {x.state}
                key = {x.name} />
            

            )}
        </main>
    )
}

export default Lights  