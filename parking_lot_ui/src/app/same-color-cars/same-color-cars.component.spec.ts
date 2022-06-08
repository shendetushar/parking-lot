import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SameColorCarsComponent } from './same-color-cars.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('SameColorCarsComponent', () => {
  let component: SameColorCarsComponent;
  let fixture: ComponentFixture<SameColorCarsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SameColorCarsComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SameColorCarsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("test search function",()=>{
    expect(component.search("Black")).toBeUndefined()
  })
});
