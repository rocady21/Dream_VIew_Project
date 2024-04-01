import React, { useEffect,useState } from "react"
import "../styles/NavbarStyles.css"
import VectorImage from "../assets/Vector.png"
import BuyTicket from "../assets/Button_Vector (2).png"
import { useLocation, useNavigate } from "react-router-dom"
export const Navbar = ()=> {
    
    const [stateWidth,setStateWidth] = useState(window.innerWidth)
    const location = useLocation()

    const changewidth = () =>{
        setStateWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener("resize",changewidth)

        return ()=> {
            window.removeEventListener("resize",changewidth)
        }
    },[])


    const navigate_func = (route, key) => {
        const location_pathname = location.pathname
    
        if (route === location_pathname) {
          if (key === "cartelera") {
            window.scrollTo(0, document.body.scrollHeight)
          } else {
            window.scrollTo(0, 0)
          }
        } else {
          if (key === "cartelera") {
            navigate(route)
            setTimeout(() => {
              window.scrollTo(0, document.body.scrollHeight)
            }, 100)
          } else {
            navigate(route)
            window.scrollTo(0, 0) 
          }
        }
      };

    const navigate = useNavigate()

    return (
        <div className="padre">
            <img style={{cursor:"pointer"}} onClick={()=>navigate("/")} className="img_icon" src={VectorImage} alt="" />
                {
                    stateWidth > 600? 
                    <div className="buttons">
                        <button onClick={()=> navigate_func("/","destacado")} className="buttonNavigation">Destacados</button>
                        <button onClick={()=> navigate_func("/","cartelera")} className="buttonNavigation">Cartelera</button>
                        <button onClick={()=> navigate_func("/buy_ticket")} className="buy_ticket">Comprar Ticket</button>
                    </div>
                    :
                    <div className="buttons">
                        <button onClick={()=> navigate("/buy_ticket")} style={{border:0,background:"none",cursor:"pointer"}}><img style={{width:50,height:70}} src={BuyTicket} alt="" /></button>
                    </div>
                }

        </div>
    )
}