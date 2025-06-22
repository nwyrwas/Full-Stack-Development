import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators ,ReactiveFormsModule } from "@angular/forms";
import { TripData } from '../services/trip-data';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.html',
  styleUrl: './edit-trip.css'
})
export class EditTrip implements OnInit {

  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message : string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripData
  ) {}


  ngOnInit() : void {

    // Retrieve stashed trip ID
    let tripCode = localStorage.getItem("tripCode");
    if (!tripCode) {
      alert("Something wrong, couldn't find where I stashed tripCode!");
      this.router.navigate(['']);
      return;
    }

    console.log("EditTripComponent::ngOnInit");
    console.log('tripcode:' + tripCode);

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    })

    this.tripService.getTrips()
      .subscribe({
        next: (trips: Trip[]) => {
          const foundTrip = trips.find(trip => trip.code === tripCode);
          this.trip = foundTrip as Trip;

          // Populate our record into the form
          if (foundTrip) {
            this.editForm.patchValue(foundTrip);
            this.message = 'Trip: ' + tripCode + ' retrieved';
          } else {
            this.message = 'No Trip Retrieved!';
          }

          console.log(this.message);
        },

        error: (error: any) => {
          console.log('Error: ' + error);
        }
      })
  }

  public onSubmit() {
    this.submitted = true;
    if(this.editForm.valid) {
      this.tripService.addTrip(this.editForm.value)
        .subscribe( {
          next: (data: any) => {
            console.log(data);
            this.router.navigate(['']);
          },
        error: (error: any) => {
          console.log('Error: ' + error);
        }
      });
    }
  }
}
