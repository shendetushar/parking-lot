import { ComponentFixture, TestBed } from '@angular/core/testing';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BookSlotComponent } from './book-slot.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('BookSlotComponent', () => {
  let component: BookSlotComponent;
  let fixture: ComponentFixture<BookSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookSlotComponent ],
      imports:[FormsModule, ReactiveFormsModule,HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get the response',()=>{
    expect(component.bookSlot()).toThrowError
  })

  it('Slot Booking Form Invalid when empty', () => {
    expect(component.bookingForm.valid).toBeFalsy();
  });
});
