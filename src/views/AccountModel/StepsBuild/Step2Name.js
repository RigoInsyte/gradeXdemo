import React from "react";
import Select from "react-select";
// reactstrap components
import { Row, Col } from "reactstrap";

const Step2Name = React.forwardRef((props, ref) => {
  const [multipleSelect, setmultipleSelect] = React.useState(null);    

  React.useImperativeHandle(ref, () => ({
    isValidated: undefined,
  }));
  return (
    <>
      <h5 className="info-text">Select your Criteria</h5>
      <Col lg="7" md="8" sm="5">
        <Select
            className="react-select info"
            classNamePrefix="react-select"
            placeholder="Choose City"
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
            { value: "2", label: "Company size" },
            { value: "3", label: "Industries" },
            { value: "4", label: "Service or product offer" },
            { value: "5", label: "Founding date of the company" },
            { value: "6", label: "Total founding amount" },
            { value: "7", label: "Traffic Web" },
            { value: "8", label: "Size of the company" },
            { value: "9", label: "Number of employees" },
            { value: "10", label: "Numbre of founding rounds" },
            { value: "11", label: "Social media Presence" },
            { value: "12", label: "Number of technologies" },
            { value: "13", label: "Growth of the company" },
            { value: "14", label: "Technology spend" },
            { value: "15", label: "Other" },
            ]}
        />
    </Col>
      
    </>
  );
});


export default Step2Name;