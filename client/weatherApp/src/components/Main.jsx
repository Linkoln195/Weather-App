import classes from "./Main.module.css"

import Loading from "./Loading.jsx"

import temperatureIcon from "../assets/Images/temperatureIcon.png"
import locationIcon from "../assets/Images/locationIcon.png"
import weatherIcon from "https://openweathermap.org/img/wn/10d@2x.png"
import { useState } from "react";

//input import
import { Input, Space } from 'antd';
const { Search } = Input;

const Main = () => {
    const [temperature, setTemperature] = useState("NaN");
    const [city, setCity] = useState("Enter the city")

    const [titleVis, setTitleVis] = useState("hidden")
    const [iconVis, setIconVis] = useState("hidden")

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
        setTitleVis("visible")
        setIconVis("visible")
        setCity(value)
        setTemperature("NaN")
        getGeo(value)
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
                    <img src={temperatureIcon} className={classes.temperatureIcon} style={{ visibility: iconVis }}></img>
                    <h2 className={classes.temperatureTitle} style={{ visibility: titleVis }}>{temperature == "NaN" ? <Loading /> : temperature + "°C"}</h2>
                    <img src={weatherIcon} className={classes.weatherIcon} style={{ visibility: iconVis }}></img>
                </div>
            </div>
        </div>
    )
}

export default Main
