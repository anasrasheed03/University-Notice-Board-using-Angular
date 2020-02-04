
import { Directive, HostListener, ElementRef,Input,Output, EventEmitter } from '@angular/core';

@Directive({
    selector: '[onlyAlphabetsAllowed]'
})
export class OnlyAlphabetsAllowedDirective {
    onlyNumber:boolean=false;
  
    regexStr = '^[a-zA-Z]*$';
    constructor(private el: ElementRef) { 
        console.log('constructor')
    }


    @HostListener('keypress', ['$event']) onKeyPress(event) {
        console.log('event triggered')
        
        return new RegExp(this.regexStr).test(event.key);
    }

    @HostListener('paste', ['$event']) blockPaste(event: KeyboardEvent) {
        console.log('event triggered')
        this.validateFields(event);
    }

    validateFields(event) {
        setTimeout(() => {
           

            if (!new RegExp(this.regexStr).test(this.el.nativeElement.value)) {
                this.onlyNumber=true
                this.el.nativeElement.value = null;
                console.log(this.el.nativeElement);
                console.log(this.el.nativeElement.ngModel);
                console.log(this.el.nativeElement.input);
                console.log(this.onlyNumber)
                event.preventDefault();
            }
       

        }, 100)
    }

    
}