import { useParams } from "react-router-dom";

function user(){
    let {userid}= useParams();
    return (
        <h2>User :{userid}</h2>
    );
}
export default user