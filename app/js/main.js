Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
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
                groupPadding: .1
            }
        },
        legend: {
            enabled: false
            // align: 'right',
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
            min: -40,
            tickAmount: 8
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