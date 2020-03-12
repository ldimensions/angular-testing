import { TestBed, async, ComponentFixture, inject } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { By } from '@angular/platform-browser';
import { HttpClientTestingModule,  } from '@angular/common/http/testing';

describe('AppComponent', () => {

  let app: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.debugElement.componentInstance;

  }));

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'AngularTesting01'`, () => {
    expect(app.title).toEqual('AngularTesting01');
  });

  it('should render title in a h1 tag', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('AngularTesting01!');

    // const el = fixture.debugElement.query(By.css('.welcome'));
    // expect(el.nativeElement.innerText).toContain('Welcome');

    // const el1 = fixture.debugElement.query(By.css('#welcome'));
    // expect(el1.nativeElement.innerText).toContain('Welcome');
  });
});
