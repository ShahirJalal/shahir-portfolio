import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AfterViewChecked, Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './terminal.component.html'
})
export class TerminalComponent implements AfterViewChecked {
  @ViewChild('output') outputRef!: ElementRef<HTMLDivElement>;
  @ViewChild('input') inputRef!: ElementRef<HTMLInputElement>;

  open = false;
  lines: string[] = [];
  inputValue = '';

  private readonly konami = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'
  ];
  private progress = 0;
  private shouldFocusInput = false;

  private readonly commands: Record<string, () => void> = {
    help: () => {
      this.printLine('Available commands:');
      this.printLine('  resume     — open resume');
      this.printLine('  projects   — jump to featured systems');
      this.printLine('  github     — open GitHub profile');
      this.printLine('  linkedin   — open LinkedIn profile');
      this.printLine('  contact    — jump to contact section');
      this.printLine('  clear      — clear the terminal');
      this.printLine('  exit       — leave terminal mode');
    },
    resume: () => {
      this.printLine('Opening resume...');
      window.open('https://drive.google.com/file/d/1rydrUdjaCoRAVH4ep9DSzzZWWko-hjJG/view', '_blank');
    },
    projects: () => {
      this.printLine('Jumping to Featured Systems...');
      this.closeTerminal();
      document.getElementById('systems')?.scrollIntoView({ behavior: 'smooth' });
    },
    github: () => {
      this.printLine('Opening GitHub...');
      window.open('https://github.com/ShahirJalal', '_blank');
    },
    linkedin: () => {
      this.printLine('Opening LinkedIn...');
      window.open('https://www.linkedin.com/in/shahirjalal/', '_blank');
    },
    contact: () => {
      this.printLine('Jumping to Contact...');
      this.closeTerminal();
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    },
    clear: () => {
      this.lines = [];
    },
    exit: () => {
      this.printLine('Closing terminal...');
      setTimeout(() => this.closeTerminal(), 200);
    }
  };

  ngAfterViewChecked(): void {
    if (this.outputRef) {
      this.outputRef.nativeElement.scrollTop = this.outputRef.nativeElement.scrollHeight;
    }
    if (this.shouldFocusInput && this.inputRef) {
      this.inputRef.nativeElement.focus();
      this.shouldFocusInput = false;
    }
  }

  @HostListener('window:keydown', ['$event'])
  onWindowKeydown(e: KeyboardEvent): void {
    if (this.open) {
      return;
    }
    if (e.key === this.konami[this.progress]) {
      this.progress++;
      if (this.progress === this.konami.length) {
        this.openTerminal();
        this.progress = 0;
      }
    } else {
      this.progress = e.key === this.konami[0] ? 1 : 0;
    }
  }

  onInputKeydown(e: KeyboardEvent): void {
    if (e.key === 'Enter') {
      const val = this.inputValue.trim().toLowerCase();
      this.printLine('$ ' + val);
      if (this.commands[val]) {
        this.commands[val]();
      } else if (val) {
        this.printLine(`command not found: ${val}`);
      }
      this.inputValue = '';
    }
    if (e.key === 'Escape') {
      this.closeTerminal();
    }
  }

  private openTerminal(): void {
    this.open = true;
    this.lines = [];
    this.printLine('Terminal mode activated.');
    this.printLine("Type 'help' to see available commands.");
    this.shouldFocusInput = true;
  }

  private closeTerminal(): void {
    this.open = false;
  }

  private printLine(text: string): void {
    this.lines = [...this.lines, text];
  }
}
