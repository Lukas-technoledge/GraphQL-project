import React, { useEffect } from 'react'
import './AppInfo.css';
import Search from '../components/Search';
import { useData } from '../hooks/useData';
import './AppInfo.css';
import { display } from '@mui/system';

function AppInfo() {
    const { error, loading, data } = useData();
    const [data1, setData1] = React.useState(data?.launches);
    const [input, setInput] = React.useState('');
    const [search, setSearch] = React.useState('');

    React.useEffect(() => {
        setData1(data?.launches);
    }, [data?.launches]);

    if (loading) return <div className="appInfo">Loading...</div>;

    if (error) return <div className="appInfo">Something went wrong. Please check for error input...</div>


    // select unique rocket names
    let copyData = data.launches;
    const rocketNames = copyData?.map(item => item.rocket.rocket_name);
    const uniqueRocketNames = [...new Set(rocketNames)];

    // unique company names
    const companyNames = copyData?.map(item => item.rocket.rocket.company);
    const uniqueCompanyNames = [...new Set(companyNames)];
    console.log(uniqueCompanyNames);

    // uniques site names
    const siteNames = copyData?.map(item => item.launch_site.site_name);
    const uniqueSiteNames = [...new Set(siteNames)];

    // unique year 
    const year = copyData?.map(item => item.launch_date_local.substring(0, 4))
    const uniqueYear = [...new Set(year)]


    // filter by rocket name
    const filterByName = (name) => {
        return data.launches.filter(item => item.rocket.rocket_name === name);
    }
    // console.log('Name', filterByName('Falcon 1'));

    // filter by year
    const filterByYear = (year) => {
        return data.launches.filter(item => item.launch_date_local.substring(0, 4) === year);
    }
    console.log('Year', filterByYear('2020'));

    // filter by company name
    const filterByCompany = (company) => {
        return data.launches.filter(item => item.rocket.rocket.company === company);
    }
    // console.log('Company', filterByCompany('SpaceX'));

    // filter by site name 
    const filterBySite = (site) => {
        return data.launches.filter(item => item.launch_site.site_name === site);
    }
    console.log('Site', filterBySite('CCAFS SLC 40'));

    // search by mission name
    const searchByMission = (search) => {
        return data.launches.filter(item => item.mission_name.toLowerCase().includes(search.toLowerCase()));
    }

    const handleChange = (e) => {
        setSearch(e.target.value);

        let res = filterByName(e.target.value);
        console.log('res', res);

        setData1(res);
    }

    const handleChange1 = (e) => {
        setSearch(e.target.value);
        console.log('search', search);
        let res = searchByMission(e.target.value);
        console.log('res', res);
        setData1(res);
    }

    const handleChange2 = (e) => {
        setSearch(e.target.value);
        console.log('search', search);
        let res = filterByCompany(e.target.value);
        console.log('res', res);
        setData1(res);
    }

    const handleChange3 = (e) => {
        setSearch(e.target.value)
        let res = filterBySite(e.target.value)
        setData1(res)
    } 
    const handleChange4 = (e) => {
        setSearch(e.target.value)
        let res = filterByYear(e.target.value)
        setData1(res)
    } 

    return <div className="appInfo">
        <Search search={search} handleChange1={(e) => handleChange1(e)} />
        {
            // map through unique rocket names
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '20px' }}>
                <select onChange={(e) => handleChange(e)}>
                    <option>Sort by Rocket Name</option>
                    {uniqueRocketNames.map(item => <option value={item}>{item}</option>)}
                </select>

                <select onChange={(e) => handleChange2(e)}>
                    <option>Sort by company Name</option>
                    {uniqueCompanyNames.map(item => <option value={item}>{item}</option>)}
                </select>

                <select onChange={(e)=>handleChange3(e)}>
                <option>Sort by site Name</option>
                {uniqueSiteNames.map(item => <option value={item}>{item}</option> ) }
                </select>

                <select onChange={(e) => handleChange4(e)}>
                    <option>Sort by year</option>
                    {uniqueYear.map(item => <option value={item}>{item}</option>) }
                </select>
            </div>
        }
        {data1?.length > 0 ? data1?.map((launch, index) => {
            return <div className="appInfo__info" key={index}>
                <h3 className="appInfo__date" >Date: {launch.launch_date_local}</h3>
                <div className="appInfo__data">
                    <p> Mission name: {launch.mission_name}</p>
                    <p> Mission id: {launch.mission_id}</p>
                    <p> Rocket name: {launch.rocket.rocket_name}</p>
                    <p>Company name: {launch.rocket.rocket.company}</p>
                    <p>Site name: {launch.launch_site.site_name}</p>
                </div>
            </div>

        }) : "No data found"}

    </div>

}

export default AppInfo

{/*    <div className="appInfo__data">
            <div className="appInfo__data--data">
                <h2>{ launches.mission_name}</h2>
            </div>
        </div> */}