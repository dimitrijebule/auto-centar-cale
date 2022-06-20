import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewPartComponent } from './add-new-part.component';

describe('AddNewPartComponent', () => {
  let component: AddNewPartComponent;
  let fixture: ComponentFixture<AddNewPartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNewPartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
