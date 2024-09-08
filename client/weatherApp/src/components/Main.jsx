import classes from "./Main.module.css"

import temperatureIcon from "../assets/Images/temperatureIcon.png"
import locationIcon from "../assets/Images/locationIcon.png"
import { useEffect, useState } from "react";

import { Input, Space } from 'antd';
const { Search } = Input;

const Main = () => {
    const [temperature, setTemperature] = useState("Loading...");
    const [city, setCity] = useState("Loading...")

    useEffect(() => {
        const getData = async () => {
            const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.1854&lon=6.44172&appid=a4674d9ec6f6aa3b00fd1df3067505a0&units=metric";
            const fullResponse = await fetch(url)
            await fullResponse.json().then((response) => {
                setTemperature(Math.round(response.main.temp))
                setCity(response.name)
                console.log(response)
            })
        }

        getData();
    }, [])

    const onSearch = (value) => {
        console.log(value);
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
                    <h2 className={classes.temperatureTitle}>{temperature}</h2>
                </div>
            </div>
        </div>
    )
}

export default Main
