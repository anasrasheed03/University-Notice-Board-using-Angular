import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { DropdownObject } from '../shared-models/dropdownItem';
import { error } from '@angular/compiler/src/util';
import { CONSTANTS } from '../utilities/constants';
import { MeezanResponse } from '../utilities/interfaces';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  private dropdownCache = {};


  constructor(
    private http: HttpClient) {
  }


  getDropdownValues(dropdowns) {

    dropdowns.forEach(dropdown => {

      console.log(dropdown);

      if (this.dropdownCache[dropdown.dropdownId]) {
        console.log("returning from cache");
        dropdown.dropdownObj.list = this.dropdownCache[dropdown.dropdownId];
      }
      else {
        console.log("hitting server");
        this.http.post(environment.BASE_URL + "code/getCodeList", { data: [dropdown.dropdownId] }).subscribe(
          (res: MeezanResponse) => {
            if (+res.statusCode == CONSTANTS.HTTP_RESPONSE.OK) {
              dropdown.dropdownObj.list = res.data[0].codeDtos;
              this.dropdownCache[dropdown.dropdownId] = res.data[0].codeDtos;
            }
          },
          (err) => {
            console.log("Error getting dropdown values from server");
            console.log(err);
          }
        )
      }

    });




  }// GET DROPDOWN VALUES


}
