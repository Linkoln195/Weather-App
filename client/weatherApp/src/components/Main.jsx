import classes from "./Main.module.css"

import temperatureIcon from "../assets/Images/temperatureIcon.png"


const getData = async () => {
    const url = "https://api.openweathermap.org/data/2.5/weather?lat=51.1854&lon=6.44172&appid=a4674d9ec6f6aa3b00fd1df3067505a0&units=metric";
    const fullResponse = await fetch(url)
    const response = await fullResponse.json();
    return response;
}

const response = await getData();

const Main = () => {

    return (
        <div className={classes.mainBox}>
            <div className={classes.weatherBox}>
                <img src={temperatureIcon} className={classes.temperatureIcon}></img>
                <h2 className={classes.temperatureTitle}>{Math.round(response.main.temp)}</h2>
            </div>
        </div>
    )
}

export default Main
