import React from "react";
import Ellipse from "../../../assets/img/Moreno/Ellipse.png";
import Polygon from "../../../assets/img/Moreno/Polygon.png";
import Rectangle from "../../../assets/img/Moreno/Rectangle.png";
import "../Moreno/FuViews.css";

const FuViews = () => {
    return (
        <div className="FuImg-container">
            <img src={Ellipse} alt="Ellipse" className="Ellipse" />
            <img src={Rectangle} alt="Rectangle" className="Rectangle" />
            <img src={Polygon} alt="Polygon" className="Polygon" />
        </div>
    )
}

export default FuViews;