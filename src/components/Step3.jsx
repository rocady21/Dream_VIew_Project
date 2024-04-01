import Ticket from "../assets/Ticket.png"

export const Step3 = ({stateForm})=> {

    const date = stateForm.funcion.split(" ")

    return (
        <div className="message_user">
            <p >Comprar Ticket</p>
            <h3 className="title">Felicitaciones {stateForm.nombre_completo} </h3>

            <img className="ticket" src={Ticket} alt="" />
            <p>Tu entrada para la función {date[0]} a las {date[1]} ha sido canjeado.  </p>
            <p>¡Te esperampos!</p>
        </div>
    )
}