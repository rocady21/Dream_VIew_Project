import React from "react"
import "../styles/NavbarStyles.css"
import VectorImage from "../assets/Vector.png"
export const Navbar = ()=> {
    return (
        <div className="padre">
            <img className="img_icon" src={VectorImage} alt="" />
            <div className="buttons">
                <button className="buttonNavigation">Destacados</button>
                <button className="buttonNavigation">Cartelera</button>
                <button className="buy_ticket">Comprar Ticket</button>
            </div>
        </div>
    )
}