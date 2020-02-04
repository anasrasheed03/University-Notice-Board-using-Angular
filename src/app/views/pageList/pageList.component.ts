import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { environment } from '../../../environments/environment';

@Component({
  templateUrl: 'pageList.component.html'
})
export class  PageListComponent {

  public userRole;
  public rowData;
  public autoSlide: number;
  public sliderArrows: boolean = false;
  @ViewChild('getParentWidth') elementView: ElementRef;
  public sliderWidth;
  public sliderHeight;
  public loadImageSlider: boolean = false;
  public imageObject: Array<object> = [];

  columnDefs = [
    { headerName: '#', field: 'id', sortable: true, filter: 'agTextColumnFilter', width: 70, lockPosition: true, suppressMenu: true },
    { headerName: 'Name', field: 'page_name', sortable: true, filter: 'agTextColumnFilter',width: 350, lockPosition: true, suppressMenu: true },
    { headerName: 'URL', field: 'url', sortable: true, filter: 'agTextColumnFilter', width: 350, lockPosition: true, suppressMenu: true },
    { headerName: 'Action', field: 'ACTION', cellRenderer: "editButton", width: 150, lockPosition: true, suppressMenu: true, pinned: "right" },
    { headerName: 'Disable', field: 'delete', cellRenderer: "deleteButton", width: 150, lockPosition: true, suppressMenu: true, pinned: "right" },
  ];
  constructor(private http: HttpClient,private routr: Router) {

  }

  ngOnInit(): void {
    this.getSliderWidth(this.elementView.nativeElement.offsetWidth, this.elementView.nativeElement.offsetHeight)

    this.getAllList();
    this.autoSlide = 1;
    this.sliderArrows = true
  }

  public getSliderWidth(width, height): void {
    this.sliderWidth = width;
    this.sliderHeight = height;
  }

  display(e) {
    let selectedRowsLength = e.length - 1
    console.log(e[selectedRowsLength])

  }

  editUserDetails(e){
    this.routr.navigate(['/addPage'], { queryParams: { id: e.id } });
}

  getAllList() {
    this.http.get("http://noticeboard.plenary-session.com/apis/" + "noticeBoardList.php").subscribe(
      (res) => {
        console.log(res['data'].length)
        for (let i = 0; i < res['data'].length; i++) {  
          let obj = {};
          console.log(i)
          obj['image'] = res['data'][i]['picture'];
          obj['thumbImage'] = res['data'][i]['picture'];
          obj['ID'] = res['data'][i]['id'];
          obj['title'] = res['data'][i]['notification_name'] + " - " + res['data'][i]['notification_message'];
          this.imageObject.push(obj);
        }
        this.loadImageSlider = true;
        console.log(this.imageObject)
      },
      (err) => {
        console.log("Error getting values from server");
        console.log(err);
      }
    )
  }


}



export interface CResponse {
  Status: number,
  Message: string,
  Data: any
}
