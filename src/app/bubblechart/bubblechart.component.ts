import { formatDate, NgIfContext } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormControlDirective } from '@angular/forms';
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
      tooltip: {
        borderWidth: 1,
        borderColor: '#7cd5ff',
        displayColors: false,
        backgroundColor: '#fff',
        titleColor: 'black',
        titleAlign: 'center',
        bodyColor: 'black',
        callbacks: {
          label: function (context: any) {
            console.log(context);
            return `Activities: ${context.raw.o}`;
          },
          title: function (context: any) {
            console.log(context);

            return context[0].raw.p;
          },
          beforeLabel: function (context: any) {
            console.log(context);
            const formatted_date_x =
              context.raw.x.getMonth() +
              1 +
              '.' +
              context.raw.x.getDate() +
              '.' +
              context.raw.x.getFullYear();

            return `Last Edit: ${formatted_date_x}`;
          },
          afterLabel: function (context: any) {
            console.log(context);
            const formatted_date_y =
              context.raw.y.getMonth() +
              1 +
              '.' +
              context.raw.y.getDate() +
              '.' +
              context.raw.y.getFullYear();

            return `Last Login: ${formatted_date_y}`;
          },
        },
      },
    },
    scales: {
      xAxes: {
        type: 'time',
        time: {
          unit: 'month',
        },
        display: true,
        title: {
          display: true,
          text: 'Last edit',
        },
        ticks: {
          beginAtZero: true,

          display: true,
        },
      },
      yAxes: {
        type: 'time',
        time: {
          unit: 'month',
        },
        display: true,
        title: {
          display: true,
          text: 'Last login',
        },
        ticks: {
          beginAtZero: true,
          display: true,
        },
      },
    },
  };

  public bubbleChartType: any = 'bubble';

  constructor() {}

  ngOnInit(): void {}
}
