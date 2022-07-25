import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { TemplateLiteral } from '@angular/compiler';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public bubbleChartData: any[] = [
    {
      label: [],
      data: [
        {
          x: 10,
          y: 10,
          r: 100,
        },
      ],
    },
  ];

  public users: any[] = [
    {
      name: 'urs',
      activities: [{ name: '1. activity' }],
    },
    {
      name: 'pia',
      activities: [{ name: '1. activity' }],
    },
    {
      name: 'lionel',
      activities: [
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
      ],
    },
    {
      name: 'aaron',
      activities: [{ name: '1. activity' }],
    },
    {
      name: 'Federico',
      activities: [
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
      ],
    },
  ];
  constructor() {
    // console.log(this.bubbleChartData[0])
    // console.log(this.bubbleChartData[0].label.)
  }

  getBubbleChartLabels() {
    console.log(name);
    this.users.forEach((userName) => {
      this.bubbleChartData[0].label.push(userName.name);
    });
  }
  ngOnInit() {}
}
