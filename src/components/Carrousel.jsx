import React, { useEffect, useState } from "react"
import "../styles/StylesCarrousel.css"
import Start from "../assets/Star Filled.png"
import Trailer from "../assets/Button.png"
import Next from "../assets/Next.png"
import MoreThan from "../assets/More Than.png"
import LessThan from "../assets/Less Than.png"

import {CarrouselMovies} from "../utils/Movies"


export const Carrousel = ()=> {
    const lenghtMovies = CarrouselMovies.length - 1
    const [currentImg,setCurrentImage] = useState(0)


    const handleCurrentPage = (key)=> {
        if(key === "next") {
            setCurrentImage(currentImg + 1)
        } else if(key === "prev") {
            setCurrentImage(currentImg - 1)  
        }
    }
    const current_movie = CarrouselMovies[currentImg]

    useEffect(()=> {
        const body = document.querySelector("body")
        if(body){
            body.style.height = "100vh"
            body.style.backgroundImage = `url(${current_movie.font_page})`
            body.style.backgroundRepeat = 'no-repeat';
            body.style.backgroundSize = 'cover';
            body.style.backgroundPosition = 'center';
            body.style.backdropFilter = "blur(10px)"
            body.style.transition = "background-image 0.5s ease-in-out"
        }

        return ()=> {
            body.style.background = "none"
        }
    },[currentImg])
    
    return (
        <div className="Slider">
            <div className="slider_p">
                {
                    currentImg !== 0 &&<button onClick={()=> handleCurrentPage("prev") } className="button_prev"><img src={LessThan} alt="" /> </button>
                }
                <div className="image">
                    <div className="score">
                        <img className="star" src= {Start} alt="" />
                        <p> {current_movie.score}/10</p>
                        <p style={{fontWeight:800}}>IMDB</p>
                    </div>
                    <img id="img" className="img" src={CarrouselMovies[currentImg].photo} alt="" />
                </div>
                <div className="info">
                    <div className="info_movie">
                        <h1 className="title"> {current_movie.name} </h1>
                        <hr />
                        <p className="text"> {current_movie.synopsis} </p>
                    </div>
                    <div className="buttons_action">
                        <a target="_blank" href={current_movie.triler} className="view_trailer">
                            <img src={Next} className="button_action" alt="" />
                        </a>
                        <button className="button_buy_t">
                            <img className="button_action" src={Trailer} alt="" />
                        </button>

                    </div>
                </div>
                {
                    currentImg !== lenghtMovies && <button onClick={()=> handleCurrentPage("next") }  className="button_next"><img src={MoreThan} alt="" /></button>

                }
                
            </div>
        </div>
    )
}