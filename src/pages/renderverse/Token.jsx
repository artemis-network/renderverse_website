import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import { useEffect } from "react";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Token = () => {
  useEffect(() => {
    var chart = am4core.create("chartdiv", am4charts.PieChart);

    chart.data = [
      {
        country: "Lithuania",
        litres: 501.9,
        color: am4core.color("#ffffff"),
      },
      {
        country: "Czechia",
        litres: 301.9,
        color: am4core.color("#ffffff"),
      },
      {
        country: "Ireland",
        litres: 201.1,
        color: am4core.color("#ffffff"),
      },
      {
        country: "Germany",
        litres: 165.8,
        color: am4core.color("#ffffff"),
      },
      {
        country: "Australia",
        litres: 139.9,
        color: am4core.color("#ffffff"),
      },
      {
        country: "Austria",
        litres: 128.3,
        color: am4core.color("#ffffff"),
      },
      {
        country: "UK",
        litres: 99,
        color: am4core.color("#ffffff"),
      },
      {
        country: "Belgium",
        litres: 60,
        color: am4core.color("#ffffff"),
      },
      {
        country: "The Netherlands",
        litres: 50,
        color: am4core.color("#ffffff"),
      },
    ];

    // Add and configure Series
    var pieSeries = chart.series.push(new am4charts.PieSeries());
    pieSeries.dataFields.value = "litres";
    pieSeries.dataFields.category = "country";

    // Let's cut a hole in our Pie chart the size of 40% the radius
    chart.innerRadius = am4core.percent(30);

    // Set up fills
    pieSeries.slices.template.fillOpacity = 1;
    pieSeries.slices.template.showOnInit = true;
    pieSeries.slices.template.hiddenState.properties.shiftRadius = 1;
  }, []);

  return (
    <div className="section" style={{ background: "#0b1118" }}>
      <div className="container">
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            padding: "0rem 0 0 0 ",
          }}
        >
          Tokenomics
        </div>
        <div
          style={{
            fontSize: "2rem",
            display: "flex",
            justifyContent: "center",
            color: "#0B1118",
          }}
        >
          Tokenomics
        </div>
        <div id="chartdiv"></div>
      </div>
    </div>
  );
};

export default Token;
