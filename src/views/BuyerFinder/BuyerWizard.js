import React from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// wizard steps
import Step1 from "./Step1name.js";
import Step2 from "./StepSelected.js";   
import Step3 from "./Step3Result.js";
import Step4 from "./OnePerson.js"

var steps = [
  {
    stepName: "Name",
    stepIcon: "tim-icons icon-align-center",
    component: Step1,
  },
  {
    stepName: "Configure",
    stepIcon: "tim-icons icon-settings-gear-63",
    component: Step2,
  },
  {
    stepName: "Selected",
    stepIcon: "tim-icons icon-bag-16",
    component: Step3,
  },
  {
    stepName: "People",
    stepIcon: "tim-icons icon-user-run",
    component: Step4,
  },
];

const BuyerWizard = () => {
  return (
    <>
      <div className="content">
        <Col className="mr-auto ml-auto" md="10">
          <ReactWizard
            steps={steps}
            navSteps
            validate
            title="Account Buyer Finder"
            headerTextCenter
            finishButtonClasses="btn-wd btn-info"
            nextButtonClasses="btn-wd btn-info"
            previousButtonClasses="btn-wd"
            progressbar
            color="blue"
          />
        </Col>
      </div>
    </>
  );
};

export default BuyerWizard;
