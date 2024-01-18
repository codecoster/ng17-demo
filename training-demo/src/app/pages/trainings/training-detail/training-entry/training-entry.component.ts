import { booleanAttribute, ChangeDetectionStrategy, Component, computed, effect, Input, input } from '@angular/core';
import { TrainingWithBewertung } from '../../state/training.model';
import { DatePipe } from '@angular/common';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-training-entry',
    templateUrl: './training-entry.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./training-entry.component.scss'],
    standalone: true,
    imports: [MatIcon, DatePipe]
})
export class TrainingEntryComponent {

  @Input(({transform: booleanAttribute})) showDescription?: boolean
  training = input.required<TrainingWithBewertung>();

  trainerName = computed(() => {
    return this.training().trainer.name
  });

  constructor() {
    effect(() => {
      console.log('trainer', this.training())
    });
  }

}
