import React, { useEffect } from 'react'
import './AppInfo.css';
import { useData } from '../hooks/useData';
import img from '../kindpng_490827.png'
import Search from '../components/Search';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';

function AppInfo() {
    const { error, loading, data } = useData();

    const [input, setInput] = React.useState('');

    const [info, setInfo] = React.useState(data)
    console.log('crazy', info)
    useEffect(() => {
    }, [])

    if (loading) return <div>Loading...</div>;

    if (error) return <div>Something went wrong. Please check for error input...</div>

    const numbers = data.launches
    console.log(numbers)

    const handleChange = (e) => {
        setInput(e.target.value);
        if (input != '') {
            let result = filterByName(input);

            setInfo(result);
            setInput('')
        }
        console.log('fiiiiiiisssh', input);
    }

    const filterByName = (name) => {
        return data.launches.filter(item => item.rocket.rocket_name == name)
    }
    console.log('control', info)
    console.log(data.launches)


    return <div className="appInfo">

        <div className='home'>
            {/* search div */}
            <Search />

            {/* buttons */}
            <div className="select">
                <h2>{input}</h2>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Select</InputLabel>
                    <Select onChange={(e) => handleChange(e) } value={input}>
                        {numbers.map(launch => {
                            return <MenuItem value={launch.rocket.rocket_name}>{launch.rocket.rocket_name}</MenuItem>
                        })}
                    </Select>
                </FormControl>
            </div>

        </div>

        {info?.map(launch => {
            return <div className="appInfo__info">
                <h3 className="appInfo__date" >Date: {launch.launch_date_local}</h3>
                <div className="appInfo__data">
                    <img className='image' src={img} alt="image" />
                    <div className="appInfo__details"> <p> Mission name: {launch.mission_name}</p>
                        <p> Mission id: {launch.mission_id}</p>
                        <p> Rocket name: {launch.rocket.rocket_name}</p>
                        <p>Company name: {launch.rocket.rocket.company}</p>
                        <p>Site name: {launch.launch_site.site_name}</p>
                    </div>
                </div>
            </div>

        })}


    </div>
}

export default AppInfo