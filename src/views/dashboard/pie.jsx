import React, { Component } from 'react'
import echarts from 'echarts/lib/echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
import 'echarts/lib/component/legend'

class Pie extends Component {
    componentDidMount() {
        let myChart = echarts.init(document.getElementById('pie'),"macarons")
        myChart.setOption({
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            legend: {
                orient: 'vertical',
                left: 'left',
                data: ['Robot', 'Arm', 'Control Box', 'Teach Pendant', 'Motion Bar']
            },
            series: [
                {
                    name: 'PR来源',
                    type: 'pie',
                    radius: '55%',
                    center: ['50%', '60%'],
                    data: [
                        { value: 335, name: 'Robot' },
                        { value: 310, name: 'Arm' },
                        { value: 234, name: 'Control Box' },
                        { value: 135, name: 'Teach Pendant' },
                        { value: 1548, name: 'Motion Bar' }
                    ],
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowOffsetX: 0,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }
            ]
        })
        window.addEventListener('resize', function() {
            myChart.resize()
        })
    }
    render() {
        return <div id='pie' style={{ height: 300 }}></div>
    }
}

export default Pie
