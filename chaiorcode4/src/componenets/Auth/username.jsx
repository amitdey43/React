
function Username({khela}) {
    
    return ( 
        <div>
            <h3 id="bhag" >Enter User Name</h3>
            <input required type="text" id="nam" placeholder="Name" value={khela.usernam} onChange={(e)=>khela.setUsernam(e.target.value)} />
        </div>
     );
}

export default Username;