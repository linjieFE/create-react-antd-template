/**
 * icon:菜单项图标
 * roles:标明当前菜单项在何种角色下可以显示，如果不写此选项，表示该菜单项完全公开，在任何角色下都显示
 */
const menuList = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: "home",
  },
  {
    title: "TestLink",
    path: "/charts",
    icon: "area-chart",
    children: [
      {
        title: "Project Overview",
        path: "/overview",
      },
      {
        title: "Test Case",
        path: "/charts/mix-chart",
        children: [
          {
            title: "TestCase Overview",
            path: "/charts/line/Case"
          },
          {
            title: "TestCase List",
            path: "/TestCaseList",
          },
        ] 
      },
      {
        title: "Testing Result",
        path: "/TestingResult",
      },
      {
        title: "Automation Overview",
        path: "/AutomationOverview",
      },
    ],
  },
  {
    title: "JIRA",
    path: "/nested",
    icon: "cluster",
    
    children: [
      {
        title: "Bug",
        path: "/nested/menu1",
        children: [
          {
            title: "Found Bug Overview",
            path: "/nested/menu1/menu1-1",
            
          },
          {
            title: "Found Bugs List",
            path: "/nested/menu1/menu1-1",
            
          },
          {
            title: "Active Bugs List",
            path: "/nested/menu1/menu1-1",
            
          },
          {
            title: "Done Bugs Overview",
            path: "/nested/menu1/menu1-1",
            
          },
          {
            title: "Project Bug Trend",
            path: "/nested/menu1/menu1-1",
            
          },
          // {
          //   title: "菜单1-2",
          //   path: "/nested/menu1/menu1-2",
          //   children: [
          //     {
          //       title: "菜单1-2-1",
          //       path: "/nested/menu1/menu1-2/menu1-2-1",
                
          //     },
          //   ],
          // },
        ],
      },
      {
        title: "Epic",
        path: "/nested/menu1",
        children: [
          {
            title: "Epic Overview",
            path: "/nested/menu1/menu1-1",
            
          },{
            title: "Epic List",
            path: "/nested/menu1/menu1-1",
            
          }
        ]
      },
      {
        title: "User Story",
        path: "/nested/menu1",
        children: [
          {
            title: "User Story Overview",
            path: "/nested/menu1/menu1-1",
            
          },{
            title: "User Story List",
            path: "/nested/menu1/menu1-1",
            
          },{
            title: "Unapproved User Story List",
            path: "/nested/menu1/menu1-1",
            
          }
        ]
      }
    ],
  },
  {
    title: "BitBucket",
    path: "/table",
    icon: "table",
    children: [
      {
        title: "Branch",
        path: "/charts/keyboard",
        children:[
          {
            title: "Active Branch Overview",
            path: "/charts/mix-chart"
          },
          {
            title: "Active Branch List",
            path: "/charts/mix-chart"
          }
        ]
      },
      {
        title: "Pull Request",
        path: "/charts/line",
        children:[
          {
            title: "Active PR Overview",
            path: "/charts/mix-chart"
          },
          {
            title: "Active PR List",
            path: "/charts/mix-chart"
          }
        ]
      }
    ]
  }
  // {
  //   title: "开发文档",
  //   path: "/doc",
  //   icon: "file",
  // },
  // {
  //   title: "引导页",
  //   path: "/guide",
  //   icon: "key"
  // },
  // {
  //   title: "权限测试",
  //   path: "/permission",
  //   icon: "lock",
  //   children: [
  //     {
  //       title: "权限说明",
  //       path: "/permission/explanation",
  //       roles:["admin"]
  //     },
  //     {
  //       title: "admin页面",
  //       path: "/permission/adminPage",
  //       roles:["admin"]
  //     },
  //     {
  //       title: "guest页面",
  //       path: "/permission/guestPage",
  //       roles:["guest"]
  //     },
  //     {
  //       title: "editor页面",
  //       path: "/permission/editorPage",
  //       roles:["editor"]
  //     },
  //   ],
  // },
  // {
  //   title: "组件",
  //   path: "/components",
  //   icon: "appstore",
    
  //   children: [
  //     {
  //       title: "富文本",
  //       path: "/components/richTextEditor",
        
  //     },
  //     {
  //       title: "Markdown",
  //       path: "/components/Markdown",
        
  //     },
  //     // {
  //     //   title: "拖拽列表",
  //     //   path: "/components/draggable",
  //     //   
  //     // },
  //   ],
  // },
  // {
  //   title: "Excel",
  //   path: "/excel",
  //   icon: "file-excel",
    
  //   children: [
  //     {
  //       title: "导出Excel",
  //       path: "/excel/export",

  //     },
  //     {
  //       title: "上传Excel",
  //       path: "/excel/upload",
  //     }
  //   ],
  // },
  // {
  //   title: "Zip",
  //   path: "/zip",
  //   icon: "file-zip",
  //   roles:["admin","editor"]
  // },
  // {
  //   title: "剪贴板",
  //   path: "/clipboard",
  //   icon: "copy",
  //   roles:["admin","editor"]
  // },
  // {
  //   title: "用户管理",
  //   path: "/user",
  //   icon: "usergroup-add"
  // },
  // {
  //   title: "关于作者",
  //   path: "/about",
  //   icon: "user"
  // },
  // {
  //   title: "Bug收集",
  //   path: "/bug",
  //   icon: "bug"
  // },
];
export default menuList;
