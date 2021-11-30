import React from "react";
import classnames from "classnames";
// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Row,
  Col,
} from "reactstrap";

const Step1name = React.forwardRef((props, ref) => {
    const [firstname, setfirstname] = React.useState("");
    const [firstnameState, setfirstnameState] = React.useState("");
    const [firstnameFocus, setfirstnameFocus] = React.useState("");

    

    const stateFunctions = {    
        setfirstnameState: (value) => setfirstnameState(value),
        setfirstname: (value) => setfirstname(value),
    };

  // function that verifies if a string has a given length or not
  const verifyLength = (value, length) => {
    if (value.length >= length) {
      return true;
    }
    return false;
  };
    
  const change = (event, stateName, type, stateNameEqualTo, maxValue) => {
    switch (type) {
      case "length":
        if (verifyLength(event.target.value, stateNameEqualTo)) {
          stateFunctions["set" + stateName + "State"]("has-success");
        } else {
          stateFunctions["set" + stateName + "State"]("has-danger");
        }
        break;
      default:
        break;
    }
    stateFunctions["set" + stateName](event.target.value);
  };

  const isValidated = () => {
    if (
      firstnameState === "has-success" 
    ) {
      return true;
    } else {
      if (firstnameState !== "has-success") {
        setfirstnameState("has-danger");
      }
      return false;
    }
  };

  React.useImperativeHandle(ref, () => ({
    isValidated: () => {
      return isValidated();
    },
  }));

    return (
      <>
      <h5 className="info-text">
        Name your Account Buyer Finder
      </h5>
      
      <Row className="justify-content-center mt-5">
          <Col sm="5">
            <InputGroup
                className={classnames(firstnameState, {
                "input-group-focus": firstnameFocus,
                })}
            >
                            <InputGroupAddon addonType="prepend">
              <InputGroupText>
                <i className="tim-icons icon-notes" />
              </InputGroupText>
            </InputGroupAddon>
            <Input
              name="firstname"
              placeholder="Type here..."
              type="text"
              onChange={(e) => change(e, "firstname", "length", 1)}
              onFocus={(e) => setfirstnameFocus(true)}
              onBlur={(e) => setfirstnameFocus(false)}
            />
            {firstnameState === "has-danger" ? (
              <label className="error">This field is required.</label>
            ) : null}
            </InputGroup>
          </Col>

      </Row>
      </>
    );
});

export default Step1name;