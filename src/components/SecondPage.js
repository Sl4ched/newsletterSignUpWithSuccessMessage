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

                <div style={{margin: "0 0 6px 0",marginLeft: "5px"}}>A confirmation email has been sent to</div>

                <div style={{
                    display: "flex",
                    width: "350px",
                    flexWrap: "wrap",
                    lineHeight: "26px",
                }}>
                    <div style={{
                        fontWeight: "700",
                        marginRight: "5px",
                        marginLeft: "5px"
                    }}>{props.mail + "."}</div>

                    <div>Please</div>
                    <div style={{marginLeft: "5px"}}>open</div>
                    <div style={{marginLeft: "5px"}}>it</div>
                    <div style={{marginLeft: "5px"}}>and</div>
                    <div style={{marginLeft: "5px"}}>click</div>
                    <div style={{marginLeft: "5px"}}>button</div>
                    <div style={{marginLeft: "5px"}}>inside</div>
                    <div style={{marginLeft: "5px"}}>to</div>
                    <div style={{marginLeft: "5px"}}>confirm</div>
                    <div style={{marginLeft: "5px"}}>your</div>
                    <div style={{marginLeft: "5px"}}>subscription</div>

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