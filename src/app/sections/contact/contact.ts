import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

interface Service {
  value: string;
  label: string;
}

@Component({
  selector: 'app-contact',
  imports: [ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Contact {
  private readonly fb = inject(FormBuilder);

  protected readonly isServiceOpen = signal(false);
  protected readonly isPrivacyChecked = signal(false);

  protected readonly services: Service[] = [
    { value: 'registro', label: 'Registro de marca' },
    { value: 'renovacion', label: 'Renovación' },
    { value: 'vigilancia', label: 'Vigilancia' },
    { value: 'oposicion', label: 'Oposición' },
  ];

  protected readonly contactForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    phone: ['', Validators.required],
    service: ['', Validators.required],
  });

  toggleServiceDropdown(): void {
    this.isServiceOpen.update((v) => !v);
  }

  selectService(service: Service): void {
    this.contactForm.patchValue({ service: service.value });
    this.isServiceOpen.set(false);
  }

  getSelectedServiceLabel(): string {
    const value = this.contactForm.value.service;
    return this.services.find((s) => s.value === value)?.label || 'Selecciona un servicio';
  }

  togglePrivacy(): void {
    this.isPrivacyChecked.update((v) => !v);
  }

  onSubmit(): void {
    if (this.contactForm.valid && this.isPrivacyChecked()) {
      console.log('Form data:', this.contactForm.value);
    }
  }
}
