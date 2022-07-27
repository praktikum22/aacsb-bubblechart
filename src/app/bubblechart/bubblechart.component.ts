import { formatDate } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import {
  Chart,
  ChartConfiguration,
  LineController,
  LineElement,
  PointElement,
  LinearScale,
  Title,
  TooltipLabelStyle,
} from 'chart.js';

@Component({
  selector: 'app-bubblechart',
  templateUrl: './bubblechart.component.html',
  styleUrls: ['./bubblechart.component.scss'],
})
export class BubblechartComponent {
  @Input() bubbleChartData!: any[];

  months = [
    'jan',
    'feb',
    'mär',
    'apr',
    'mai',
    'jun',
    'jul',
    'aug',
    'sep',
    'oct',
    'nov',
    'dez',
  ];
  public BubblechartOptions: any = {
    type: 'bubble',
    backgroundColor: '#36a2eb',

    responsive: true,
    display: true,
    animation: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: 'Activities',
        font: {
          size: 40,
        },
      },
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: 'Last edit',
        },
        ticks: {
          beginAtZero: true,

          display: true,
          callback: (value: any, index: number) => {
            console.log(value);
            return this.months[index];
          },
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Last login',
        },
        ticks: {
          beginAtZero: true,
          display: true,
          callback: (value: any, index: number) => {
            console.log(value);
            return this.months[index];
          },
        },
      },
    },
  };

  public bubbleChartType: any = 'bubble';

  constructor() {}

  ngOnInit(): void {}
}
