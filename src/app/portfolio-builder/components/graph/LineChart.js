import React, { useState, useEffect } from "react";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function LineChart({data, interval=1, graphData, selected='One Time Investment', selectedGraphPercent=6}) {

    function calGraphPoints() {
        let arr = []
        let data;
        if (selected == 'Total Investment'){
            let oneTimeInvestment = Object.entries(graphData.oneTimeInvestment[selectedGraphPercent])
            let monthlySaving = Object.entries(graphData.monthlySaving[selectedGraphPercent])
            let yearlyOneTimeSaving = Object.entries(graphData.yearlyOneTimeSaving[selectedGraphPercent])
            
            oneTimeInvestment.forEach ( (item, index) => {
                oneTimeInvestment[index][1] += monthlySaving[index][1] + yearlyOneTimeSaving[index][1];
            })
            data = oneTimeInvestment;
        }
        if (selected == 'One Time Investment') data = Object.entries(graphData.oneTimeInvestment[selectedGraphPercent])
        if (selected == 'Monthly Savings') data = Object.entries(graphData.monthlySaving[selectedGraphPercent])
        if (selected == 'Yearly One Time Saving') data = Object.entries(graphData.yearlyOneTimeSaving[selectedGraphPercent])

        console.log(data);
        data = data.filter( (item, index) => index%interval==0 );
        data = data.map( item => [Number(item[0]),item[1]])
        return(data)
    }
    // calGraphPoints()

    const [options, setOptions] = useState({
        chart: {
            type: "area",
            marginTop: 20
        },
        plotOptions:{
            area:{
                lineWidth: 3,
                marker: {
                    lineWidth: 2,
                    radius: 4.5
                }
            }
        },
        credits: {
            enabled: false
        },
        legend: {
            enabled: false
        },
        title: {
            text: ''
        },
        tooltip: {
            borderRadius: 5,
            format: '<span style="font-size: 14px; background-color: #f5f7fe; font-weight: 600;" >₹ {y}</span>'
        },
        series: [{
            color:"#0171E7",
            fillColor: {
                linearGradient: [0, 0, 15, 400],
                stops: [
                    [0, "#0171E745"],
                    [1, "#0171E700"]
                ]
            },
            data
        }],
        xAxis:[{
            lineWidth: 2,
            lineColor: "#E4E5E5",
            tickLength: 0,
            tickInterval: interval  ,
            labels: {
                formatter: function() {
                    if ( this.value == '0' )
                        return '<span style="font-size: 12px; font-weight: 500">'+this.value+'</span>';
                    if ( this.value == '1' && this.value%interval==0 )
                        return '<span style="font-size: 12px; font-weight: 500">'+this.value+' year</span>';
                    return '<span style="font-size: 12px; font-weight: 500">'+this.value+' years</span>';
                },
            }
        }],
        yAxis:[{
            lineWidth: 2,
            lineColor: "#E4E5E5",
            gridLineWidth: 0,
            title: {
                enabled: false
            },
            labels: {
                formatter: function() {
                    let number = parseInt(this.value)
                    if (number >= 10000000) 
                        return '<span style="font-size: 12px; font-weight: 500">'+ (number / 10000000) + ' Cr</span>';
                    if (number >= 100000) 
                        return '<span style="font-size: 12px; font-weight: 500">'+ (number / 100000) + ' L</span>';
                    if (number >= 1000) 
                        return '<span style="font-size: 12px; font-weight: 500">'+ (number / 1000) + ' K</span>';
                    return '<span style="font-size: 12px; font-weight: 500">'+ number + '</span>';
                },
            }
        }]
    })

    useEffect(()=> {
        console.log([{ ...options.series[0], data: calGraphPoints()}])
        setOptions( options => ({
            ...options,
            xAxis: [{ ...options.xAxis[0], 
                tickInterval: interval
            }],
            series: [{ ...options.series[0], data: calGraphPoints()}]
        }))
    }, [graphData, interval, selected, selectedGraphPercent])

    return <HighchartsReact highcharts={Highcharts} options={options} />;
}
