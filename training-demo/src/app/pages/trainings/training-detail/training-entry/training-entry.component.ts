import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';
import { TrainingWithBewertung } from '../../state/training.model';

@Component({
  selector: 'app-training-entry',
  templateUrl: './training-entry.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./training-entry.component.scss']
})
export class TrainingEntryComponent {

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
