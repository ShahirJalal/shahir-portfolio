import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { RevealDirective } from '../../directives/reveal.directive';
import { ContactRequest, ContactService, isValidationError } from '../../services/contact.service';

type SubmitState = 'idle' | 'submitting' | 'success' | 'error';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule, RevealDirective],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  model: ContactRequest = { name: '', email: '', message: '' };
  state: SubmitState = 'idle';
  fieldErrors: Record<string, string> = {};
  errorMessage = '';

  constructor(private contactService: ContactService) {}

  onSubmit(form: NgForm): void {
    if (form.invalid || this.state === 'submitting') {
      return;
    }

    this.state = 'submitting';
    this.fieldErrors = {};
    this.errorMessage = '';

    this.contactService.submit(this.model).subscribe({
      next: () => {
        this.state = 'success';
        form.resetForm();
        this.model = { name: '', email: '', message: '' };
      },
      error: (err) => {
        this.state = 'error';
        if (isValidationError(err)) {
          this.fieldErrors = err.error.fields;
          this.errorMessage = 'Please fix the highlighted fields and try again.';
        } else {
          this.errorMessage = "Something went wrong sending your message. Please email me directly instead.";
        }
      }
    });
  }
}
