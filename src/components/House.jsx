import "./../css/House.css";
import {useState} from "react";

const House = (props) => {
//     const closeHouseDetails = () => {
//     setShowDialog(false);
// }

    return (
        <>
            {/* {showDialog?(
                
            ):("")} */}

            <section className="house">
                <h1>{props.name}</h1>
                <img id="housePic" src={"https://server-stuff-4eh6.onrender.com/images"+props.main_image}/>           
                <p>Bedrooms: {props.bedrooms}</p>
            </section>
        </>
    )
}

export default House;