import React, { useState } from "react"
import "../styles/BuyTicketPage.css"
import Pop from "../assets/pops.png"
import PopsCorn from "../assets/Pop_corns.png"
import { Step1 } from "../components/Step1"
import { Step2 } from "../components/Step2"
import { Step3 } from "../components/Step3"

export const BuyTicket = ()=> {

    const [stateForm,setStateForm] = useState({
        pelicula:"",
        funcion:"",
        asiento:"",
        nombre_completo:"",
        email:"",
        telefono:""
    })
    const [stateSteps,setstateSteps] = useState(1)


    const onChangeStateForm = (key,value) => {
            console.log("value",value);
            setStateForm({
                ...stateForm,
                [key]:value
            })
        
    }

    const NextSteps = ()=> {
        setstateSteps(stateSteps + 1)
    }
    const PrevStep = ()=> {
        setstateSteps(stateSteps - 1)
    }

    return (
        <div className="buy_ticket_p">
            <img className="img_popCorn" src={PopsCorn} alt="" />
            <img className="img_pop" src={Pop} alt="" />
            {
                stateSteps === 1? 
                <Step1 stateForm={stateForm} onChangeStateForm={(key,value)=> onChangeStateForm(key,value)} NextSteps={NextSteps} /> 
                : 
                stateSteps === 2? 
                <Step2 stateForm={stateForm} onChangeStateForm={(key,value)=> onChangeStateForm(key,value)} PrevStep={PrevStep} NextSteps={NextSteps}/>
                :
                <Step3 stateForm={stateForm} />
            }
        </div>
    )
}