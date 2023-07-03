const SecondPage = (props) => {

    return <div className={"outerContainer2"}>

        <div>
            <img alt={"phtCheck"} src={require('./images/icon-success.png')} style={{
                width: "50px"
            }}/>
            <h3 style={{
                fontSize: "40px",
                fontWeight: "bold",
                margin: "25px 0",
                width: "270px"
            }}>Thanks for subscribing!</h3>

            <div className={"wholeTextContainer"}>

                <div style={{margin: "0 0 6px 0"}}>A confirmation email has been sent to</div>

                <div style={{display: "flex", margin: "0 0 6px 0", width: "350px", flexWrap: "wrap"}}>
                    <div style={{
                        fontWeight: "700",
                    }}>{props.mail + "."}</div>

                    <div style={{margin:"0 0  6px 5px"}}>Please open it</div>

                    <div style={{lineHeight:"26px"}}>
                        and click the button inside to confirm your subscription.
                    </div>
                </div>


            </div>
        </div>

        <button onClick={() => {
            window.location.reload()
        }} className={"hover2"}>Dismiss message
        </button>

    </div>
}

export default SecondPage