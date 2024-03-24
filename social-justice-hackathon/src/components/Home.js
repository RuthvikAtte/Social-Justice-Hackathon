import '../components/home.css';
import Map from '../components/Map.js';
export default function Home() {
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
                    <Map />
                </div>
            </div>
            <div className="slidecontainer">
                <input type="range" min="1" max="100" value="50" className="slider" id="myRange" />
                <p>Value: <span id="demo"></span></p>
            </div>
        </div>
    )
}