import React, { useState, useEffect } from 'react';
import Select from "react-select";
// reactstrap components
import {Row, CardBody, Col, Card, 
    CardHeader,
    Label,
    FormGroup,
    Input,
    Progress,
    CardTitle,
    Table,
        } from "reactstrap";    

import {countries} from "../AccountModel/StepsBuild/data"
import {idioms} from "../AccountModel/StepsBuild/data"

const StepSelected = React.forwardRef((props, ref) => {



    // paises
    const [selectCountry, setselectCountry] = useState();
    const [listCountry, setListCountry] = useState(countries);


    // idiomas
    const [selectIdioma, setselectIdioma] = useState();
    const [listIdiomas, setlistIdiomas] = useState(idioms);



    const [selectcomp1, setSelectcomp1]= useState();
    // prar 1 COMPANY SIZE
    const [singleComSize, setsingleComSize] = React.useState(null);

    // prar 2 inductry
    const [singleIndustry, setsingleIndustry] = React.useState(null);

    
    // prar 5 hierachical level
    const [singleSelect, setsingleSelect] = React.useState(null);
    // para Time in the company
    const [selecTimeCom, setselecTimeCom] = React.useState(null);
    // prara  8 yeasr experiencia
    const [selecYears, setselecYears] = React.useState(null);
    // prara  9 title
    const [selecTitle, setselecTitle] = React.useState(null);
    // param 10 fucniont
    const [selecFunction, setselecFunction] = React.useState(null);
    // prara  11 type of company
    const [selecTypeComp, setselecTypeComp] = React.useState(null);
    // prara  6 time curre position
    const [selecTimePos, setselecTimePos] = React.useState(null);


    const ejCriterias = 
    [
        {
            "id" : 1,
            "name" : "Company size",
            "parameters": [
                {
                    "idparam" :1001,
                    "nameparam" : "1-10",                     
                },
                {
                    "idparam" :1002,
                    "nameparam" : "11-50",                     
                },
                {
                    "idparam" :1003,
                    "nameparam" : "51-200",                     
                },
            ]
        },
        {
            "id" : 2,
            "name" : "Industries",
            "parameters": [
                {
                    "idparam" :2001,
                    "nameparam" : "Administrative services",                     
                },
                {
                    "idparam" :2002,
                    "nameparam" : "Advertising",                     
                },
                {
                    "idparam" :2003,
                    "nameparam" : "Agriculture and Farming",                     
                },
            ]
        },
        {
            "id" : 3,
            "name" : "Location",
            "parameters": [
                {
                    "idparam" :3001,
                    "nameparam" : "Demo",                     
                },
            ]
        },
        {
            "id" : 4,
            "name" : "Language",
            "parameters": [
                {
                    "idparam" :4001,
                    "nameparam" : "Demo",                     
                },
            ]
        },
        {
            "id" : 5,
            "name" : "Hierarchical level",
            "parameters": [
                {
                    "idparam" :5001,
                    "nameparam" : "Demo",                     
                },
            ]
        },
        {
            "id" : 6,
            "name" : "Time in the current position",
            "parameters": [
                {
                    "idparam" :6001,
                    "nameparam" : "Less than 1 year",                     
                },
                {
                    "idparam" :6002,
                    "nameparam" : "Between 1 and 2 year",                     
                },
                {
                    "idparam" :6003,
                    "nameparam" : "Between 3 and 5 years",                     
                },
                {
                    "idparam" :6004,
                    "nameparam" : "Between 6 and 10 years",                     
                },
                {
                    "idparam" :6005,
                    "nameparam" : "More than 10 years", 
                },
            ]
        },
        {
            "id" : 7,
            "name" : "Time in the company",
            "parameters": [
                {
                    "idparam" :7001,
                    "nameparam" : "Demo",                     
                },
            ]
        },
        {
            "id" : 8,
            "name" : "Years of experience",
            "parameters": [
                {
                    "idparam" :8001,
                    "nameparam" : "Demo",                     
                },
            ]
        },        
        {
            "id" : 9,
            "name" : "Title",
            "parameters": [
                {
                    "idparam" :9001,
                    "nameparam" : "Demo",                     
                },
            ]
        },
        {
            "id" : 10,
            "name" : "Function",
            "parameters": [
                {
                    "idparam" :10001,
                    "nameparam" : "Research",                     
                },
                {
                    "idparam" :10002,
                    "nameparam" : "Human Resources",                     
                },
                {
                    "idparam" :10003,
                    "nameparam" : "Legal Services",                     
                },
                {
                    "idparam" :10004,
                    "nameparam" : "Health Services",                     
                },
                {
                    "idparam" :10005,
                    "nameparam" : "Community Services",                     
                },
                {
                    "idparam" :10006,
                    "nameparam" : "Information Technologies",                     
                },


            ]
        },
        {
            "id" : 11,
            "name" : "Type of company",
            "parameters": [
                {
                    "idparam" :11001,
                    "nameparam" : "Demo",                     
                },
            ]
        },

    ];

    const [datacriteria, dataCriteria] = useState([]);
    const [dataparame, dataParame] = useState([]);
    useEffect(() => {
        const getData = async () => {
        try {
            //let resp = await fetch(ejJason);
            //let resp = await fetch(`http://168.181.186.118:9093/democompany/talentover?idcom=${empresaSelected}`);
            //resp = await resp.json();
            console.log(ejCriterias);
            dataCriteria(ejCriterias)
            console.log(ejCriterias);
            dataParame(ejCriterias.parameters);
            
            console.log(ejCriterias.parameters)
            //var datosper=ejJason[0].grid100;
            //var auxpie=[];
            //datosper.map(elemento => {
            //    auxpie.push(elemento.rowPercent)                
            //});
            //setDatapie(auxpie);
            //console.log(datapie)
        } catch(error) {
            console.error(error);
        }
        };
        getData();
    }, []);



    React.useImperativeHandle(ref, () => ({
        isValidated: undefined,
    }));
      return (    
          
          <Row>
            <Col md="12">
                <Card>
                <CardHeader>
                    <CardTitle tag="h4">Select criteria for yout model</CardTitle>
                </CardHeader>
                <CardBody>
                    <Table responsive striped>
                    <thead className="text-primary">
                        <tr>
                        <th className="text-center">ID</th>
                        <th>Criteria</th>                        
                        <th>Parameters</th>
                        </tr>
                    </thead>
                    <tbody>
                        {datacriteria.map((d,i) =>{
                            return (
                            <tr>
                           {/* <td className="text-center">
                                <FormGroup check>
                                <Label check>
                                    <Input defaultChecked type="checkbox" />
                                    <span className="form-check-sign" />
                                </Label>
                                </FormGroup>
                            </td>*/}
                            <td>{d.id}</td>  
                            <td>{d.name}</td>
                            
                            <td>
                            {(() => {
                            switch (d.id) {
                            case 1:
                                return (   
                                    <>
                                    <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleComSize"
                                    value={singleComSize}
                                    onChange={(value) => setsingleComSize(value)}
                                    options={[                                            
                                        { value: "1", label: "1-10" },
                                        { value: "2", label: "11-50" },
                                        { value: "3", label: "51-200" },
                                        { value: "4", label: "201-500" },
                                        { value: "5", label: "501-1000" },
                                        { value: "6", label: "1001-5000" },
                                        { value: "7", label: "5001-10000" },
                                        { value: "8", label: "+ 10000" },                                        
                                    ]}
                                    placeholder="Single Select"                            
                                    />          
                                </>                                
                                    );
                            case 2:
                                return (   
                                    <>
                                    <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="singleIndustry"
                                    value={singleIndustry}
                                    onChange={(value) => setsingleIndustry(value)}
                                    options={[                                            
                                        { value: "1", label: "Administrative services" },
                                        { value: "2", label: "Advertising" },
                                        { value: "3", label: "Agriculture and Farming" },
                                        { value: "4", label: "Apps" },
                                        { value: "5", label: "Artificial Intelligence" },
                                        { value: "6", label: "Biotechnology" },
                                        { value: "7", label: "Clothing and Apparel" },
                                        { value: "8", label: "Commerce and shopping" },                                        
                                    ]}
                                    placeholder="Single Select"                            
                                    />          
                                    </>                                
                                );                                    
                            case 3:
                            return (   
                                <>
                                    <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="selectCountry"
                                    value={selectCountry}
                                    onChange={ops => setselectCountry(ops.name)}                                    
                                    options= {listCountry.map((ops) => ({  value: ops.code, label: ops.name}))}
                                    
                                    />
{/*
                                    <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="selectcomp1"
                                    value={selectcomp1}
                                    onChange={ops => {setSelectcomp1(ops.value);setSelectcomp1Name(ops.label)}}                                    
                                    options= {filtros.filter((f) => f.idopcion === idOpcion).map((ops) => ({  value: ops.id, label: ops.descripcion}))}
                                    placeholder = {selectcomp1Name == "" ? "Single Select" : selectcomp1Name}
                                    />
*/}
                                </>
                                );
                                case 4:
                            return (   
                                <>
                                    <Select
                                    className="react-select info"
                                    classNamePrefix="react-select"
                                    name="selectIdioma"
                                    value={selectIdioma}
                                    onChange={ops => setselectIdioma(ops.descripcion)}                                    
                                    options= {listIdiomas.map((ops) => ({  value: ops.id, label: ops.descripcion}))}
                                    
                                    />
                                </>
                            );    
                            case 5:
                                return(
                                    <>
                                        <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        name="singleSelect"
                                        value={singleSelect}
                                        onChange={(value) => setsingleSelect(value)}
                                        options={[                                            
                                            { value: "1", label: "Owner" },
                                            { value: "2", label: "CEO" },
                                            { value: "3", label: "Director" },
                                            { value: "4", label: "Manager" },
                                            { value: "5", label: "VP" },
                                            { value: "6", label: "Formation" },
                                            { value: "7", label: "Voluntary" },
                                            { value: "8", label: "VP" },
                                            { value: "9", label: "Young professional" },
                                        ]}
                                        placeholder="Single Select"                            
                                        />          
                                    </>
                                );
                                case 6:
                                    return(
                                        <>
                                            <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            name="selecTimePos"
                                            value={selecTimePos}
                                            onChange={(value) => setselecTimePos(value)}
                                            options={[                                            
                                                { value: "1", label: "Less than 1 year" },
                                                { value: "2", label: "Between 1 and 2 years" },
                                                { value: "3", label: "Between 3 and 5 years" },
                                                { value: "4", label: "Between 6 and 10 years" },
                                                { value: "5", label: "More than 10 years" },
                                            ]}
                                            placeholder="Single Select"                            
                                            />          
                                        </>
                                    );

                                case 7:
                                    return(
                                        <>
                                            <Select
                                            className="react-select info"
                                            classNamePrefix="react-select"
                                            name="selecTimeCom"
                                            value={selecTimeCom}
                                            onChange={(value) => setselecTimeCom(value)}
                                            options={[                                            
                                                { value: "1", label: "Less than 1 year" },
                                                { value: "2", label: "Between 1 and 2 years" },
                                                { value: "3", label: "Between 3 and 5 years" },
                                                { value: "4", label: "Between 6 and 10 years" },
                                                { value: "5", label: "More than 10 years" },
                                            ]}
                                            placeholder="Single Select"                            
                                            />          
                                        </>
                                    );
                                case 8:
                                return(
                                    <>
                                        <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        name="selecYears"
                                        value={selecYears}
                                        onChange={(value) => setselecYears(value)}
                                        options={[                                            
                                            { value: "1", label: "Less than 1 year" },
                                            { value: "2", label: "Between 1 and 2 years" },
                                            { value: "3", label: "Between 3 and 5 years" },
                                            { value: "4", label: "Between 6 and 10 years" },
                                            { value: "5", label: "More than 10 years" },
                                        ]}
                                        placeholder="Single Select"                            
                                        />          
                                    </>
                                );
                                case 9:
                                return(
                                    <>
                                        <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        name="selecTitle"
                                        value={selecTitle}
                                        onChange={(value) => setselecTitle(value)}
                                        options={[                                            
                                            { value: "1", label: "Administration" },
                                            { value: "2", label: "Navy and security" },
                                        ]}
                                        placeholder="Single Select"                            
                                        />          
                                    </>
                                );
                                case 10:
                                return(
                                    <>
                                        <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        name="selecFunction"
                                        value={selecFunction}
                                        onChange={(value) => setselecFunction(value)}
                                        options={[                                            
                                            { value: "1", label: "Research" },
                                            { value: "2", label: "Human Resources" },
                                            { value: "3", label: "Legal Services" },
                                            { value: "4", label: "Health Services" },
                                            { value: "5", label: "Community Services" },
                                            { value: "6", label: "Information Technologies" },                                        
                                            { value: "7", label: "Sales" },
                                            { value: "8", label: "Purchasing" },                                            
                                            { value: "9", label: "Sales" },
                                            { value: "10", label: "Administration" },                                            
                                            { value: "11", label: "Navy and Protection Services" },
                                            { value: "12", label: "Art and Design" },                                            
                                        ]}
                                        placeholder="Single Select"                            
                                        />          
                                    </>
                                );
                                case 11:
                                return(
                                    <>
                                        <Select
                                        className="react-select info"
                                        classNamePrefix="react-select"
                                        name="selecTypeComp"
                                        value={selecTypeComp}
                                        onChange={(value) => setselecTypeComp(value)}
                                        options={[                                            
                                            { value: "1", label: "Public admnistration" },
                                            { value: "2", label: "Stock company" },
                                            { value: "3", label: "Civil society, commercial society and other types" },
                                            { value: "4", label: "Non-profit society" },
                                            { value: "5", label: "Educational Institute" },
                                            { value: "6", label: "Independent" },                                        
                                        ]}
                                        placeholder="Single Select"                            
                                        />          
                                    </>
                                );

                            default :
                             return (<div>
                                <select name={ejCriterias[i].id} value={ejCriterias[i].id}>
                                    {ejCriterias[i].parameters.map(p => <option value={p.idparam}>{p.nameparam}</option>)}
                                </select>  
                                </div>  
                                );                                                                      
                              }
                            })()}
                            </td>
                            </tr>
                        )
                        } )} 

                    </tbody>
                    </Table>
                </CardBody>
                </Card>
            </Col>
          </Row>
      );
    });
export default StepSelected;    