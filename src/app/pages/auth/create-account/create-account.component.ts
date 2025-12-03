import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-create-account',
  imports: [CommonModule, ReactiveFormsModule, RouterLink],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css',
})
export class CreateAccountComponent {  
  form!: FormGroup;         
  passwordVisible = false;
  submitting = false;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      acceptTos: [false, Validators.requiredTrue],
    });
  }


  togglePasswordVisibility() {
    this.passwordVisible = !this.passwordVisible;
  }

  async submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    this.submitting = true;
    try {
      // Здесь отправка на бекенд
      // await this.authService.register(this.form.value)
      console.log('Create account payload', this.form.value);
      // показываем успешный результат / редирект
    } catch (err) {
      console.error(err);
      // обработка ошибки
    } finally {
      this.submitting = false;
    }
  }

  // Заглушка для Google auth — интегрировать SDK / backend
  signUpWithGoogle() {
    // trigger Google OAuth flow (implement integration)
    console.log('Sign up with Google clicked');
  }

  get firstName() { return this.form.get('firstName'); }
  get lastName() { return this.form.get('lastName'); }
  get email() { return this.form.get('email'); }
  get password() { return this.form.get('password'); }
}
