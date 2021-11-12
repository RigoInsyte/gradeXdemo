

import React from "react";

// reactstrap components
import {
  BreadcrumbItem,
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Progress,
  Table,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import OnePerson from "./OnePerson"


const PeopleTable = () => {
  return (

                <Table responsive>
                <thead className="text-primary">
                  <tr>
                    <th className="text-center">#</th>
                    <th>Name</th>
                    <th>Job Position</th>
                    <th className="text-center">Since</th>
                    <th className="text-right">Salary</th>
                    <th className="text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/tania.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Andrew Mike</td>
                    <td>Develop</td>
                    <td className="text-center">2013</td>
                    <td className="text-right">€ 99,225</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon"
                        color="success"
                        id="tooltip324367706"
                        size="sm"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip324367706"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        id="tooltip974171201"
                        size="sm"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip974171201"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/robi.jpg").default}
                        />
                      </div>
                    </td>
                    <td>John Doe</td>
                    <td>Design</td>
                    <td className="text-center">2012</td>
                    <td className="text-right">€ 89,241</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon"
                        color="success"
                        id="tooltip533157871"
                        size="sm"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip533157871"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        id="tooltip423541936"
                        size="sm"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip423541936"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/lora.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Alex Mike</td>
                    <td>Design</td>
                    <td className="text-center">2010</td>
                    <td className="text-right">€ 92,144</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon"
                        color="success"
                        id="tooltip101947879"
                        size="sm"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip101947879"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link"
                        color="danger"
                        id="tooltip964133889"
                        size="sm"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip964133889"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/jana.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Mike Monday</td>
                    <td>Marketing</td>
                    <td className="text-center">2013</td>
                    <td className="text-right">€ 49,990</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="success"
                        id="tooltip932549650"
                        size="sm"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip932549650"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-neutral"
                        color="danger"
                        id="tooltip696208424"
                        size="sm"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip696208424"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/robi.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Paul Dickens</td>
                    <td>Communication</td>
                    <td className="text-center">2015</td>
                    <td className="text-right">€ 69,201</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="success"
                        id="tooltip188998609"
                        size="sm"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip188998609"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-neutral"
                        color="danger"
                        id="tooltip991400757"
                        size="sm"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip991400757"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/emilyz.jpg").default}
                        />
                      </div>
                    </td>
                    <td>Manuel Rico</td>
                    <td>Manager</td>
                    <td className="text-center">2012</td>
                    <td className="text-right">€ 99,201</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="success"
                        id="tooltip967557276"
                        size="sm"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip967557276"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-neutral"
                        color="danger"
                        id="tooltip467555755"
                        size="sm"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        target="tooltip467555755"
                      >
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                </tbody>
              </Table>
    );
};

export default PeopleTable;
