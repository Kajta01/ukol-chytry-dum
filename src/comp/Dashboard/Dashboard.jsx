import React from 'react';

import Lights from '../Lights/Lights';
import Climate from '../climate/climate';

const Dashboard = ({data}) => {
    return(
        <main className="dashboard">
            <Lights lights = {data.lights}/>
            <Climate temperature={data.temperature}
            humidity = {data.humidity}/>
        </main>
    )
}

export default Dashboard  