import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

import { HttpClient } from '@angular/common/http';

import * as echarts from 'echarts';
import 'echarts-gl';
import { inject, Injectable } from '@angular/core';

var chartDom = document.getElementById('displayArea')!;
var chart = echarts.init(chartDom);

let size = 2000000;

var chartData=Array<Array<number>>(size);

for( let i=0; i < size; ++i){
  chartData[i] = [i/size, i/size, i/size];
}

chart.setOption({
    grid3D: {},
    xAxis3D: {},
    yAxis3D: {},
    zAxis3D: {},
    series: [{
        type: 'scatter3D',
        symbolSize: 3,
        showSymbol: false,
        data: chartData,
        sampling: 'average',
        large: true,
        itemStyle: {
            opacity: 1
        }
    }]
})

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
