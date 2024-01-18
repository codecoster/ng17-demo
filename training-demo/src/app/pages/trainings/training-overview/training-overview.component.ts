import { Component, inject } from '@angular/core';
import { TrainingWithBewertungService } from '../state/training-with-bewertung.service';
import { MatIcon } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-training-overview',
    templateUrl: './training-overview.component.html',
    styleUrls: ['./training-overview.component.scss'],
    standalone: true,
    imports: [MatProgressSpinner, MatButton, RouterLink, MatIcon]
})
export class TrainingOverviewComponent {
  private readonly trainingService = inject(TrainingWithBewertungService);
  trainingsWithBewertungen = this.trainingService.allTrainings;
}
