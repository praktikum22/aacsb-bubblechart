import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType } from 'chart.js';
import { BubblechartComponent } from './bubblechart/bubblechart.component';
import { TemplateLiteral } from '@angular/compiler';
import { filter } from 'rxjs';
import { data } from './seed';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public bubbleChartData: any[] = [];

  public users = data;
  data: any;

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
        data: [
          {
            x: new Date(user.last_login),
            y: new Date(user.last_edit),
            r: Math.log(user.activities.length) * 10 + 8,
            o: user.activities.length,
            p: user.name,
            u: user.status,
          },
        ],
      });
      console.log(this.bubbleChartData);
    });
  }

  ngOnInit() {
    this.getBubbleChartData();

    console.log(this.bubbleChartData);
  }
}
