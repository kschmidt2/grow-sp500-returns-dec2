"use strict";

Highcharts.setOptions({
  lang: {
    thousandsSep: ','
  }
});
document.addEventListener('DOMContentLoaded', function () {
  var myChart = Highcharts.chart('chart-container', {
    chart: {
      type: 'column',
      styledMode: true,
      spacingBottom: 25,
      spacingRight: 100
    },
    title: {
      text: null
    },
    data: {
      googleSpreadsheetKey: '1wwJMgsiwrGEtFlAPbAOXXLiyP-GBJmbonBQKBuINUHE',
      googleSpreadsheetWorksheet: 2,
      startRow: 72,
      endColumn: 1
    },
    plotOptions: {
      series: {
        groupPadding: .1,
        dataLabels: {
          enabled: true,
          inside: true,
          formatter: function formatter() {
            if (this.x == 2011) {
              return 0;
            }
          }
        }
      } // column: {
      //     minPointLength: 3
      // }

    },
    legend: {
      enabled: false // align: 'right',
      // symbolRadius: 0,
      // verticalAlign: 'top',
      // x: 10,
      // itemMarginTop: -10

    },
    xAxis: {
      labels: {
        style: {
          whiteSpace: 'nowrap'
        }
      }
    },
    yAxis: {
      title: false,
      labels: {
        useHTML: true,
        overflow: 'allow'
      },
      max: 30,
      min: -45,
      tickAmount: 6
    },
    credits: {
      enabled: false
    },
    tooltip: {
      shadow: false,
      padding: 10,
      valueDecimals: 1,
      valueSuffix: '%'
    },
    annotations: [{
      shapes: [{
        type: 'path',
        points: [{
          x: 1999,
          y: 7.23,
          xAxis: 0,
          yAxis: 0
        }, {
          x: 2020,
          y: 7.23,
          xAxis: 0,
          yAxis: 0
        }]
      }],
      labels: [{
        point: {
          x: 2000,
          y: 2,
          yAxis: 0,
          xAxis: 0
        },
        useHTML: true,
        backgroundColor: 'white'
      }],
      labelOptions: {
        formatter: function formatter() {
          return "Historical <br/>average";
        }
      }
    }],
    responsive: {
      rules: [{
        condition: {
          maxWidth: 500
        },
        chartOptions: {
          chart: {
            spacingRight: 10
          },
          legend: {
            align: 'left',
            x: -18
          },
          tooltip: {
            enabled: false
          }
        }
      }]
    }
  });
});