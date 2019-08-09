import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  filteredStatus: string = '';
  filterType: string = 'status';
  sortBy: string = 'size';
  sortType: string = 'asc';
  reverseField: string = '';

  appStatus = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('stable');
    }, 2000);
  });

  servers = [
    {
      name: 'Dev Server',
      size: 'small',
      creationTime: new Date(2018, 5, 15),
      status: 'offline'
    },
    {
      name: 'Stagging Server',
      size: 'medium',
      creationTime: new Date(2017, 8, 18),
      status: 'critical'
    },
    {
      name: 'Self Hosted Production Server',
      size: 'large',
      creationTime: new Date(2016, 6, 16),
      status: 'stable'
    },
    {
      name: 'Cloud Based Production Server',
      size: 'large',
      creationTime: new Date(2019, 7, 17),
      status: 'stable'
    }
  ];

  getCssClass(status: string) {
    return {
      'list-group-item-success': status === 'stable',
      'list-group-item-danger': status === 'critical',
      'list-group-item-warning': status === 'offline'
    };
  }

  onAddServer() {

    const server = {
      name: 'AWS Production Server',
      size: 'large',
      creationTime: new Date(2012, 9, 19),
      status: 'stable'
    };

    this.servers.push(server);
  }

}
