import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { SystemsComponent } from './components/systems/systems.component';
import { InfrastructureComponent } from './components/infrastructure/infrastructure.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { StackComponent } from './components/stack/stack.component';
import { GithubComponent } from './components/github/github.component';
import { BlogComponent } from './components/blog/blog.component';
import { LabComponent } from './components/lab/lab.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { TerminalComponent } from './components/terminal/terminal.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    HeaderComponent,
    HeroComponent,
    SystemsComponent,
    InfrastructureComponent,
    ExperienceComponent,
    StackComponent,
    GithubComponent,
    BlogComponent,
    LabComponent,
    ContactComponent,
    FooterComponent,
    TerminalComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {}
