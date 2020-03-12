import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { UserAddComponent } from './user-add.component';
import {Observable, of} from 'rxjs';
import { AppService } from 'src/app/app.service';


describe('UserAddComponent', () => {
  let component: UserAddComponent;
  let fixture: ComponentFixture<UserAddComponent>;
  let userService: AppService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, FormsModule],
      declarations: [ UserAddComponent ],
      providers: [AppService]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddComponent);
    // userService = TestBed.get(AppService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAddComponent);
    component = fixture.componentInstance;
    // fixture.detectChanges();
  });

  describe('Form Validation', () => {
    beforeEach(() => {
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
    it('Form invalid when empty', () => {
      expect(component.userForm.valid).toBeFalsy();
    });
  
    it('User Name field validity', () => {
      const userName = component.userForm.controls.userName;
      expect(userName.valid).toBeFalsy();
    });
  
    it('Email field validity', () => {
      const email = component.userForm.controls.email;
      expect(email.valid).toBeFalsy();
    });
  
    it('Submitting a form validation check', () => {
      expect(component.userForm.valid).toBeFalsy();
      component.userForm.controls.userName.setValue('user 1');
      component.userForm.controls.email.setValue('user1@gmail.com');
      expect(component.userForm.valid).toBeTruthy();
    });

  });

  describe('Form Submission', () => {

    beforeEach(() => {
      // fixture.detectChanges();
    });

    it('Submitting a form with valid date', () => {
      fixture.detectChanges();
      component.userForm.controls.userName.setValue('user1');
      component.userForm.controls.email.setValue('user1@gmail.com');
      expect(component.userForm.valid).toBeTruthy();
  
      spyOn(component, 'saveUsers').and.callThrough();
      let button = fixture.debugElement.query(By.css('.save')).nativeElement;
      button.click();
      // component.saveUsers();
      expect(component.saveUsers).toHaveBeenCalled();
      // const message = fixture.debugElement.query(By.css('#succcessMsg')).nativeElement.innerText;
      // expect(message).toContain('Success');
    });
    it('Submitting a form with inValid date', () => {
      fixture.detectChanges();
  
      spyOn(component, 'saveUsers').and.callThrough();
      let button = fixture.debugElement.query(By.css('.save')).nativeElement;
      button.click();
      // component.saveUsers();
      expect(component.saveUsers).toHaveBeenCalled();
    });
  });

});
