import React from "react";
// react plugin used to create a form with multiple steps
import ReactWizard from "react-bootstrap-wizard";

// reactstrap components
import { Col } from "reactstrap";

// wizard steps
import Step1 from "./StepsBuild/Step1Name.js";
import Step2 from "./StepsBuild/Step2Name.js";
import Step3 from "./StepsBuild/Step2Name.js";

var steps = [
  {
    stepName: "Name",
    stepIcon: "tim-icons icon-align-center",
    component: Step1,
  },
  {
    stepName: "Compare",
    stepIcon: "tim-icons icon-settings-gear-63",
    component: Step2,
  },
  {
    stepName: "Result",
    stepIcon: "tim-icons icon-delivery-fast",
    component: Step3,
  },
];

const BuildAccountModel = () => {
  return (
    <>
      <div className="content">
        <Col className="mr-auto ml-auto" md="10">
          <ReactWizard
            steps={steps}
            navSteps
            validate
            title="Account Model Creator"
            description="Complete the Wizard."
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

export default BuildAccountModel;
