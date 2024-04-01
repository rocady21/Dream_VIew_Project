import React, { useEffect,useState } from "react"
import "../styles/NavbarStyles.css"
import VectorImage from "../assets/Vector.png"
import BuyTicket from "../assets/Button_Vector (2).png"
import { useNavigate } from "react-router-dom"
export const Navbar = ()=> {

    const [stateWidth,setStateWidth] = useState(window.innerWidth)

    const changewidth = () =>{
        setStateWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",changewidth)

        return ()=> {
            window.removeEventListener("resize",changewidth)
        }
    },[])


    const navigate = useNavigate()

    return (
        <div className="padre">
            <img style={{cursor:"pointer"}} onClick={()=>navigate("/")} className="img_icon" src={VectorImage} alt="" />
                {
                    stateWidth > 600? 
                    <div className="buttons">
                        <button onClick={()=> navigate("/")} className="buttonNavigation">Destacados</button>
                        <button onClick={()=> navigate("/")} className="buttonNavigation">Cartelera</button>
                        <button onClick={()=> navigate("/buy_ticket")} className="buy_ticket">Comprar Ticket</button>
                    </div>
                    :
                    <div className="buttons">
                        <button onClick={()=> navigate("/buy_ticket")} style={{border:0,background:"none",cursor:"pointer"}}><img style={{width:50,height:70}} src={BuyTicket} alt="" /></button>
                    </div>
                }

        </div>
    )
}