import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSmsComponent } from './text-sms.component';

describe('TextSmsComponent', () => {
  let component: TextSmsComponent;
  let fixture: ComponentFixture<TextSmsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TextSmsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextSmsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
