import React, { useEffect, useState, useContext } from "react";
import Datastore from "./store/Datastore";
import Data from "./Data";
import Context from "./store/Context";
import {
    Button,
    Input,
    Row,
    Col,
  } from "reactstrap";
  import "./gralReactTable.css"

const Botones = () => {

    const context = useContext(Context);
    const handleMenu = (cual) => {
        //console.log(context);
        //context.dispatch({ type: "SET_MENU_OLD", payload: context.state.menuSelected });
		context.dispatch({ type: "SET_MENU", payload: cual });
    }; 

    const handleGrid = (e) => {
        console.log(e.target.checked,e.target.value);
        if (e.target.checked===false) {
            context.dispatch({ type: "SET_MENU_OLD", payload: 41 });
        }
        else
        {
            context.dispatch({ type: "SET_MENU_OLD", payload: 42 });
        }
		//context.dispatch({ type: "SET_MENU", payload: cual });
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
            <Row>
                <Button  onClick={() => handleMenu(1)}>Companies</Button>
                <Button  onClick={() => handleMenu(2)}>Investement</Button>
                <Button  onClick={() => handleMenu(3)}>Teck Stack</Button>
                <Button  onClick={() => handleMenu(4)}>Digital Perfor.</Button>
                <Button  onClick={() => handleMenu(5)}>Talent</Button>
              { /* <CustomInput
                          type="switch"
                          id="switch-3"
                          label="Grid"
                          onChange={handleGrid}
                          value={context.state.menuSelectedOld === 42 ? "on":"off"}
                        />*/}
            </Row>
            <Row>
                <Col md="3">
                    <label className="container">Grid MODE
                    <Input type="checkbox" checked={context.state.menuSelectedOld === 42 ? true:false} onChange={handleGrid} />
                    <span className="checkmark"></span>
                    </label>
                    
                </Col>    
                <Col md="3">
                <select className="react-select" name="empresa" id="empresa" value={empresaSelected} onChange={handleEmpresaChange}>
                  {
                    empresas.map(e => <option key={`emp-${e.COMPANY_ID}`} value={e.COMPANY_ID}>{e.COMPANY_NAME}</option>)
                  }
                </select>                
                </Col>
            </Row>
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