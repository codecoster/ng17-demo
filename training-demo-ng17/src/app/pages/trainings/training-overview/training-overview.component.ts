import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { RouterLink } from '@angular/router';
import { StarsInputComponent } from '../../../shared/stars-input/stars-input.component';
import { TrainingWithBewertungService } from '../state/training-with-bewertung.service';
import { TrainingEntryComponent } from '../training-detail/training-entry/training-entry.component';

@Component({
  selector: 'app-training-overview',
  templateUrl: './training-overview.component.html',
  styleUrls: ['./training-overview.component.scss'],
  standalone: true,
  imports: [MatProgressSpinnerModule, MatButtonModule, RouterLink, StarsInputComponent, TrainingEntryComponent]
})
export class TrainingOverviewComponent {
  private readonly trainingService = inject(TrainingWithBewertungService);
  trainingsWithBewertungen = this.trainingService.allTrainings;
}
