import React, { Component } from "react";
import echarts from "echarts/lib/echarts";
import "echarts/lib/chart/bar";
import "echarts/lib/component/tooltip";
import "echarts/lib/component/title";
import "echarts/lib/component/legend";
class Bar extends Component {
  componentDidMount() {
    let myChart = echarts.init(document.getElementById("bar"));
    myChart.setOption({
      tooltip: {
        trigger: "axis",
        axisPointer: {
          // 坐标轴指示器，坐标轴触发有效
          type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        data: ["直接访问", "百度", "谷歌", "必应", "其他"]
      },
      grid: {
        left: "3%",
        right: "4%",
        bottom: "3%",
        containLabel: true
      },
      xAxis: [
        {
          type: "category",
          data: ["Jan.", "Feb.", "Mar.", "Apr.", "May.", "Jun.", "Jul."]
        }
      ],
      yAxis: [
        {
          type: "value"
        }
      ],
      series: [
        {
          name: "直接访问",
          type: "bar",
          data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
          name: "百度",
          type: "bar",
          // barWidth: 5,
          stack: "搜索引擎",
          data: [620, 732, 701, 734, 1090, 1130, 1120]
        },
        {
          name: "谷歌",
          type: "bar",
          stack: "搜索引擎",
          data: [120, 132, 101, 134, 290, 230, 220]
        },
        {
          name: "必应",
          type: "bar",
          stack: "搜索引擎",
          data: [60, 72, 71, 74, 190, 130, 110]
        },
        {
          name: "其他",
          type: "bar",
          stack: "搜索引擎",
          data: [62, 82, 91, 84, 109, 110, 120]
        }
      ]
    });
    window.addEventListener("resize", function() {
      myChart.resize();
    });
  }
  render() {
    return <div id="bar" style={{ height: 260, background: "#fff" }}></div>;
  }
}

export default Bar;