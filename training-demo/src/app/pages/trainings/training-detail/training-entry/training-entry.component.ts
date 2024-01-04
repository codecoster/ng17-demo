import { booleanAttribute, Component, Input } from '@angular/core';
import { TrainingWithBewertung } from '../../state/training.model';
import { DatePipe } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-training-entry',
    templateUrl: './training-entry.component.html',
    styleUrls: ['./training-entry.component.scss'],
    standalone: true,
    imports: [MatIconModule, DatePipe]
})
export class TrainingEntryComponent {

  @Input({transform: booleanAttribute}) detailActive?: boolean;
  @Input() training?: TrainingWithBewertung;

  //training = input<TrainingWithBewertung>();

}
