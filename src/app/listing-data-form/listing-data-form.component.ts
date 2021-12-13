import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { Listing } from '../types';

@Component({
  selector: 'app-listing-data-form',
  templateUrl: './listing-data-form.component.html',
  styleUrls: ['./listing-data-form.component.css']
})
export class ListingDataFormComponent implements OnInit {

  @Input() buttonText: any;
  @Input() listingData: any;

  @Output() onSubmit = new EventEmitter<Listing>();
  name: string= '';
  description: string = '';
  price: string = '';

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    if(this.listingData) {
      this.name = this.listingData.name;
      this.description = this.listingData.description;
      this.price = this.listingData.price;
    }
  }

  onSave(): void {
    this.onSubmit.emit({
      id: '',
      name: this.name,
      description: this.description,
      price: Number(this.price)
    });
  }

}
