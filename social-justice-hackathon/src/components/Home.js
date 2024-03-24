import './home.css';
import React from 'react';
import Map from './Map'
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
            <div className="navbar">
                <h1>U.S. Heat Map</h1>
            </div>
            <div className="flex-parent">
                <div className="flex-child filter" id="myBtnContainer">
                    <button class="btn" onclick="">Show all</button>
                    <button class="btn active" onclick="">Poverty</button>
                    <button class="btn" onclick="">Air Pollution</button>
                    <button class="btn" onclick="">Crime Rate</button>
                </div>
                <div className="flex-child bordering mapHolder">
                    <Map/>
                </div>
            </div>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
            </div>
            
        </div>
    )
}