import { Component, Input } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [
    NgStyle
  ],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  snapButtonText: string = 'Oh Snap!';
  userHasSnapped!: boolean;
  @Input() faceSnap! : FaceSnap;
  ngOnInit() {
  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnap.snaps--;
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnap.snaps++;
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
