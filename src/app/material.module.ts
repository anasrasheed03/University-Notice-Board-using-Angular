import { NgModule } from '@angular/core';
import {
  MatInputModule, MatFormFieldModule, MatRadioModule, MatCheckboxModule, MatTooltipModule, MatSelectModule, MatAutocompleteModule, MatIcon, MatIconModule, MatDatepickerModule, MatNativeDateModule
} from "@angular/material";
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatExpansionModule } from '@angular/material/expansion';


@NgModule({
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
  exports: [
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatSelectModule,
    MatTooltipModule,
    MatAutocompleteModule,
    MatSlideToggleModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepickerModule,
    MatNativeDateModule 
  ],
})
export class AngularmaterialModule { }
