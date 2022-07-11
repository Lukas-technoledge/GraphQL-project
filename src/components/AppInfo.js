import React from 'react'
import './AppInfo.css';
import {useData} from '../hooks/useData';

function AppInfo() {
    const {error, loading, data } = useData();

    if(loading) return <div>Loading...</div>;

    if(error) return <div>Something went wrong. Please check for error input...</div>

  return <div className="appInfo">

    {data.launches.map(launch => {
       return <div className="appInfo__info">
        <h3 className="appInfo__date" >Date: { launch.launch_date_local }</h3>
        <div className="appInfo__data">
            <p> Mission name: { launch.mission_name}</p>
            <p> Mission id: { launch.mission_id}</p>
            <p> Rocket name: { launch.rocket.rocket_name}</p>
            <p>Company name: { launch.rocket.rocket.company}</p>
            <p>Site name: { launch.launch_site.site_name}</p>

        </div>
       </div>
       
    })}

    </div>
}

export default AppInfo

{/*    <div className="appInfo__data">
            <div className="appInfo__data--data">
                <h2>{ launches.mission_name}</h2>
            </div>
        </div> */}