import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/bar'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Bar extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('bar'),"macarons")
        myChart.setOption({
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    // 坐标轴指示器，坐标轴触发有效
                    type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            legend: {
                data: ['Robot', 'Arm', 'Control Box', 'Teach Pendant', 'Motion Bar', 'Joint', 'Robot Bed', 'License', 'Other']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: [
                {
                    type: 'category',
                    data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
                }
            ],
            yAxis: [
                {
                    type: 'value'
                }
            ],
            series: [
                {
                    name: 'Robot',
                    type: 'bar',
                    data: [320, 332, 301, 334, 390, 330, 320]
                },
                {
                    name: 'Arm',
                    type: 'bar',
                    stack: 'Arm',
                    data: [120, 132, 101, 134, 90, 230, 210]
                },
                {
                    name: 'Control Box',
                    type: 'bar',
                    stack: 'Arm',
                    data: [220, 182, 191, 234, 290, 330, 310]
                },
                {
                    name: 'Teach Pendant',
                    type: 'bar',
                    stack: 'Arm',
                    data: [150, 232, 201, 154, 190, 330, 410]
                },
                {
                    name: 'Motion Bar',
                    type: 'bar',
                    data: [862, 1018, 964, 1026, 1679, 1600, 1570],
                    markLine: {
                        lineStyle: {
                            normal: {
                                type: 'dashed'
                            }
                        },
                        data: [[{ type: 'min' }, { type: 'max' }]]
                    }
                },
                {
                    name: 'Joint',
                    type: 'bar',
                    // barWidth: 5,
                    stack: 'Joint',
                    data: [620, 732, 701, 734, 1090, 1130, 1120]
                },
                {
                    name: 'Robot Bed',
                    type: 'bar',
                    stack: 'Joint',
                    data: [120, 132, 101, 134, 290, 230, 220]
                },
                {
                    name: 'License',
                    type: 'bar',
                    stack: 'Joint',
                    data: [60, 72, 71, 74, 190, 130, 110]
                },
                {
                    name: 'Other',
                    type: 'bar',
                    stack: 'Joint',
                    data: [62, 82, 91, 84, 109, 110, 120]
                }
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return <div id='bar' style={{ height: 300, background: '#fff' }}></div>
    }
}

export default Bar
