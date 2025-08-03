import Header from "./component2/Header/header"
import Footer from "./component2/Footer/footer"
import { Outlet } from "react-router-dom";
function app2(){
    return (
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    );
}
export default app2