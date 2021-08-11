import React, { Component } from "react";
import { Layout, Row, Col, Icon } from "antd";
import screenfull from "screenfull";
import "../../assets/styles/view-style/index.scss";
import "../../assets/styles/index.scss";
import PieEcharts from "./pie.jsx";
import LineEcharts from "./line.jsx";
import ScatterEcharts from "./scatter.jsx";
import PictorialBarEcharts from "./pictorialBar.jsx";
import BarEcharts from "./bar.jsx";

const rankingListData = [];
for (let i = 0; i < 7; i += 1) {
  rankingListData.push({
    title: `工专路 ${i} 号店`,
    total: 323234
  });
}

const bar2 = [
  {
    name: "London",
    "Jan.": 1,
    "Feb.": 1,
    "Mar.": 1,
    "Apr.": 1,
    "May.": 1,
    "Jun.": 1,
    "Jul.": 1,
    "Aug.": 1
  },
  {
    name: "Berlin",
    "Jan.": 1,
    "Feb.": 1,
    "Mar.": 1,
    "Apr.": 1,
    "May.": 1,
    "Jun.": 1,
    "Jul.": 1,
    "Aug.": 1
  }
];
class Dashboard extends Component {
  state = {
    bar2
  };
  fullToggle = () => {
    if (screenfull.isEnabled) {
      screenfull.request(document.getElementById("bar"));
    }
  };

  render() {
    return (
      <Layout className="index animated fadeIn">
        <Row gutter={24} className="index-header">
          <Col span={6}>
            <div className="base-style wechat">
              <Icon type="branches" className="icon-style" />
              <div>
                <span>999</span>
                <div>TestLink</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style ant-design">
              <Icon type="ant-design" className="icon-style" />
              <div>
                <span>366</span>
                <div>Jira</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style gitlab">
              <Icon type="google-plus" className="icon-style" />
              <div>
                <span>666</span>
                <div>BitBucket</div>
              </div>
            </div>
          </Col>
          <Col span={6}>
            <div className="base-style weibo">
              <Icon type="aliyun" className="icon-style" />
              <div>
                <span>689</span>
                <div>Other</div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className="base-style">
              <div className="bar-header">
                <div>图形全屏展示</div>
                <Icon
                  type="fullscreen"
                  style={{ cursor: "pointer" }}
                  onClick={this.fullToggle}
                />
              </div>

              <div className="flex">
                <div className="flex-auto-hidden flex flex-column">
                  <h4 className="flex-none">销售额分布</h4>
                  <div className="flex-auto-hidden">
                    <BarEcharts />
                  </div>
                </div>
                <div className="flex-none sales-order">
                  <h4>门店销售额排名</h4>
                  <ul>
                    {rankingListData.map((item, i) => (
                      <li key={item.title}>
                        <span>{i + 1}</span>
                        <span>{item.title}</span>
                        <span>{item.total}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              {/* <div className="flex">
                                <div className="flex-auto-hidden flex flex-column">
                                    <h4 className="flex-none">销售额分布</h4>
                                    <div className="flex-auto-hidden">
                                    <BarEcharts />
                                    </div>
                                </div>
                                <div className="flex-none sales-order">
                                    <h4>门店销售额排名</h4>
                                    <ul>
                                    {rankingListData.map((item, i) => (
                                        <li key={item.title}>
                                        <span>{i + 1}</span>
                                        <span>{item.title}</span>
                                        <span>{item.total}</span>
                                        </li>
                                    ))}
                                    </ul>
                                </div>
                            </div> */}
            </div>
          </Col>
        </Row>
        <Row gutter={8}>
          <Col span={12}>
            <div className="base-style">
              <LineEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <PieEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <ScatterEcharts />
            </div>
          </Col>
          <Col span={12}>
            <div className="base-style">
              <PictorialBarEcharts />
            </div>
          </Col>
        </Row>
      </Layout>
    );
  }
}
export default Dashboard;
