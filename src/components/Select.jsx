import React, { useState } from "react";
import "../style/CSS.css";
import laugh from "../assets/laugh.png"
import axios from "axios";
import Content from "./Content";
function Select() {
    const [data, setdata] = useState();
    const [category, setcategory] = useState('Any');
    const selection = async () => {
        try {
            const result = await axios.get(`https://v2.jokeapi.dev/joke/${category}?safe-mode`)
            setdata(prev => result.data);
        } catch (err) {
            console.log(err)
        };
    }
    function getcategory(event) {
        setcategory(prev => event.target.value);
    }

    return (
        <div id="container">
            <h1>The Joke Finder</h1>
            <div className="main">

                <div className="sub">
                    <p>Select the type of joke</p>
                </div>

                <div className="sub-and-button">
                    <div className="sub">
                        <select name="type" onChange={getcategory}>
                            <option value="Any">Random</option>
                            {/* <option value="Dark">Dark</option> */}
                            <option value="Spooky">Spooky</option>
                            <option value="Christmas">Christmas</option>
                            <option value="Programming">Programming</option>
                            <option value="Misc">Miscellaneous</option>
                        </select>
                    </div>
                    <button onClick={selection}><img src={laugh} alt="search" draggable="false" /></button>
                </div>
            </div>
            <Content data={data} />
        </div>
    )
}
export default Select;