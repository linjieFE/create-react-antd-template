import React, { Component } from "react";
import { Layout } from "antd";
import CustomMenu from "../components/CustomMenu";

import Logo from "../assets/images/flexiv_logo.png";
import LogoMax from "../assets/images/logo.png";
const { Sider } = Layout;

class AppAside extends Component {
  render() {
    let { menuToggle, menu } = this.props;
    return (
      <Sider className="aside" collapsed={menuToggle}>
        <div className="logo">
          <a rel="noopener noreferrer" href="./" target="_blank">
            <img src={menuToggle ? Logo : LogoMax} />
          </a>
        </div>
        <CustomMenu menu={menu}></CustomMenu>
      </Sider>
    );
  }
}

export default AppAside;
