import Header from "../components/Header";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


export default function MainRoutes() {
    return (
        <div>
            <NavBar/>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}