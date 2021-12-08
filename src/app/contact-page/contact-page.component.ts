import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {

  email: string = '';
  message: string = '';
  listing!: Listing;

  constructor(
    private route: ActivatedRoute,
    private router: Router
    ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.listing = fakeListings.find(listing => listing.id === id) || fakeListings[0];
    this.message = `Hi, am interested in your ${this.listing.name.toLowerCase()}!`
  }

  sendMessage(): void {
    alert('This feature is work in progress');
    this.router.navigateByUrl('/listings');
  }
}
