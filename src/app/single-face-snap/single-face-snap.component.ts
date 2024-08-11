import { Component, Input } from '@angular/core';
import { FaceSnapsService } from '../services/face-snaps.serivce';
import { FaceSnap } from '../models/face-snap';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { NgClass, NgStyle, UpperCasePipe } from '@angular/common';

@Component({
  selector: 'app-single-face-snap',
  standalone: true,
  imports: [
    NgStyle, 
    NgClass, 
    UpperCasePipe, 
    RouterLink
  ],
  templateUrl: './single-face-snap.component.html',
  styleUrl: './single-face-snap.component.scss',
})
export class SingleFaceSnapComponent {
  constructor(private faceSnapService: FaceSnapsService, private route: ActivatedRoute) {}
  snapButtonText: string = 'Oh Snap!';
  userHasSnapped!: boolean;
  faceSnap!: FaceSnap;
  ngOnInit() {
    // le snapsoht est un aperçu instantané d'une valeur qui change au cours du temps
    this.prepareInterface(); 
    this.getFacesnap();
  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
  private prepareInterface() {
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }
  private getFacesnap() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }
}
