import { DecimalPipe } from '@angular/common';
import {
  afterNextRender,
  afterRender,
  AfterRenderPhase,
  Component,
  ElementRef,
  Signal,
  ViewChild
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { BewertungService } from '../../shared/bewertung/bewertung.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    standalone: true,
    imports: [MatIconModule, DecimalPipe]
})
export class HomeComponent {
  @ViewChild('header') headerEl!: ElementRef<HTMLHeadingElement>;

  bewertungDurchnitt: Signal<number>;

  constructor(private readonly bewertungService: BewertungService) {
    this.bewertungDurchnitt = this.bewertungService.durchschnittsBewertung;
    afterRender(() => {
      console.log('afterRender', this.bewertungDurchnitt());
    });
    afterNextRender(() => {
      console.log('afterNextRender', this.headerEl.nativeElement);
    });
    afterNextRender(() => {
      console.log('afterNextRender EarlyRead', this.headerEl.nativeElement);
    }, {phase: AfterRenderPhase.EarlyRead});
    afterNextRender(() => {
      console.log('afterNextRender Read', this.headerEl.nativeElement);
    }, {phase: AfterRenderPhase.Read});
    afterNextRender(() => {
      console.log('afterNextRender MixedReadWrite', this.headerEl.nativeElement);
    }, {phase: AfterRenderPhase.MixedReadWrite});
    afterNextRender(() => {
      console.log('afterNextRender Write', this.headerEl.nativeElement);
    }, {phase: AfterRenderPhase.Write});
  }
}
