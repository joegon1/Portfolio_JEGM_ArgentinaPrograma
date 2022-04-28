import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedesSocialComponent } from './redes-social.component';

describe('RedesSocialComponent', () => {
  let component: RedesSocialComponent;
  let fixture: ComponentFixture<RedesSocialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedesSocialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedesSocialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
