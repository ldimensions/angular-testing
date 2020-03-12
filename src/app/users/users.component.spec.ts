import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';
import { By } from '@angular/platform-browser';
import { UsersComponent } from './users.component';
import { AppService } from '../app.service';
import {Observable, of} from 'rxjs';
describe('UsersComponent', () => {
  let component: UsersComponent;
  let fixture: ComponentFixture<UsersComponent>;
  let userServiceMock: any;

  beforeEach(async(() => {

    userServiceMock = jasmine.createSpyObj('AppService', ['getUsers']);
    userServiceMock.getUsers.and.returnValue(of([]));

    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      declarations: [ UsersComponent ],
      providers: [
        {provide: AppService, useValue: userServiceMock}
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersComponent);
    component = fixture.componentInstance;
  });

  describe('Simple HTML', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it('should contain an h2 tag', () => {
      const el = fixture.debugElement.query(By.css('#listUsers'));
      expect(el.nativeElement.innerText).toBe('List all Users');
    });

    // it('Should minimum be one button on the page', () => {
    //   const el = fixture.debugElement.queryAll(By.css('button'));
    //   expect(el.length).toBeGreaterThan(0);
    // });
  });

  describe('List Users', () => {
    let helper: Helper;
    beforeEach(() => {
      helper = new Helper();
      // fixture.detectChanges();
    });

    it('Should show One Unordered List Item', () => {
      const el = fixture.debugElement.queryAll(By.css('ul'));
      expect(el.length).toBe(1);
    });

    it('Should show no list item when no users are available', () => {
      const el = fixture.debugElement.queryAll(By.css('li'));
      expect(el.length).toBe(0);
    });

    it('Should show the list of users loaded from UserService', () => {
      // const user = of([{id: 1, name: 'Alex'}]);
      // userServiceMock.getUsers.and.returnValue(user);
      userServiceMock.getUsers.and.returnValue(helper.getUsers(1));
      fixture.detectChanges();
      const el = fixture.debugElement.queryAll(By.css('li'));
      expect(el.length).toBe(1);
    });

    it('Should show the 1 delete button per user', () => {
      userServiceMock.getUsers.and.returnValue(helper.getUsers(1));
      fixture.detectChanges();
      let el = fixture.debugElement.queryAll(By.css('.delete'));
      expect(el.length).toBe(1);
    });

  });

  describe('Delete User', () => {
    let helper: Helper;
    beforeEach(() => {
      helper = new Helper();
      // fixture.detectChanges();
    });

    it('Should call delete once when we click Delete button', () => {
      // component.users = [{id: 1, name: 'Alex'}];
      userServiceMock.getUsers.and.returnValue(helper.getUsers(1));
      fixture.detectChanges();
      
      spyOn(component, 'deleteUser').and.callThrough();
      let button = fixture.debugElement.query(By.css('.delete')).nativeElement;
      button.click(1);
      fixture.detectChanges();
      expect(component.deleteUser).toHaveBeenCalled();
     
    // userServiceMock.getUsers.and.returnValue(helper.getUsers(1));
    // fixture.detectChanges();
    // const onClickMock = spyOn(component, 'deleteUser');
    // fixture.debugElement.query(By.css('.delete')).triggerEventHandler('click', null);
    // fixture.detectChanges();
    // expect(onClickMock).toHaveBeenCalled();

    });

  });

});

class Helper {
  users: any = [];
  getUsers(amount: number): Observable<any> {
    for (let i = 0; i < amount; i++) {
      this.users.push(
        {id:  i + 1, name: 'usr' + i}
      );
    }
    return of(this.users);
  }
}
