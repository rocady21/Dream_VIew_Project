import { useEffect, useState } from "react"
import "../styles/BuyTicketPage.css"
import {Movies,CarrouselMovies} from "../utils/Movies"
import { generar_asientos_aleatorios, generar_funciones_aleatorias } from "../utils/generar_funciones_aleatorias"

export const Step1 = ({NextSteps,stateForm,onChangeStateForm}) => {


    const [error,setError] = useState("")
    const [funciones, setfunciones] = useState([]);
    const [asientos, setAsientos] = useState([]);
    const [openModal,setOpenModal] = useState(false)

    const allMovies = [...Movies,...CarrouselMovies]

    const handleForm = (e)=> {
        e.preventDefault()

        if(stateForm.pelicula === "") {
            return setError("Por favor, ingrese una pelicula") 
        } else if(stateForm.funcion === "") {
            return setError("Ingrese la funcion a la cual desea asisti") 
        } else if(stateForm.asiento === "") {
            return setError("Ingrese el asiento") 
        } 
        if(error !== "") {
            setError("")
        }
        NextSteps()

    }

    useEffect(()=> {
        if(error !== "") {
            const timeout = setTimeout(() => {
                return setError("")
            }, 5000);

            return ()=> clearTimeout(timeout)
        }
    },[error])



    // estas funcs generan asientos o funciones aleatorios y los a su respectivo state para que se vean en el select
    const handleLoadAsientos = (e)=> {
        setOpenModal(!openModal)
        if(!openModal === true) {
            const data = generar_asientos_aleatorios()
            setAsientos(data)
        }
    }
    const handleLoadFunciones = ()=> {
        setOpenModal(!openModal)
        if(!openModal === true) {
            const data = generar_funciones_aleatorias()
            setfunciones(data)
        }
    }

    return (
        <div className="p_form">
            <form onSubmit={handleForm} className="form" action="">
                <h1 style={{fontWeight:"200"}}>Comprar Tickets</h1>
                <p style={{color:"#FFFFFF"}}>Seleccione una funcion</p>
                {
                    error !== "" && <div className="Error"> <p> {error} </p></div>
                }
                

                <div className="inputs">
                    <div className="input">
                        <p >Seleccione Pelicula</p>
                        <select name="" id="pelicula" onChange={(e)=> onChangeStateForm("pelicula",e.target.value)}>
                            <option value="">Select Value</option>
                            {
                                allMovies.map((movie,index)=> {
                                    return <option key={index} value={movie.name}> {movie.name} </option>
                                })
                            }
                        </select>
                    </div>
                    <div className="input">
                        <p>Seleccione Funcion</p>
                        <select name="" id="asiento" onClick={(e)=> handleLoadFunciones()} onChange={(e)=> onChangeStateForm("funcion",e.target.value)}>
                            <option value="">Select Value</option>
                            {
                                funciones[0]? funciones.map((func,index)=> {
                                    return <option key={index} value={func}> {func} </option>
                                }) : <option> {"Cargando..."} </option>
                            }
                        </select>
                    </div>
                    <div className="input">
                        <p>Seleccione Asiento</p>
                        <select name="" id="asiento" onClick={(e)=> handleLoadAsientos(e)} onChange={(e)=> onChangeStateForm("asiento",e.target.value)}>
                            <option value="">Select Value</option>
                            {
                                asientos.map((asient,index)=> {
                                    const value = "Asiento" + " " + asient.fila + " - " + "Fila" + " " + asient.asiento
                                    return <option key={index} value={value}> {value} </option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="buttons_confirm">
                    <button className="button_continue">Continuar</button>
                    <button disabled className="button_reset">Reiniciar</button>
                </div>
            </form>
        </div>
    )
}