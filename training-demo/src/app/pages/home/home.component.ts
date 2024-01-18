import { DecimalPipe } from '@angular/common';
import { afterNextRender, afterRender, AfterRenderPhase, Component, OnInit, Signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BewertungService } from '../../shared/bewertung/bewertung.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MatIconModule, DecimalPipe]
})
export class HomeComponent implements OnInit {
  bewertungDurchnitt?: Signal<number>;

  constructor(private readonly bewertungService: BewertungService) {
    afterRender(() => {
      console.log('afterRenderCalled')
    });
    afterNextRender(() => {
      console.log('afterNextRenderCalled Early Read')
    }, {phase: AfterRenderPhase.EarlyRead});
    afterNextRender(() => {
      console.log('afterNextRenderCalled Write')
    }, {phase: AfterRenderPhase.Write});
    afterNextRender(() => {
      console.log('afterNextRenderCalled Mixed')
    }, {phase: AfterRenderPhase.MixedReadWrite});
    afterNextRender(() => {
      console.log('afterNextRenderCalled Read')
    }, {phase: AfterRenderPhase.Read})
  }

  ngOnInit(): void {
    this.bewertungDurchnitt = this.bewertungService.durchschnittsBewertung;
  }
}
