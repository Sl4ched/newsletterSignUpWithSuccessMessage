import './styles/App.css'
import SecondPage from "./SecondPage";
import {useEffect, useState} from "react";

const App = () => {

    const [nextPage, setNextPage] = useState(false)
    const [text, setText] = useState("")

    const [borderColor, setBorderColor] = useState("2px solid #c8c8c8")
    const [backgroundColor, setBackgroundColor] = useState("white")
    const [textColor, setTextColor] = useState("black")
    const [isVisible, setIsVisible] = useState("hidden")


    const getCurrentWidth = () => {
        return window.innerWidth
    }

    const [screenSize, setScreenSize] = useState(getCurrentWidth())
    const [image, setImage] = useState("./images/illustration-sign-up-desktop.png")

    useEffect(() => {

        window.addEventListener('resize', () => {
            setScreenSize(window.innerWidth)
        })
        console.log(screenSize)
        if (screenSize < 395) setImage("./images/illustration-sign-up-mobile.png")
        else setImage("./images/illustration-sign-up-desktop.png")

    }, [screenSize])

    const checkValue = (event) => {
        setText(event.target.value)
    }

    const checkMail = () => {

        let count = 0

        for (let i = 0; i < text.length; i++) if (text.charAt(i) === "@" || text.charAt(i) === ".") count++

        if (count === 2 &&
            text.length > 2 &&
            text.indexOf("@") !== -1 &&
            text.indexOf(".") !== -1 &&
            (text.indexOf("@") < text.indexOf(".")))
            setNextPage(true)

        else {
            setBackgroundColor("#fde7e5")
            setTextColor("hsl(4, 100%, 67%)")
            setBorderColor("2px solid #BE7F7A ")
            setIsVisible("visible")
        }

    }

    return <div>

        {nextPage ? <SecondPage mail={text}/> : <div className={"outerContainer"}>

            <div className={"left_side"}>

                <h3 style={{
                    fontSize: "40px",
                    fontWeight: "bold",
                }}>Stay updated!</h3>

                <div style={{
                    margin: "30px 0"
                }}>Join 60.000+ product managers receiving monthly updates on:
                </div>

                <div className={"checkContainer"}>
                    <img className={"checkImg"} alt={"img2"} src={require("./images/icon-list.png")}/>
                    <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>Products discovery and
                        building what matters
                    </div>
                </div>

                <div className={"checkContainer"}>
                    <img className={"checkImg"} alt={"img2"} src={require('./images/icon-list.png')}/>
                    <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>Measuring to ensure
                        updates are a success
                    </div>
                </div>

                <div className={"checkContainer"}>
                    <img className={"checkImg"} alt={"img2"} src={require('./images/icon-list.png')}/>
                    <div style={{display: "flex", alignItems: "center", marginLeft: "10px"}}>And much more!</div>
                </div>

                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <div style={{fontSize: "10px", margin: "20px 0 5px 0", fontWeight: "700"}}>Email address</div>
                    <div style={{
                        fontSize: "10px",
                        margin: "20px 0 5px 0",
                        fontWeight: "700",
                        visibility: isVisible,
                        color: "hsl(4, 100%, 67%)"
                    }}>Valid email required
                    </div>
                </div>

                <input className={"mail"} onChange={checkValue} type={"email"} placeholder={"email@company.com"} style={{
                    border: borderColor,
                    background: backgroundColor,
                    color: textColor
                }}/>

                <button onClick={checkMail} className={"hover"}>Subscribe to monthly newsletter
                </button>

            </div>

            <div className={"rightSide"}>
                <img className={"photoScale"} alt={"img"} src={require(`${image}`)} />
            </div>

        </div>}

    </div>
}


export default App;
