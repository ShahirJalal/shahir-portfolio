import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-infrastructure',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './infrastructure.component.html'
})
export class InfrastructureComponent {}
