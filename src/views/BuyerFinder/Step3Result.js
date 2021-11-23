import React from "react";
import classnames from "classnames";
import PeopleTable from "./PeopleTable"
//import FindAccountBuyer from "./FindAccountBuyer"

const Step3Result = React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        isValidated: undefined,
    }));
    return (
        <div >
        <PeopleTable />
        </div>
        );
    });
    
export default Step3Result;