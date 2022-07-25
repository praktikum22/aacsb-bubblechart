import { Component, Input, OnInit } from '@angular/core';
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
    responsive: true,
    display: true,
    animation: true,
    plugins: {
      title: {
        display: true,
        text: 'Demotext',
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
          text: 'Datum',
        },
        ticks: {
          min: 0,
          max: 30,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Datum',
        },
        ticks: {
          min: 0,
          max: 30,
        },
      },
    },
  };
  public bubbleChartType: any = 'bubble';

  constructor() {}

  ngOnInit(): void {}
}
