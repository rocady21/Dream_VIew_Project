import React from "react"
import "../styles/StylesBillboard.css"
import {Movies} from "../utils/Movies"
import { CardMovie } from "./CardMovie"
import Pop from "../assets/pops.png"
export const BillBoard = ()=> {
    return (
        <div className="padreB">
            <img className="img_pop" src={Pop} alt="" />
            <h1 className="title">En Cartelera</h1>
            <div className="content">
                {
                    Movies.map((movie,index)=> {
                        return <CardMovie movie={movie} key={index} />
                    })
                }
            </div>
        </div>
    )
}