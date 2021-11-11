import React, { useState, useEffect } from 'react';

const Info = ({ empresa, criteria, no }) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        console.log(empresa);
        const getData = async () => {
            try {
                //let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies/${empresa}?screen=TALENT`);
                let resp = await fetch(`https://l9a7vcu3re.execute-api.us-east-2.amazonaws.com/prod/companies/${empresa}?screen=${criteria}`);
                resp = await resp.json();
                setData(resp.company);
            } catch(e) {
                console.log(e);
            }
        }
        if(empresa) {
            getData();
        }
    }, [empresa]);

    if(!data) return <div>Loading...</div>

    console.log(data);

    return(
        <div>
            <h4>{data.name} ({data.id})</h4>
            {
                data.attributes.map((a, index) => {
                    return (
                        <div key={`at-${a.type}`} style={{display: "grid", gridTemplateColumns: "1fr 1fr", padding: "1em", border: "1px solid #000"}}>
                            {no ? "" : <div>{a.name}</div>}
                            <div style={{height: index==1 ? "70px" : "35px" }} >{a.value}</div>
                        </div>
                    )
                })
            }
        </div>
    );
};

export default Info;