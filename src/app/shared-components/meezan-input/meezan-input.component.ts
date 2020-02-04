import { Component, OnInit, Input, ViewEncapsulation, ViewChild, EventEmitter, Output, ChangeDetectorRef } from '@angular/core';
import { ControlContainer, NgForm, NgControl } from '@angular/forms';
import { CommonHelper } from '../../utilities/common.helper';
import { CustomValidators } from 'ngx-custom-validators';

@Component({
  selector: 'meezan-input',
  templateUrl: './meezan-input.component.html',
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    { provide: ControlContainer, useExisting: NgForm }
  ]
})
export class MeezanInputComponent implements OnInit {

  // Input variables
  @Input('') name: string
  @Input('') type: string;
  @Input('') options: any;
  @Input('') value: any = null;

  selectedOption = "TESTING123";
  @Input('') rows: number;
  @Input('') matIcon: string;
  @Input('') maxlength: string;
  @Input('') minlength: string;
  @Input('') mode: string;
  @Input('') readonly: boolean = false;
  @Input('') required: boolean;
  @Input('') disabled: boolean;
  @Input('') placeholder: string;
  @Input('') matIconCallback: Function;
  @Input('') isPasswordPolicyApplied: boolean = false;
  @Input('') min: Date;
  @Input('') max: Date;




  @Input('') equalTo: MeezanInputComponent;
  @Input('') equalToErrorMessage: string;

  @Input('') greaterThan: MeezanInputComponent;
  @Input('') greaterThanErrorMessage: string;

  @Input('') greaterThanOrEqual: MeezanInputComponent;
  @Input('') greaterThanOrEqualErrorMessage: string;

  @Input('') lessThan: MeezanInputComponent;
  @Input('') lessThanErrorMessage: string;

  @Input('') lessThanOrEqual: MeezanInputComponent;
  @Input('') lessThanOrEqualErrorMessage: string;

  @ViewChild('input') input: NgControl;

  @Output() onBlur = new EventEmitter();
  @Output() selectChanged = new EventEmitter();


  public MOBILE_REGEX = CommonHelper.MOBILE_REGEX;
  public passwordHide = true;
  constructor(private change: ChangeDetectorRef) {

  }

  ngOnInit() {


    if (
      (
        this.equalTo
        || this.greaterThan
        || this.greaterThanOrEqual
        || this.lessThan
        || this.lessThanOrEqual) && !this.mode
    ) {
      console.error(
        ` Control: ${this.name}\nError: mode attribute not found. `);
      return;
    }

    if (
      (
        this.equalTo
        || this.greaterThan
        || this.greaterThanOrEqual
        || this.lessThan
        || this.lessThanOrEqual) && this.mode && this.mode.toLowerCase() !== "compare"
    ) {
      console.error(
        ` Control: ${this.name}\nError: mode value should be 'compare' for ['equalTo', 'greaterThan', 'greaterThanOrEqual', 'lessThan', 'lessThanOrEqual'] validations.
        ` );
      return;
    }

    if (
      (
        !this.equalTo
        && !this.greaterThan
        && !this.greaterThanOrEqual
        && !this.lessThan
        && !this.lessThanOrEqual) && this.mode
    ) {
      console.error(
        ` Control: ${this.name}\nError: mode attribute should be use with ['equalTo', 'greaterThan', 'greaterThanOrEqual', 'lessThan', 'lessThanOrEqual'] validations.
        ` );
      return;
    }

    if (
      (
        this.greaterThan
        || this.greaterThanOrEqual
        || this.lessThan
        || this.lessThanOrEqual) && (this.type != "number" && this.type != "date"  && this.type != "dateOpt")
    ) {
      console.error(
        ` Control: ${this.name}\nError: ['greaterThan', 'greaterThanOrEqual', 'lessThan', 'lessThanOrEqual'] validations should be use with type="number" and type="date".
        ` );
      return;
    }

  }

  ngAfterViewInit() {
    if (this.mode && this.mode.toLowerCase() == "compare" && this.equalTo) {
      this.input.control.setValidators([CustomValidators.equalTo(this.equalTo.input.control)]);
    }
    if (this.type && (this.type == "date" || this.type == "dateOpt")) {
      if (this.mode && this.mode.toLowerCase() == "compare" && this.greaterThanOrEqual) {
        this.input.control.setValidators([CustomValidators.minDate(this.greaterThanOrEqual.input.control)]);
      }
      if (this.mode && this.mode.toLowerCase() == "compare" && this.lessThanOrEqual) {
        this.input.control.setValidators([CustomValidators.maxDate(this.lessThanOrEqual.input.control)]);
      }
    }
    this.change.detectChanges();
  }

  call() {
    this.matIconCallback();
  }

  blur(event: FocusEvent) {

    if (this.type == "tel"
      && event.target["value"]
      && event.target["value"].toString().startsWith("0")
      && new RegExp(CommonHelper.MOBILE_REGEX).test(event.target["value"])
    ) {
      event.target["value"] =
        "971" + event.target["value"].substring(1, event.target["value"].length);
    }


    this.onBlur.emit();
  }

  keyPress(event: any) {
    const pattern = /[0-9\+\ ]/;
    // let inputChar = String.fromCharCode(event.charCode);

    if (!pattern.test(event.key)) {
      // invalid character, prevent input
      event.preventDefault();
    }
  }

  onChange() {
    // console.log(this.input);

  }


  selectEvent(event) {
    this.selectChanged.emit(event.target.value)
    // console.log(event.target.value)
  }




}
