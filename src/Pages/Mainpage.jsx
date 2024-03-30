import React from "react"
import "../styles/MainPageStyle.css"
import { Carrousel } from "../components/Carrousel"
import { BillBoard } from "../components/Billboard"

export const Mainpage = ()=> {
    return (
        <div className="padreA">
            <Carrousel/>
            <BillBoard/>
        </div>
    )
}