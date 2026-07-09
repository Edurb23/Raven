import { ChangeDetectionStrategy, Component, input, signal } from '@angular/core';
import { AlbumDetails } from '../../models/album-details.models';

@Component({
  selector: 'app-album-review-composer',
  templateUrl: './album-review-composer.component.html',
  styleUrl: './album-review-composer.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AlbumReviewComposerComponent {
  readonly album = input.required<AlbumDetails>();
  protected readonly selectedRating = signal(0);

  protected selectRating(rating: number): void {
    this.selectedRating.set(rating);
  }
}
