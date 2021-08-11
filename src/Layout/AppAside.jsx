import React, { Component } from "react";
import { Layout, Icon } from "antd";
import CustomMenu from "../Components/CustomMenu";
import Logo from "../assets/images/logo.png";
const { Sider } = Layout;

class AppAside extends Component {
  render() {
    let { menuToggle, menu } = this.props;
    return (
      <Sider className="aside" collapsed={menuToggle}>
        <div className="logo">
          <a rel="noopener noreferrer" href="./" target="_blank">
            <img src={Logo} style={{ fontSize: "3.8rem", color: "#fff" }} />
          </a>
        </div>
        <CustomMenu menu={menu}></CustomMenu>
      </Sider>
    );
  }
}

export default AppAside;
