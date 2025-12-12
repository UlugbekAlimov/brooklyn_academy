import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatePrivacyComponent } from './candidate-privacy.component';

describe('CandidatePrivacyComponent', () => {
  let component: CandidatePrivacyComponent;
  let fixture: ComponentFixture<CandidatePrivacyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CandidatePrivacyComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CandidatePrivacyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
