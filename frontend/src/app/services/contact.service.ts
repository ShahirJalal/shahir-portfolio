import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface ContactRequest {
  name: string;
  email: string;
  message: string;
}

export interface ContactResponse {
  id: number;
  receivedAt: string;
}

export interface ContactValidationError {
  status: number;
  error: string;
  fields: Record<string, string>;
}

@Injectable({ providedIn: 'root' })
export class ContactService {
  constructor(private http: HttpClient) {}

  submit(request: ContactRequest): Observable<ContactResponse> {
    return this.http.post<ContactResponse>(`${environment.apiBaseUrl}/contact`, request);
  }
}

export function isValidationError(error: unknown): error is HttpErrorResponse & { error: ContactValidationError } {
  return error instanceof HttpErrorResponse && !!error.error?.fields;
}
