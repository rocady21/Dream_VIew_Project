import { useEffect, useState } from "react"

export const Step2 = ({NextSteps,PrevStep,onChangeStateForm,stateForm})=> {
    
    const [error,setError] = useState("")

    const handleFormDataUser = (e)=> {
        e.preventDefault()
        if(stateForm.nombre_completo === "") {
            return setError("ingrese un nombre valido")
        } else if(stateForm.nombre_completo.length < 4) {
            return setError("ingrese un nombre de minimo 4 caracteres")
        } else if(stateForm.email === "") {
            return setError("ingrese un email valido")
        } else if(stateForm.telefono === null){
            return setError("ingrese un numero de telefono valido")
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

    const onChangeNumberPhone = (e)=> {
        const length = e.target.value.length

        if(length === 3 || length === 7 ) {
            onChangeStateForm("telefono",e.target.value.toString() + "-")
        } else if(length <= 11) {
            onChangeStateForm("telefono",e.target.value.toString())
        }
    }



    return (
        <div className="p_form">
            <form onSubmit={handleFormDataUser} className="form" action="">
                <h1 style={{fontWeight:"200"}}>Comprar Tickets</h1>
                <p style={{color:"#FFFFFF"}}>Seleccione Tu informacion personal</p>
                {
                    error !== "" && <div className="Error"> {error} </div>
                }
                <div className="inputs">
                    <div className="input">
                        <p>Nombre Completo</p>
                        <input value={stateForm.nombre_completo} onChange={(e)=> onChangeStateForm("nombre_completo",e.target.value)} placeholder="ej: Juan" type="text" />
                    </div>
                    <div className="input">
                        <p>Email</p>
                        <input value={stateForm.email} onChange={(e)=> onChangeStateForm("email",e.target.value)} placeholder="ej:example@gmail.com" type="email" />
                    </div>
                    <div className="input">
                        <p>Telefono</p>
                        <input value={stateForm.telefono} onChange={onChangeNumberPhone} placeholder="XXX XXX XXX" type="text" />
                    </div>
                </div>
                <div className="buttons_confirm">
                    <button className="button_Finish">Finalizar</button>
                    <button onClick={()=> PrevStep()} disabled className="button_reset">Volver</button>
                </div>
            </form>
        </div>
    )
}