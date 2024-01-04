import { booleanAttribute, Component, Input } from '@angular/core';
import { StarsInputComponent } from '../../../../shared/stars-input/stars-input.component';
import { TrainingWithBewertung } from '../../state/training.model';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-training-entry',
    templateUrl: './training-entry.component.html',
    styleUrls: ['./training-entry.component.scss'],
    standalone: true,
  imports: [MatIconModule, DatePipe, StarsInputComponent]
})
export class TrainingEntryComponent {

  @Input() training?: TrainingWithBewertung;
  @Input({ transform: booleanAttribute }) showDetails = false;
}
