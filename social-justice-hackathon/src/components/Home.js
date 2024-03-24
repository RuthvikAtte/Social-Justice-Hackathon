import './home.css';
import React from 'react';

// import Map from '../components/Map.js';
export default function Home() {
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
        .then((res) => res.json())
        .then((data) => setData(data.message));
    }, []);
    return (
        <div className="bg">
            <h1>U.S. Heat Map</h1>
            <div className="flex-parent">
                <div className="flex-child filter" id="myBtnContainer">
                    <button class="btn" onclick=""> Show all</button>
                    <button class="btn active" onclick="">Poverty</button>
                    <button class="btn" onclick="">Air Pollution</button>
                    <button class="btn" onclick="">Crime Rate</button>
                </div>
                <div className="flex-child bordering">
                    <p>{!data ? "Loading..." : data}</p>
                </div>
            </div>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                <p>Value: <span id="demo"></span></p>
            </div>
        </div>
    )
}