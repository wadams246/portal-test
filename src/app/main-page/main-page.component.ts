import { Component } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss'],
})
export class MainPageComponent {

  public filterCount: number = 1;
  public listFilter: any = {};
  public displaySidebar: boolean = false;
  public loading: boolean = true;
  public error: boolean = false;
  public sidebarCss: object = {};

  constructor() { }

  public onSidebarFilter(filter: any): void {
    this.listFilter = filter;
    this.filterCount++;
  }

  public toggleSidebar(value: boolean): void {
    const body = document.getElementById('body');
    this.displaySidebar = value;
    if (value) {
      this.sidebarCss = {
        position: 'fixed',
        width: '100%',
        'max-width': 'unset',
        top: 0,
        'z-index': 1000
      };
      body.classList.add('mobile-filter-open');
    } else {
      this.sidebarCss = {};
      body.classList.remove('mobile-filter-open');
    }
  }

  public handleListLoad(loading: boolean): void {
    this.loading = loading;
  }

  public handleError(showError: boolean): void {
    this.error = showError;
  }

  // public onScroll(e) {
  //   if (e.target.scrollTop > 60) {
  //     document.getElementById('header-container').classList.add('header--sticky');
  //   } else {
  //     document.getElementById('header-container').classList.remove('header--sticky');
  //   }
  // }

}
