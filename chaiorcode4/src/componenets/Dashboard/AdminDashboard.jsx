import Header from "../../Edashe/Header";
import List from "../../Edashe/List";
import Panel from "../../Edashe/Panel";

function Admin({logouterkhela,adminname}) {
    return ( 
        <div className="abap">
            <Header name={adminname.name} logouterkhela={logouterkhela}/>
            <Panel/>
            <List/>
        </div>
     );
}

export default Admin;