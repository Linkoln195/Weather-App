import classes from "./Header.module.css"
import { useState } from "react";
import logo from "../assets/Images/mainIcon.png"

const Header = () => {
    const [firstButton, setFirstButton] = useState("bold");
    const [secondButton, setSecondButton] = useState("200");
    const [thirdButton, setThirdButton] = useState("200");

    const [firstBorder, setFirstBorder] = useState("2px solid #695D5D");
    const [secondBorder, setSecondBorder] = useState("transparent");
    const [thirdBorder, setThirdBorder] = useState("transparent");

    const onButtonClick = (buttonID) => {
        if (buttonID == 1) {
            setFirstButton("bold")
            setSecondButton("200");
            setThirdButton("200");

            setFirstBorder("2px solid #695D5D")
            setSecondBorder("transparent");
            setThirdBorder("transparent");
        } else if (buttonID == 2) {
            setFirstButton("200")
            setSecondButton("bold");
            setThirdButton("200");

            setFirstBorder("transparent")
            setSecondBorder("2px solid #695D5D");
            setThirdBorder("transparent");
        } else {
            setFirstButton("200")
            setSecondButton("200");
            setThirdButton("bold");

            setFirstBorder("transparent")
            setSecondBorder("transparent");
            setThirdBorder("2px solid #695D5D");
        }

    }

    return (
        <div className={classes.mainBox}>
            <div className={classes.titleBox}>
                <img src={logo} className={classes.imageTitle}></img>
                <h1 className={classes.mainTitle}>Weather Me</h1>
            </div>
            <div className={classes.buttonsBox}>
                <button onClick={() => onButtonClick(1)} className={classes.headerButtons}><p className={classes.buttonText} style={{ fontWeight: firstButton, borderBottom: firstBorder }}>Today</p></button>
                <button onClick={() => onButtonClick(2)} className={classes.headerButtons}><p className={classes.buttonText} style={{ fontWeight: secondButton, borderBottom: secondBorder }}>Tommorow</p></button>
                <button onClick={() => onButtonClick(3)} className={classes.headerButtons}><p className={classes.buttonText} style={{ fontWeight: thirdButton, borderBottom: thirdBorder }}>Yesterday</p></button>
            </div>
        </div>
    )
}

export default Header