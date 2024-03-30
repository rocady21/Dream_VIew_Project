import { BrowserRouter,Routes,Route } from "react-router-dom";
import { Mainpage } from "../Pages/Mainpage";
import { Navbar } from "../components/Navbar";
import { BuyTicket } from "../Pages/BuyTicket";



export const AppRouter = () => {
    return (
        <>
            <Navbar/>
            <Routes>
                <Route index path="/" element={<Mainpage />}/>
                <Route path="/buy_ticket" element={<BuyTicket />}/>
            </Routes>
        </>
    );
}