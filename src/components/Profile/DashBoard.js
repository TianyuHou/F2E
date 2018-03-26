import React, { Component } from 'react';
import fusioncharts from 'fusioncharts';
import charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';

class DashBoard extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    charts(fusioncharts);
  }

  myDataSource = {
    chart: {
      caption: 'Your Recently Activity',
      subcaption: 'Last Year',
      xaxisname: 'Month',
      yaxisname: 'Times',
      //Cosmetics
      paletteColors: '#455A64,#FFA726,#00838F',
      baseFontColor: '#333333',
      baseFont: 'Fredoka One',
      captionFontSize: '20',
      subcaptionFontSize: '14',
      subcaptionFontBold: '0',
      showBorder: '0',
      bgColor: '#ffffff',
      showShadow: '1',
      canvasBgColor: '#ffffff',
      canvasBorderAlpha: '0',
      divlineAlpha: '100',
      divlineColor: '#999999',
      divlineThickness: '1',
      divLineIsDashed: '1',
      divLineDashLen: '1',
      divLineGapLen: '1',
      usePlotGradientColor: '0',
      showplotborder: '0',
      showXAxisLine: '1',
      xAxisLineThickness: '1',
      xAxisLineColor: '#999999',
      showAlternateHGridColor: '0',
      showAlternateVGridColor: '0',
      legendBgAlpha: '0',
      legendBorderAlpha: '0',
      legendShadow: '1',
      legendItemFontSize: '12',
      legendItemFontColor: '#666666'
    },
    categories: [
      {
        category: [
          {
            label: 'Jan'
          },
          {
            label: 'Feb'
          },
          {
            label: 'Mar'
          },
          {
            label: 'Apr'
          },
          {
            label: 'May'
          },
          {
            label: 'Jun'
          },
          {
            label: 'Jul'
          },
          {
            label: 'Aug'
          },
          {
            label: 'Sep'
          },
          {
            label: 'Oct'
          },
          {
            label: 'Nov'
          },
          {
            label: 'Dec'
          }
        ]
      }
    ],
    dataset: [
      {
        seriesname: 'Login Activity',
        data: [
          {
            value: '30'
          },
          {
            value: '5'
          },
          {
            value: '18'
          },
          {
            value: '50'
          },
          {
            value: '11'
          },
          {
            value: '35'
          },
          {
            value: '11'
          },
          {
            value: '57'
          },
          {
            value: '5'
          },
          {
            value: '35'
          },
          {
            value: '50'
          },
          {
            value: '35'
          }
        ]
      },
      {
        seriesname: 'Education Activity',
        renderas: 'line',
        showvalues: '0',
        data: [
          {
            value: '13'
          },
          {
            value: '1'
          },
          {
            value: '6'
          },
          {
            value: '23'
          },
          {
            value: '5'
          },
          {
            value: '12'
          },
          {
            value: '5'
          },
          {
            value: '35'
          },
          {
            value: '2'
          },
          {
            value: '12'
          },
          {
            value: '35'
          },
          {
            value: '13'
          }
        ]
      },
      {
        seriesname: 'Financial Activity',
        renderas: 'area',
        showvalues: '0',
        data: [
          {
            value: '5'
          },
          {
            value: '2'
          },
          {
            value: '6'
          },
          {
            value: '15'
          },
          {
            value: '4'
          },
          {
            value: '23'
          },
          {
            value: '6'
          },
          {
            value: '23'
          },
          {
            value: '2'
          },
          {
            value: '5'
          },
          {
            value: '23'
          },
          {
            value: '12'
          }
        ]
      }
    ]
  };

  chartConfigs = {
    id: 'activity-charts',
    type: 'mscombi2d',
    width: 600,
    height: 350,
    dataFormat: 'json',
    dataSource: this.myDataSource
  };

  render() {
    return <ReactFC {...this.chartConfigs} />;
  }
}

export default DashBoard;
