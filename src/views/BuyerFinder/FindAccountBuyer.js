import React from 'react'
import {
    Card,
    CardHeader,
    CardBody,
    CardTitle,
    Collapse,
    NavItem,
    NavLink,
    Nav,
    TabContent,
    TabPane,
    Row,
    Col,
  } from "reactstrap";
  import PeopleTable from "./PeopleTable"
  import OnePerson from "./OnePerson"
  import CompTable from "./CompTable"

export default function FindAccountBuyer() {
    const [pageTabs, setpageTabs] = React.useState("home");
    const [horizontalTabs, sethorizontalTabs] = React.useState("profile");
    const [verticalTabs, setverticalTabs] = React.useState("profile");
    const [verticalTabsIcons, setverticalTabsIcons] = React.useState("home");
  
    const changeActiveTab = (e, tabState, tabName) => {
        e.preventDefault();
        switch (tabState) {
          case "horizontalTabs":
            sethorizontalTabs(tabName);
            break;
          case "verticalTabsIcons":
            setverticalTabsIcons(tabName);
            break;
          case "pageTabs":
            setpageTabs(tabName);
            break;
          case "verticalTabs":
            setverticalTabs(tabName);
            break;
          default:
            break;
        }
    };

    return (
       <div className="content">
            <Row>
                <Col className="ml-auto mr-auto" md="10">
                    <Card className="card-plain card-subcategories">
                    <CardHeader>
                    </CardHeader>
                    <CardBody>
                        {/* color-classes: "nav-pills-primary", "nav-pills-info", "nav-pills-success", "nav-pills-warning","nav-pills-danger" */}
                        <Nav
                        className="nav-pills-info nav-pills-icons justify-content-center"
                        pills
                        >
                        <NavItem>
                            <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={pageTabs === "home" ? "active" : ""}
                            onClick={(e) => changeActiveTab(e, "pageTabs", "home")}
                            >
                            <i className="tim-icons icon-badge" />
                            People (3 184 390)
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink
                            data-toggle="tab"
                            href="#pablo"
                            className={pageTabs === "messages" ? "active" : ""}
                            onClick={(e) =>
                                changeActiveTab(e, "pageTabs", "messages")
                            }
                            >
                            <i className="tim-icons icon-istanbul" />
                            Companies (321 316)
                            </NavLink>
                        </NavItem>                        
                        </Nav>
                        <TabContent
                        className="tab-space tab-subcategories"
                        activeTab={pageTabs}
                        >
                        <TabPane tabId="home">
                            <PeopleTable />                       
                        </TabPane>
                        <TabPane tabId="messages">
                            <CompTable />
                        </TabPane>                        
                        </TabContent>
                    </CardBody>
                    </Card>
                </Col>
            </Row>
            </div>
    )
}
