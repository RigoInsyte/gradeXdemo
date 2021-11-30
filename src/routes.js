/*!

=========================================================
* Black Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-pro-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import VectorMap from "views/maps/VectorMap.js";
import GoogleMaps from "views/maps/GoogleMaps.js";
import FullScreenMap from "views/maps/FullScreenMap.js";
import ReactTables from "views/tables/GralReactTable.js";
import RegularTables from "views/tables/RegularTables.js";
import ExtendedTables from "views/tables/ExtendedTables.js";
import Wizard from "views/forms/Wizard.js";
import ValidationForms from "views/forms/ValidationForms.js";
import ExtendedForms from "views/forms/ExtendedForms.js";
import RegularForms from "views/forms/RegularForms.js";
import Calendar from "views/Calendar.js";
import Widgets from "views/Widgets.js";
import Charts from "views/Charts.js";
import Dashboard from "views/Dashboard.js";
import Buttons from "views/components/Buttons.js";
import SweetAlert from "views/components/SweetAlert.js";
import Notifications from "views/components/Notifications.js";
import Grid from "views/components/Grid.js";
import Typography from "views/components/Typography.js";
import Panels from "views/components/Panels.js";
import Icons from "views/components/Icons.js";
import Compare from "views/compare/CompareGral"
import Ranking from "views/ranking/RankingChart"
import Lead from "views/ranking/LeadAssessment"
import RankginApex from "./views/ranking/RankginApex"
import FeedAlerts from "./views/AccountModel/FeedAlerts"
import FindAccountBuyer from "./views/BuyerFinder/BuyerWizard"
import BuldAccountModel from "./views/AccountModel/BuildAccountModel"
import TablePerson from "./views/BuyerFinder/FindAccountBuyer"


const routes = [
  {
    path: "/react-tables",
    name: "Overview",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-coins",
    component: ReactTables ,
    layout: "/admin",
  },
  {
    path: "/compare",
    name: "Compare Companies",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-bank",
    component: Compare,
    layout: "/admin",
  },  
  {
    path: "/buildmodel",
    name: "Buil Account Model",
    rtlName: "ساحر",
    icon: "tim-icons icon-app",
    component: BuldAccountModel,
    layout: "/admin",
  },
  {
    path: "/ranking",
    name: "Ranking",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-bar-32",
    component: RankginApex,
    layout: "/admin",
  }, 
  {
    path: "/findaccuount",
    name: "Find Account Buyer",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-single-02",
    component: FindAccountBuyer,
    layout: "/admin",
  }, 
  {
    path: "/leed",
    name: "Leed Assessment",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-shape-star",
    component: Lead,
    layout: "/admin",
  },  
  {
    path: "/alerts",
    name: "Feed Alerts",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-time-alarm",
    component: FeedAlerts,
    layout: "/admin",
  },  
  {
    path: "/lpersons",
    name: "List Persons",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-map-big",
    component: TablePerson,
    layout: "/admin",
  },   

];

export default routes;
