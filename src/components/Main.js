import Button from 'react-bootstrap/Button'
import './css/Main.css';
import {Link} from "react-router-dom";

export default function Main() {
    const block = {
        height: "45vh",
    }
    const font = {
        color: "snow",
        marginLeft: "50px",
        marginBottom: "1vh",
        fontWeight: "bold"

    }




    return (
        <div>
            <div style={block}></div>
            <h1 style={font}>Join Popcorn Overflow</h1>
            <h1 style={font}>developer community</h1>
            <h3 style={font}>learn faster, develop together.</h3>
            <Link className={"mybutton btn"} to={"/Post"}>See posts</Link>
            <div style={{height: "250px"}}></div>
            <h1 style={{marginLeft: "50px", fontSize: "30px"}}>PopcornOverflow</h1>
        </div>

    )
}