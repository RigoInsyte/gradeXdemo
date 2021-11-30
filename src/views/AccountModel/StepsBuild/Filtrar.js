import { useState, useEffect } from "react";
import { filtros } from "./data";
import {Button,
	Input,
	Label,
  } from "reactstrap";
import Select from "react-select";


/*
	Si las opciones de cada filtro son llamadas individuales a las API aca podrías poner
	la llamada en un useEffect por ej http://mi-api/opciones/del/filtro/{idOpcion}
*/
const Filtrar = ({ titulo, idOpcion, onRemove, onOptionChange }) => {
	const [opsSeleted, setOpsSelected] = useState(filtros.filter((f) => f.idopcion === idOpcion)[0].id);
	console.log (idOpcion);
	useEffect(() => {
		onOptionChange(idOpcion, parseInt(opsSeleted, 10));
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleOpsChange = (event) => {
		setOpsSelected(parseInt(event.target.value, 10));
		onOptionChange(idOpcion, parseInt(event.target.value, 10));
	};
	
	const [selected,setSelected]=useState(null)
    const [selectcomp1, setSelectcomp1]= useState();
    const [selectcomp1Name, setSelectcomp1Name] = useState();
	const [multipleSelect, setmultipleSelect] = useState(null);    
	// para crteireo 1 , compnay size

	// para  5, 6 10, 11 que son  betewwn
	const [selectBetween, setselectBetween]= useState();

	const handleCombo  = (value)=> {
		console.log (value);
		if (value.value==2){
			console.log("entre betew")
		}
	};

/*	const handleCombo  = (e) => {
		console.log (e.target.value)
		if (e.target.value=="between") {
			//console.log("entro al handel")
			<h1> entro a  between </h1>
		}
	};*/

	return(
		<div className="filtro">
			<h5>{titulo}</h5>
			{(() => {
        switch (idOpcion) {
		  case 1: case 2: case 4:
			  return(
				<Select
				className="react-select info"
				classNamePrefix="react-select"
				name="selectcomp1"
				value={selectcomp1}
				onChange={ops => {setSelectcomp1(ops.value);setSelectcomp1Name(ops.label)}}
				
				options= {filtros.filter((f) => f.idopcion === idOpcion).map((ops) => ({  value: ops.id, label: ops.descripcion}))}
				placeholder = {selectcomp1Name == "" ? "Single Select" : selectcomp1Name}
				/>
			  );

          case 3: case 9:
            return <Input
					name="address"
					placeholder="Enter the data"
					type="text"
					/>
          case 5: case 6: case 10: case 11:
            return  <div>
						<Select
							className="react-select info"
							classNamePrefix="react-select"
							name="selectBetween"
							value={selectBetween}
							onChange={(value) => {setselectBetween(value); {handleCombo(value)} }}
							options={[                                            
								{ value: "1", label: "Greater than or equal to" },
								{ value: "2", label: "Between" },
								{ value: "3", label: "Does not equal" },
								{ value: "4", label: "Equals" },
								{ value: "5", label: "Less than or equal to" },
							]}
							placeholder="Single Select"                            
						/>          
				{/*	<select name="select" onChange={handleCombo} >            
							<option value="greaterequal">Greater than or equal to</option>
							<option value="between">Between</option>
							<option value="notequal">Does not equal</option>
							<option value="equals">Equals</option>
							<option value="lessthan">Less than or equal to</option>
						</select>*/}
					<Input
					name="address"
					placeholder="Enter data"
					type="text"
					/>
					</div>
		  case 7: 
		  return(
			<>
			<Label >Betwwen</Label>
			<Input type="text" />
			<Label >and</Label>
			<Input type="text" />
			</>
		  );
		  case 8: 
			return(
				<Select
					className="react-select info"
					classNamePrefix="react-select"
					placeholder="Choose Social Media"
					name="multipleSelect"
					closeMenuOnSelect={false}
					isMulti
					value={multipleSelect}
					onChange={(value) => setmultipleSelect(value)}
					options={[
					{
						value: "",
						label: " Multiple Options",
						isDisabled: true,
					},
					{ value: "2", label: "Instagram" },
					{ value: "3", label: "Twitter" },
					{ value: "4", label: "Linkedin" },
					{ value: "5", label: "Facebook" },
					{ value: "6", label: "Pinterest" },
					{ value: "7", label: "Otros" },

					]}
				/>
			);
          default:
            return <select name="ops" id="ops" value={opsSeleted} onChange={handleOpsChange}>
						{
							filtros.filter((f) => f.idopcion === idOpcion).map((ops) => <option key={`ops-${ops.id}`} value={ops.id}>{ops.descripcion}</option>)
						}
					</select>
				
       	 }
      	})()}
		

			<div className="btnoptions">
				
				<Button className="btn-icon" color="behance" onClick={() => onRemove(idOpcion)}>
                      X
                </Button>
			</div>
		</div>
	);
};

export default Filtrar;