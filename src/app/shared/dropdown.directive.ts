import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

/* 
    //Just closes the dropdown by clicking the target elemment only
    @HostListener('click') toggleOpen() {
        this.isOpen = !this.isOpen;
    }
 */
    // Closing the Dropdown From Anywhere
    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elementRef: ElementRef) { }      
}