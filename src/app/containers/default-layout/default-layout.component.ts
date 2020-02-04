import { Component, Input } from '@angular/core';
import { navItems } from '../../_nav';
import { ToasterConfig } from 'angular2-toaster';
import { AppComponent } from '../../app.component';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent {
  public navItems = navItems;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement = document.body;
  public loginData: string;
  public userData: any;

  constructor( private appComponent: AppComponent,private http: HttpClient) {
    this.loginData = localStorage.getItem('id');
    this.getUserData(this.loginData);
    this.changes = new MutationObserver((mutations) => {
      this.sidebarMinimized = document.body.classList.contains('sidebar-minimized');
    });

    this.changes.observe(<Element>this.element, {
      attributes: true
    });

    if (localStorage.getItem("ROLE") == "ADMIN") {
      this.showAdminOptions();
    } else {
      this.removeAdminOptions();
    }

  }


  getUserData(login:string) {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "getUserData.php?id="+ login).subscribe(
      (res) => {
         this.userData = res['data'];
         console.log(this.userData)
        
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )

  }

  showAdminOptions() {

    let navObj = {
      name: 'Configuration',
      url: '/configuration',
      icon: 'icon-settings',
      children: [
        {
          name: 'Lookups',
          url: '/configuration/lookups',
          icon: 'icon-magnifier-add'
        },
        {
          name: 'Deviations',
          url: '/configuration/deviations',
          icon: 'icon-chart'
        },
        {
          name: 'Notification Template',
          url: '/configuration/notification-template',
          icon: 'icon-bubbles'
        },
        {
          name: 'Parameters',
          url: '/configuration/parameters',
          icon: 'icon-clock'
        },
        {
          name: 'Agreements',
          url: '/configuration/agreement',
          icon: 'icon-doc'
        },
        {
          name: 'Risk Rating',
          url: '/configuration/risk-rating',
          icon: 'icon-pin'
        },
        {
          name: 'User Management',
          url: '/configuration/user-management',
          icon: 'icon-user-follow'
        }
      ]
    };

    let containsAdminNav: boolean = false;
    for (let i = 0; i < this.navItems.length; i++) {
      if (this.navItems[i].name == "Configuration") {
        containsAdminNav = true;
        console.log("ALREADY CONTAINS")
        break;
      }
    }

    if (!containsAdminNav)
      this.navItems.push(navObj)
  }// Show admin options

  removeAdminOptions() {

    for (let i = 0; i < this.navItems.length; i++) {
      if (this.navItems[i].name == "Configuration") {
        this.navItems.splice(i, 1);
        break;
      }
    }

  }//remove admin options


}
