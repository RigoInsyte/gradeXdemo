import React from "react";

// reactstrap components
import { Card, CardHeader, CardBody, CardTitle, Row, Col, Button } from "reactstrap";

// core components
import SortingTable from "components/SortingTable/SortingTable.js";

const GridInves = () => {
  return (
    <>
      <div className="content">
        <Row>
          <Col className="mb-5" md="12">
            <Card>
              <CardHeader>
                <CardTitle tag="h4">INVESTMENT GRID</CardTitle>
              </CardHeader>
              <CardBody>
                <SortingTable
                  thead={[
                    { text: "ID" },
                    { text: "Name" },
                    { text: "Found Date" },
                    { className: "text-center", text: "Industry" },
                    { text: "Location" },
                    { text: "Select" },
                    
                  ]}
                  tbody={[
                    {
                      data: [
                        { text: "1" },
                        { text: "Eurazo" },
                        { text: "01/01/2021" },
                        { className: "text-center", text: "Financial Service" },
                        { text: "Paris" },
                        { button : "select" }
                      ],
                    },
                    {
                      data: [
                        { text: "2" },
                        { text: "Deezer" },
                        { text: "02/02/2021" },
                        { className: "text-center", text: "Apps, Internet Services" },
                        { text: "Spain" },
                      ],
                    },
                    {
                      data: [
                        { text: "3" },
                        { text: "Vestiaire Collective" },
                        { text: "03/03/2021" },
                        { className: "text-center", text: "Clothing and Apparel2" },
                        { text: "Spain" },
                      ],
                    },
                    {
                      data: [
                        { text: "4" },
                        { text: "Voodoo" },
                        { text: "04/04/2021" },
                        { className: "text-center", text: "Apps, Gaming, Mobile" },
                        { text: "EEUU" },
                      ],
                    },
                  ]}
                />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default GridInves;
