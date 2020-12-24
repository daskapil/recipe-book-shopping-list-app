import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @Output() addIngredient = new EventEmitter<Ingredient>();
  @ViewChild('amountInput', {static: true}) amountInput: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(name: HTMLInputElement) {
    this.addIngredient.emit(new Ingredient( name.value, this.amountInput.nativeElement.value ));
  }

}
