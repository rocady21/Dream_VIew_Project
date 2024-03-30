const number_aleatory_between_numbers = (min, max) => {
    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    return randomNum;
}

export const generar_funciones_aleatorias = () => {
    const now = new Date();
    const number_func = Math.floor(Math.random() * 10) + 1;
    let arr_days = [];

    for (let index = 1; index <= number_func; index++) {
        let fecha_generada = new Date(now);
        const days_aleatory = number_aleatory_between_numbers(1, 365);
        const sum_date = new Date(fecha_generada.setDate(fecha_generada.getDate() + days_aleatory));
        const boolean_number = number_aleatory_between_numbers(1, 2);

        const hours_aleatory = Math.floor(Math.random() * 24);
        const minutes_aleatory = boolean_number === 1 ? "30" : "00";

        // Ajustar el formato de la fecha y hora
        const new_hour = `${sum_date.getDate()}/${sum_date.getMonth() + 1}/${sum_date.getFullYear()} ${hours_aleatory}:${minutes_aleatory}`;

        arr_days.push(new_hour);
    }
    return arr_days;

}

export const generar_asientos_aleatorios = () => {
    const numeroFilas = number_aleatory_between_numbers(1, 10); 
    const asientosPorFila = number_aleatory_between_numbers(1, 10); 

    const asientos = [];

    for (let fila = 1; fila <= numeroFilas; fila++) {
        for (let asiento = 1; asiento <= asientosPorFila; asiento++) {
            asientos.push({ fila: fila, asiento: asiento });
        }
    }

    console.log("aaaaaaa",asientos);
    return asientos;
}