import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeshamrutComponent } from './keshamrut.component';

describe('KeshamrutComponent', () => {
  let component: KeshamrutComponent;
  let fixture: ComponentFixture<KeshamrutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeshamrutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KeshamrutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
