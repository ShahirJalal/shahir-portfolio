import { Component } from '@angular/core';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-systems',
  standalone: true,
  imports: [RevealDirective],
  templateUrl: './systems.component.html'
})
export class SystemsComponent {}
