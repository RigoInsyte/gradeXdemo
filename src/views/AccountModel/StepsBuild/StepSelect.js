import React , { useState } from "react";

import {Row, Button, CardBody, Col, Card, 
    CardHeader,
        } from "reactstrap";    

import { opciones } from "./data";
import Filtrar from "./Filtrar";
import "./stepSelect.css";
import Select from "react-select";

const StepSelect = React.forwardRef((props, ref) => {

	const [selecTimePos, setselecTimePos] = React.useState(null);
	const [selectOpciones, setSelectOpciones] = useState(opciones); //Se supone que estos datos vienen de una API
	const [selectedOpcion, setSelectedOpcion] = useState(opciones[0].id);

	const [seleccionados, setSeleccionados] = useState([]);

	const [jsonFiltros, setJsonFiltros] = useState([]);

	const handleSelectedOpcion = (event) => {
		setSelectedOpcion(parseInt(event.target.value, 10));
	};

	const handleBtnClick = () => {
		let sel = seleccionados;
		sel.push(selectOpciones.filter((op) => op.id === selectedOpcion)[0]);
		setSeleccionados(sel);
		let quedan = selectOpciones.filter((op) => op.id !== selectedOpcion); //Remuevo del combo de opciones el que se agregó a la lista de seleccionados
		setSelectOpciones(quedan);
		if(quedan.length > 0) { //Para que el combo siga mostrando un valor por defecto
			setSelectedOpcion(quedan[0].id);
		}
		let filtros = jsonFiltros;
		let filtro = {
			idopcion: selectedOpcion,
			idfiltro: 0
		};
		filtros.push(filtro);
		setJsonFiltros(filtros);
	};

	const handleRemoveFilter = (idOpcion) => { //Esto hace el proceso inverso a handleBtnClick
		let vuelve = selectOpciones;
		vuelve.push(opciones.filter((op) => op.id === idOpcion)[0]); //Agrego el item a la lista nuevamente, basándome en lo que devuelve la API
		setSelectOpciones(vuelve);
		if(vuelve.length > 0) { //Para que el combo siga mostrando un valor por defecto
			setSelectedOpcion(vuelve[0].id);
		}
		let sel = seleccionados;
		sel = sel.filter((op) => op.id !== idOpcion);
		setSeleccionados(sel);
		let update = jsonFiltros.filter((jsf) => jsf.idopcion !== idOpcion);
		setJsonFiltros(update);
	};

	const handleOptionChange = (idOpcion, idFiltro) => {
		let update = jsonFiltros.map((jsf) => {
			if(jsf.idopcion === idOpcion) return ({ idopcion: idOpcion, idfiltro: idFiltro });
			return jsf;
		});
		setJsonFiltros(update);
    };    
    
    React.useImperativeHandle(ref, () => ({
        isValidated: undefined,
    }));
  
    return (
        <div>
            <Row>
                <Col >    
                <div className="opciones">
                    {
					selectOpciones.length > 0 ?
					<>
                        <Col md= "7">
						<div className="combocriteria">							
							{/*<select name="op" id="op" value={selectedOpcion} onChange={handleSelectedOpcion} size="11">
								{
									selectOpciones.map((opcion) => <option key={`opcion-${opcion.id}`} value={opcion.id}>{opcion.descripcion}</option>)
								}
							</select>*/}
							<ul className="listaul">
								{
									selectOpciones.map((opcion) => <li key={`opcion-${opcion.id}`} className= {opcion.id===selectedOpcion ? "activa" : ""} onClick={() => setSelectedOpcion(parseInt(opcion.id, 10))}>{opcion.descripcion}</li>)
								}
							</ul>
							   
						</div>
                        </Col>
                        <Col md="2">
						<Button color="behance" onClick={handleBtnClick}>
							Agregar
						</Button>						
                        </Col>
					</>
					:
					<h5>No quedan opciones de filtrado</h5>
				    }                     
                    </div>                   
                </Col>
                <Col >
                    <div className="filtros">
                        {
                        seleccionados.length > 0 ?
                        seleccionados.map((sel) => <Filtrar key={`f-${sel.id}`} titulo={sel.descripcion} idOpcion={sel.id} onRemove={handleRemoveFilter} onOptionChange={handleOptionChange} />)
                        :
                        <h5>No se ha seleccionado ningún criterio de filtro aún</h5>
                        }
                    </div>
                </Col>
            </Row>
            {/*<Row>
                <div className="App">			
                    <div className="opciones">
                        
                    </div>
                    <div className="filtros">
                        
                    </div>
                    {
                        jsonFiltros.length > 0 ?
                        <div className="json">
                            <h5>opciones de filtrado necesarias para volcar la consulta</h5>
                            <pre>
                                <code>
                                    { JSON.stringify(jsonFiltros, null, 4) }
                                </code>
                            </pre>
                        </div>
                        :
                        null
                    }
                </div>   
				</Row>  */}       
        </div>
        );
});
    
export default StepSelect;