import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { HttpClient } from '@angular/common/http';

import * as echarts from 'echarts';
import 'echarts-gl';
import { inject, Injectable } from '@angular/core';

var chartDom = document.getElementById('displayArea')!;
var chart = echarts.init(chartDom);

let size = 8000000;

var chartData=Array<Array<number>>(size);

for( let i=0; i < size; ++i){
  chartData[i] = [i/size, 100*i/size];
}

chart.setOption({
  xAxis:{},
  yAxis: {},
  xAxisIndex: 0,
  yAxisIndex: 1,
    series: [{
        type: 'scatterGL',
        symbolSize: 3,
        showSymbol: false,
        data: chartData,
        coordinateSystem: 'cartesian2d',
        sampling: 'average',
        large: true,
        itemStyle: {
            opacity: 1
        }
    }]
})

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
