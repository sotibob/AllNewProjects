import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentinfoComponent } from './studentinfo.component';

describe('StudentinfoComponent', () => {
  let component: StudentinfoComponent;
  let fixture: ComponentFixture<StudentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StudentinfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
