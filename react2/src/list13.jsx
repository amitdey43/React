import { useContext } from "react";
import {Apple} from "./list11"
function list3(){
    let apel2= useContext(Apple)
    return (
        <>
        <h1 className="har">Amit Kumar Dey</h1>
        <p>{`list ${apel2}`}</p>
        </>
    );
}
export default list3