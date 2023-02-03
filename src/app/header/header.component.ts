import { Component, HostListener, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ShareService } from '../services/share/share.service';

declare var executeCustomJs: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isMobileNavOpen = false;
  currentOpenSubmenu = '';
  searchText = '';
  currentLanguage = 'en';
  scrollTop = 0;

  // @HostListener("window:scroll", ["$event"])
  //   onWindowScroll() {
  //     this.scrollTop = document.documentElement.scrollTop;
  // }

  constructor(
    private shareService: ShareService,
    private translate: TranslateService
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    executeCustomJs();
  }
  
  toggleMobileNav() {
    this.isMobileNavOpen = !this.isMobileNavOpen;
  }

  toggleSubMenu(submenu: string) {
    this.currentOpenSubmenu = submenu === this.currentOpenSubmenu ? '' : submenu;
  }

  setLanguage(newLanguage: string) {
    this.translate.use(newLanguage);
    this.currentLanguage = newLanguage;
    this.shareService.currentLanguage = this.currentLanguage;
  }

  searchSite() {
    window.location.href = `https://core-staff.com/?s=${this.searchText}`;
  }

}
