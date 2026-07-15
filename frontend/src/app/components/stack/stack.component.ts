import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface StackColumn {
  title: string;
  items: string[];
}

@Component({
  selector: 'app-stack',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './stack.component.html'
})
export class StackComponent {
  columns: StackColumn[] = [
    { title: 'Backend', items: ['Java', 'Spring', 'Spring Boot', 'REST', 'Hibernate', 'Oracle', 'PostgreSQL'] },
    { title: 'Frontend', items: ['Angular', 'TypeScript'] },
    { title: 'Infrastructure', items: ['Docker', 'Jenkins', 'Linux', 'AWS', 'Cloudflare', 'Git'] }
  ];
}
