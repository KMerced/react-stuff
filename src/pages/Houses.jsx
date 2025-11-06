import "./../css/Houses.css";
import House from "../components/House";
import {useState, useEffect} from "react";
import axios from "axios";

const Houses = (props) => {
    const [houses, setHouses] = useState([]);
    //after the page has loaded, do this
    useEffect(()=>{
        const loadHouses = async() => {
            const response = await axios.get("https://server-stuff-4eh6.onrender.com/api/houses");
            setHouses(response.data.splice(0,props.num));
        };

        loadHouses();
    },[]);

    return (
        <main id="houses" className="main-content">
            <h2>Houses</h2>
            <div className="columns">
                {houses.map((house)=>(
                    <>
                        <House key={house._id} id={house._id} name={house.name} size={house.size} bedrooms={house.bedrooms} bathrooms={house.bathrooms} main_inage={house.main_image}/>
                    </>
                ))}
                {/* <House name="farmhouse" bedrooms="3"/>
                <House name="mansion" bedrooms="7"/>
                <House name="family home" bedrooms="2"/> */}
            </div>
        </main>
    )
}

export default Houses;