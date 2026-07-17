import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RevealDirective } from '../../directives/reveal.directive';

interface ExperienceEntry {
  company: string;
  role: string;
  period: string;
  detail: string;
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule, RevealDirective],
  templateUrl: './experience.component.html'
})
export class ExperienceComponent {
  entries: ExperienceEntry[] = [
    // {
    //   company: 'Standard Chartered',
    //   role: 'Java Developer',
    //   period: '2025 — Present',
    //   detail: 'Enterprise Java on core banking systems — Spring Boot, Angular, Oracle.'
    // },
    // {
    //   company: 'Aevoco',
    //   role: 'Software Engineer',
    //   period: '2024 — 2025',
    //   detail: "Full-stack development and deployment work across the team's stack."
    // },
    {
      company: 'OpenApps',
      role: 'Software Engineer',
      period: '2023 — Present',
      detail: 'Full-stack Java and Angular development, Docker-based deployment workflows.'
    }
  ];
}
