import React, { useEffect, useState, useContext } from "react";
import Datastore from "./store/Datastore";
import Data from "./Data";
import Context from "./store/Context";
import Select from "react-select";
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Button,
    Input,
    Row,
    Col,
    Label,
    FormGroup,
    Form,
  } from "reactstrap";
  import "./gralReactTable.css"
import { isConstructorDeclaration } from "typescript";

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
    const [selectcomp1Name, setSelectcomp1Name] = useState();

    const handleEmpresaChange = (e) => {
          console.log(e.value);
          context.dispatch({ type: "SET_EMPRESA", payload: e.value });
          setEmpresaSelected(e.value);
          setSelectcomp1Name(e.label);
      };    

    return (
        <div className="content" >
            <Row>
                <Col md="8">
                    <Card>
                      <CardHeader>
                          <img src={require("assets/img/over.jpg").default}>
                          </img>
                      </CardHeader>
                        <CardBody>
                        <Button color="default" onClick={() => handleMenu(1)} >
                            <i className="tim-icons icon-bank"/>  Companies
                        </Button>
                        <Button  onClick={() => handleMenu(2)}>
                            <i className="tim-icons icon-money-coins"/>  Investement
                        </Button>
                        <Button  onClick={() => handleMenu(3)}>
                            <i className="tim-icons icon-settings-gear-63"/>  Teck Stack</Button>
                        <Button  onClick={() => handleMenu(4)}>
                            <i className="tim-icons icon-tap-02"/>  Digital Perfor.</Button>
                        <Button  onClick={() => handleMenu(5)} >
                            <i className="tim-icons icon-badge"/>  Talent</Button>
                        {/*<Button color="facebook">
                                <i className="fab fa-facebook-square" /> Talent
                        </Button>*/}
                             { /* <CustomInput
                                type="switch"
                                id="switch-3"
                                label="Grid"
                                onChange={handleGrid}
                                value={context.state.menuSelectedOld === 42 ? "on":"off"}
                                />*/}
                        </CardBody>
                    </Card>
                </Col>
                <Col md="2">
                    <Card>
                        <CardBody>
                           <Form>
                                <FormGroup check className="mt-4">
                                    <Label check>
                                    <Input type="checkbox" checked={context.state.menuSelectedOld === 42 ? true:false} onChange={handleGrid}/>
                                    <span className="form-check-sign" />
                                    Grid Mode
                                    </Label>
                                </FormGroup>
                            </Form> 
                        </CardBody>
                    </Card>
                </Col>
            </Row>

            <Row>
                
                <Col md="3">
                <Select
                        className="react-select info"
                        classNamePrefix="react-select"
                        name="empresaSelected"
                        value={empresaSelected}
                        onChange={handleEmpresaChange}
                        options= {empresas.map(e=>({label: e.COMPANY_NAME, value: e.COMPANY_ID}))}
                        placeholder = {selectcomp1Name == "" ? "Single Select" : selectcomp1Name}
                    />
           
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