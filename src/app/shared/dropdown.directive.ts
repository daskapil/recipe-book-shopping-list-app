import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";

@Directive({
    selector: '[appDropdown]'
})
export class DropdownDirective {
    @HostBinding('class.open') isOpen: boolean = false;

    @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
        //Just closes the dropdown by clicking the target elemment only
        // this.isOpen = !this.isOpen;

        // Closing the Dropdown From Anywhere
        this.isOpen = this.elementRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    }

    constructor(private elementRef: ElementRef) { }
        
}