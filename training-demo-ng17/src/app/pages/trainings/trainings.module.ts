import { NgModule } from '@angular/core';
import { TrainingsDetailComponent } from './training-detail/trainings-detail.component';
import { TrainingOverviewComponent } from './training-overview/training-overview.component';

import { TrainingsRoutingModule } from './trainings-routing.module';


@NgModule({
  imports: [
    TrainingsRoutingModule,
    TrainingsDetailComponent,
    TrainingOverviewComponent
  ]
})
export class TrainingsModule {
}
