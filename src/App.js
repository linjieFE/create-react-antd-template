import React from 'react';
import { Provider } from 'react-redux'; // redux提供的provider。
import zhCN from 'antd/es/locale-provider/zh_CN'; // antd的中文包
import { HashRouter } from 'react-router-dom'; 
import  MyRouter  from './router'; // 刚才的router.tsx
import { ConfigProvider, message, notification } from 'antd'; 
import storeConfig from './store'; // redux的仓库
import moment  from 'moment'; // momentjs。
import 'moment/locale/zh-cn'; // 中文包moment.js
import 'antd/dist/antd.css'; // 引入antd的样式表
import './App.css'
moment.locale('zh-cn'); // 将moment.js设置为中文

const store = storeConfig; // 初始化redux的store，如不需要状态管理器，redux相关可以忽略。

message.config({ // antd的message组件配置，during持续时间单位为秒，maxcount最多显示个数
  duration: 2,
  maxCount: 2
});
notification.config({
  placement: 'topRight', // antd的通知组件配置，placement弹出位置。bottom距离底部的距离，during持续时间单位为秒
  bottom: 50,
  duration: 2,
});
function App() {
  console.log(store)
  return (
    <Provider store={store}>
      <ConfigProvider locale={zhCN}>
        <HashRouter>
          <MyRouter />
        </HashRouter>
      </ConfigProvider>
    </Provider>
  );
}

export default App;