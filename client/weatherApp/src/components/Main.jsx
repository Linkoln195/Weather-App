import classes from "./Main.module.css"

import temperatureIcon from "../assets/Images/temperatureIcon.png"
import locationIcon from "../assets/Images/locationIcon.png"
import { useState } from "react";

//input import
import { Input, Space } from 'antd';
const { Search } = Input;

//loading import
/*import { Flex, Spin } from 'antd';
const contentStyle = {
    padding: 50,
    borderRadius: 4,
};
const content = <div style={contentStyle} className={classes.loadingTitle} />;*/

const Main = () => {
    const [temperature, setTemperature] = useState("NaN");
    const [city, setCity] = useState("Enter the city")

    const getData = async (lat, lon) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=a4674d9ec6f6aa3b00fd1df3067505a0&units=metric`;
        const fullResponse = await fetch(url)
        await fullResponse.json().then((response) => {
            setTemperature(Math.round(response.main.temp))
            setCity(response.name)
            console.log(response)
        })
    }

    const getGeo = async (cityName) => {
        const url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=1&units=metric&appid=a4674d9ec6f6aa3b00fd1df3067505a0`
        const fullResponse = await fetch(url)
        await fullResponse.json().then((response) => {
            setCity(response[0].name)
            getData(response[0].lat, response[0].lon)
            console.log(response[0])
        })
    }

    const onSearch = (value) => {
        getGeo(value)
        setTemperature("Loading...")
        setCity(value)
    }

    return (
        <div className={classes.mainBox}>
            <div className={classes.searchBox}>
                <Space direction="vertical" className={classes.spaceInput}>
                    <Search
                        placeholder="Enter the city name"
                        onSearch={onSearch}
                        className={classes.searchInput}>
                    </Search>
                </Space>
            </div>

            <div className={classes.weatherBox}>
                <div className={classes.cityBox}>
                    <h2 className={classes.cityTitle}>{city}</h2>
                    <img src={locationIcon} className={classes.locationIcon}></img>
                </div>

                <div className={classes.temperatureBox}>
                    <img src={temperatureIcon} className={classes.temperatureIcon}></img>
                    <h2 className={classes.temperatureTitle}>{temperature}°C</h2>
                </div>
            </div>
        </div>
    )
}

export default Main
