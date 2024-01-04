import { Component, inject } from '@angular/core';
import { TrainingWithBewertungService } from '../state/training-with-bewertung.service';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@Component({
    selector: 'app-training-overview',
    templateUrl: './training-overview.component.html',
    styleUrls: ['./training-overview.component.scss'],
    standalone: true,
    imports: [MatProgressSpinnerModule, MatButtonModule, RouterLink, MatIconModule]
})
export class TrainingOverviewComponent {
  private readonly trainingService = inject(TrainingWithBewertungService);
  trainingsWithBewertungen = this.trainingService.allTrainings;
}
