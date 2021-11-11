import React from 'react';
import Info from "./Info";

const Compar2 = ({ empresa1, empresa2 , criteria}) => {
    return(
        <div style={{display: "grid", gridTemplateColumns: "1fr 1fr"}}>
            <Info empresa={empresa1} criteria={criteria}/>
            <Info empresa={empresa2} criteria={criteria} no={true} />
        </div>
    )
};

export default Compar2;