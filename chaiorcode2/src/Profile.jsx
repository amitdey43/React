import { useContext } from "react";
import { Userapi } from "./context/contextapi";

function profile(){
    let {data} = useContext(Userapi);
    return (
        <div>
            <p>Username: {data.user}</p>
            <p>Password: {data.password}</p>
        </div>
    );
}
export default profile