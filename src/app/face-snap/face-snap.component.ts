import { Component } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss',
})
export class FaceSnapComponent {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapButtonText: string = 'Oh Snap!';
  userHasSnapped!: boolean;
  ngOnInit() {
    this.title = 'Archibald';
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 5;
    this.imageUrl =
      'https://cdn.pixabay.com/photo/2015/05/16/03/teddy-bear-792273_1280.jpg';
  }
  onSnap(): void {
    if (this.userHasSnapped) {
      this.unSnap();
    } else {
      this.snap();
    }
  }

  unSnap() {
    this.snaps--;
    this.snapButtonText = 'Oh Snap!';
    this.userHasSnapped = false;
  }

  snap() {
    this.snaps++;
    this.snapButtonText = 'Oops, unSnap!';
    this.userHasSnapped = true;
  }
}
