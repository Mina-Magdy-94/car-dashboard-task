import React, { useLayoutEffect, useRef } from "react";
import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";

const XYSmoothGraph = (props) => {
  const series1Ref = useRef(null);
  const xAxisRef = useRef(null);


  // This code will only run one time
  useLayoutEffect(() => {
    let root = am5.Root.new(props.id);

    root.setThemes([am5themes_Animated.new(root)]);

    let chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panY: false,
        layout: root.verticalLayout,
        maxTooltipDistance: 0
      })
    );

    // Create Y-axis
    let yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        forceHidden: true,
        renderer: am5xy.AxisRendererY.new(root, {})
      })
    );

    // Create X-Axis
    let xAxis = chart.xAxes.push(
      am5xy.CategoryAxis.new(root, {
        renderer: am5xy.AxisRendererX.new(root, {
          minGridDistance: 20
        }),
        categoryField: "category"
      })
    );

    // Create series
    let series1 = chart.series.push(
      am5xy.SmoothedXLineSeries.new(root, {
        name: "Series",
        xAxis: xAxis,
        yAxis: yAxis,
        valueYField: "value1",
        categoryXField: "category",
        tooltip: am5.Tooltip.new(root, {})
      })
    );

    // const tooltip = am5.Tooltip.new(root, {});
    // tooltip.get("background").setAll({
    //   fill: am5.color(0x000)
    // });

    series1.strokes.template.set("strokeWidth", 2);

    series1.get("tooltip").label.set("text", "{categoryX}: {valueY}")
    series1.data.setAll(props.data);
    xAxis.data.setAll(props.data);

    // Add cursor
    chart.set("cursor", am5xy.XYCursor.new(root, {
      behavior: "selectXY",
      xAxis: xAxis
    }));

    xAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    yAxis.set("tooltip", am5.Tooltip.new(root, {
      themeTags: ["axis"]
    }));

    const kFormatter = (num) => {
      return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
    }

    // series1.columns.template.setAll({
    //   // tooltipX: am5.percent(100),
    //   // tooltipY: am5.percent(0),
    //   tooltipPosition: "pointer",
    //   tooltipHTML: "<div>{categoryX}</div><ul class='chartlist'><li>{valueY}</li></ul>"
    // });

    // series1.tooltipText = "{valueX} \n{valueY}";

    // Add legend
    // let legend = chart.children.push(am5.Legend.new(root, {}));
    // legend.data.setAll(chart.series.values);

    // Add cursor
    // chart.set("cursor", am5xy.XYCursor.new(root, {}));

    xAxisRef.current = xAxis;
    series1Ref.current = series1;

    // xAxisRef.current.data.setAll(props.data);
    // series1Ref.current.data.setAll(props.data);

    return () => {
      root.dispose();
    };
  });

  // This code will only run when props.data changes
  // useLayoutEffect(() => {
  //   console.log("2")

  // });

  return <div id={props.id} className='xy-smooth-graph-div'></div>;
}

export default XYSmoothGraph;