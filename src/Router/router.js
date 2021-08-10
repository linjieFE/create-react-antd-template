import loadable from '@loadable/component';

const Home = loadable(() => import('../Component/Home'));
// const Login = loadable(() => import('../Component/Login'));

const Index = loadable(() => import('../views/Index'))

export const routeConfig = [
    { path: '/', exact: true, name: '首页', component: Index },
    { path: '/index', exact: true, name: 'Home', component: Home },
    // { path: '/public/button', exact: false, name: '按钮', component: ButtonView },
    // { path: '/public/icon', exact: false, name: '图标', component: IconView },
    // { path: '/nav/dropdown', exact: false, name: '下拉菜单', component: DropdownView },
    // { path: '/nav/menu', exact: false, name: '下拉菜单', component: MenuView },
    // { path: '/nav/steps', exact: false, name: '步骤条', component: StepView },
    // { path: '/form/base-form', exact: false, name: '表单', component: FormBaseView },
    // { path: '/form/step-form', exact: false, name: '表单', component: FormStepView },
    // { path: '/show/table', exact: false, name: '表格', component: TableView },
    // { path: '/show/collapse', exact: false, name: '折叠面板', component: CollapseView },
    // { path: '/show/tree', exact: false, name: '树形控件', component: TreeView },
    // { path: '/show/tabs', exact: false, name: '标签页', component: TabsView },
    // { path: '/others/progress', exact: false, name: '进度条', component: ProgressView },
    // { path: '/others/animation', exact: false, name: '动画', component: AnimationView },
    // { path: '/others/editor', exact: false, name: '富文本', component: EditorView },
    // { path: '/others/upload', exact: false, name: '上传', component: UploadView },
    // { path: '/one/two/three', exact: false, name: '三级', component: Three },
    // { path: '/about', exact: false, name: '关于', component: About }
]

// export default routeConfig





