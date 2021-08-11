import loadable from "../utils/loadable";

const Index = loadable(() => import("../views/Index"));

// 表单
const FormBaseView = loadable(() => import("../views/FormView/FormBaseView"));

// 展示
const TableView = loadable(() => import("../views/ShowView/Table"));

const routes = [
  { path: "/index", exact: true, name: "Index", component: Index },
  { path: "/index/workflow", exact: false, name: "Index", component: Index },
  {
    path: "/form",
    exact: false,
    name: "表单",
    component: FormBaseView
  },
  { path: "/table", exact: false, name: "表格", component: TableView }
];

export default routes;
