import React, { useEffect, useState, useContext } from "react";
import ReactTables from "./ReactTables"
import Datastore from "./store/Datastore";
import Data from "./Data";
import Context from "./store/Context";
import {
    Card,
    CardBody,
    CardHeader,
    CardTitle,
    Row,
    Col,
    Button,
  } from "reactstrap";
import { isConstructorDeclaration } from 'typescript';
const Botones = () => {
    const context = useContext(Context);
    const handleMenu = (cual) => {
        console.log(context);
        context.dispatch({ type: "SET_MENU_OLD", payload: context.state.menuSelected });
		context.dispatch({ type: "SET_MENU", payload: cual });
    }; 
    const [loading, setLoading] = useState(true);
    const [empresas, setEmpresas] = useState([]);

	useEffect(() => {
		const getData = async () => {
			try {
        let resp = await fetch(`http://168.181.186.118:9093/democompany/allcomp`);
            //let resp = await fetch(`http://localhost:8080/democompany/searchcompany`);
			resp = await resp.json();
            setEmpresas(resp.return);
            //console.error(resp.return);
			setEmpresaSelected(resp.return[0].COMPANY_ID);
			} catch(error) {
				console.error(error);
			}
		};
		getData().then(() => setLoading(false));
	}, []);


    const [empresaSelected, setEmpresaSelected] = useState("");

    const handleEmpresaChange = (e) => {
          context.dispatch({ type: "SET_EMPRESA", payload: e.target.value });
          setEmpresaSelected(e.target.value);
      };    
    return (
        <div className="content">
                <Button  onClick={() => handleMenu(1)}>Companies</Button>
                <Button  onClick={() => handleMenu(2)}>Investement</Button>
                <Button  onClick={() => handleMenu(3)}>Teck Stack</Button>
                <Button  onClick={() => handleMenu(4)}>Digital Perfor.</Button>
                <Button  onClick={() => handleMenu(5)}>Talent</Button>
                <Button  onClick={() => handleMenu(6)}>G</Button>
                <select className="react-select" name="empresa" id="empresa" value={empresaSelected} onChange={handleEmpresaChange}>
                  {
                    empresas.map(e => <option key={`emp-${e.COMPANY_ID}`} value={e.COMPANY_ID}>{e.COMPANY_NAME}</option>)
                  }
                </select>                
        </div>
    )
}

const GralReactTable = () => {


  

    return (
        <Datastore>
            <div className="content">
                <Botones />
                <Data />
            </div>
        </Datastore>
    )
};
export default GralReactTable;