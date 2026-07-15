import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

@Component({
  selector: 'app-lab',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './lab.component.html'
})
export class LabComponent {
  items = ['Homelab', 'Self-hosting', 'Linux experiments', 'Networking', 'Raspberry Pi', 'Arduino', 'ESP32'];
}
