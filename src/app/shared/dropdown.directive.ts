import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core'
@Directive({
    selector:'appDropdown'
}
)
//This directive is alternate for bootstrap may be u can use...
export class DropdownDirective{
  @HostBinding('class.open') isOpen=false;
  @HostListener('document:click',['$event']) toggleOpen(event:Event){
    this.isOpen=this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
  }
  constructor(private elRef:ElementRef){

  }
}