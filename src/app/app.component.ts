import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { TemplateLiteral } from '@angular/compiler';
import { filter } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public bubbleChartData: any[] = [];
  public users: any[] = [
    {
      name: 'urs',
      last_login: '2022-06-28',
      last_edit: '2022-06-20',
      activities: [{ name: '1. activity' }],
    },
    {
      name: 'Nick',
      last_login: '2022-08-10',
      last_edit: '2022-08-9',
      activities: [
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
      ],
    },
    {
      name: 'pia',
      last_login: '2022-07-3',
      last_edit: '2022-07-3',
      activities: [{ name: '1. activity' }],
      status: 'defined',
    },
    {
      name: 'Patrick',
      last_login: '2022-05-18',
      last_edit: '2022-05-18',
      activities: [{ name: '1. activity' }, { name: '1. activity' }],
      status: 'undefined',
    },
    {
      name: 'lionel',
      last_login: '2022-06-6',
      last_edit: '2022-06-3',
      activities: [
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
      ],
      status: 'undefined',
    },
    {
      name: 'semion',
      last_login: '2022-04-13',
      last_edit: '2022-04-11',
      activities: [
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
        { name: '1. activity' },
      ],
      status: 'defined',
    },
    {
      name: 'Kenny',
      last_login: '2022-03-6',
      last_edit: '2022-03-4',
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
      last_login: '2022-06-8',
      last_edit: '2022-06-5',
      activities: [{ name: '1. activity' }],
    },
    {
      name: 'Federico',
      last_login: '2022-12-22',
      last_edit: '2022-12-20',
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

  getBubbleChartData() {
    this.users.forEach((user) => {
      console.log(
        this.bubbleChartData.filter((value) => {
          // console.log(value, user.activities.length);
          return value.x == user.activities.length;
        })
      );
      this.bubbleChartData.push({
        label: user.name,
        data: [
          {
            x: new Date(user.last_login),

            y: new Date(user.last_edit),
            r: Math.log(user.activities.length) * 10,
          },
        ],
      });
      console.log(this.bubbleChartData);
    });
  }
  getBubbleChartLabels() {}
  ngOnInit() {
    this.getBubbleChartData();
    console.log(this.bubbleChartData);
  }
}
