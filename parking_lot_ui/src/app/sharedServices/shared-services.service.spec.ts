import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SharedServicesService } from './shared-services.service';

describe('SharedServicesService', () => {
  let service: SharedServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ]
    });
    service = TestBed.inject(SharedServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('url should be equal to book slot url', () => {
    const service: SharedServicesService = TestBed.get(SharedServicesService);
    expect(service.bookSlotUrl).toEqual("http://localhost:2000/user/newparking");
  });

  it('url should be equal to search ticket url', () => {
    const service: SharedServicesService = TestBed.get(SharedServicesService);
    expect(service.searchTicketUrl).toEqual("http://localhost:2000/user/ticketdetail");
  });

  it('url should be equal to color cars url', () => {
    const service: SharedServicesService = TestBed.get(SharedServicesService);
    expect(service.getRegistrationNumberByColorUrl).toEqual("http://localhost:2000/user/allcars");
  });
});
