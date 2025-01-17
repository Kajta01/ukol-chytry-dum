import React from 'react';
import "./style.css"

import Lights from '../Lights/Lights';
import Climate from '../climate/climate';
import Blinds from '../Blinds/Blinds';
import Energy from '../Energy/Energy';

const Dashboard = ({data}) => {
    return(
        <main className="dashboard">
            <Lights lights = {data.lights}/>
            <Climate temperature={data.climate.temperature}
            humidity = {data.climate.humidity}/>
            <Blinds state = {data.blinds}/>
            <Energy electricity={data.energyConsumption.electricity}
             water={data.energyConsumption.water}/>

        </main>
    )
}

export default Dashboard  