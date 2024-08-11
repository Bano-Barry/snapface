import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { UpperCasePipe } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    UpperCasePipe,
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  constructor (private router: Router) {}
  @Input() faceSnap! : FaceSnap;
  ngOnInit() {
  }

  onViewFaceSnap() {
    this.router.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
