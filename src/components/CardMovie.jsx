import React from "react"
import "../styles/StylesCardMovie.css"
import { useNavigate, useNavigation } from "react-router-dom"


export const CardMovie = ({movie})=> {

    const navigation = useNavigate()

    const navigation_buy_ticket = () => {
        navigation("/buy_ticket")
    }
    return (
        <div className="card_movie">
            <p className="title_card"> {movie.name} </p>
            <img className="img_card" src={movie.photo} alt="" />
            <button onClick={navigation_buy_ticket} className="buy_ticket_card">Comprar Ticket</button>
        </div>
    )
}