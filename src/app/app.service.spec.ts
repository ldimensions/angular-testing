import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { AppService } from './app.service';

describe('AppService', () => {

  let userService: AppService;
  let httpMock: HttpTestingController;
  const dummyUser = [
    {id: 1, name: 'Leanne Graham', username: 'Bret', email: 'Sincere@april.biz'},
    {id: 2, name: 'Ervin Howell', username: 'Antonette', email: 'Shanna@melissa.tv'}
  ];
  const dummyDeletedUser = [];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [],
      providers: [AppService]
    }).compileComponents();

    userService = TestBed.get(AppService);
    httpMock = TestBed.get(HttpTestingController);

  }));

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    const service: AppService = TestBed.get(AppService);
    expect(service).toBeTruthy();
  });

  it('should load users from server', () => {

    userService.getUsers().subscribe(users => {
      expect(users.length).toBe(2);
      expect(users).toEqual(dummyUser);
    });

    const request = httpMock.expectOne(`${userService.ROOT_URL}/users`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyUser);
  });

  it('should delete users from server', () => {
    const userId = 1;
    userService.deleteUser(userId).subscribe(user => {
      expect(user).toEqual(dummyDeletedUser);
    });

    const request = httpMock.expectOne(`${userService.ROOT_URL}/posts/${userId}`);
    expect(request.request.method).toBe('DELETE');
    request.flush(dummyDeletedUser);
  });


  
});
